import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Confirmation from './Components/Confirmation';
import InputBookingDetails from "./Components/InputBookingDetails/InputBookingDetails";
import SelectTimeslots from "./Components/SelectTimeslots/SelectTimeslots";
import { useEffect, useRef, useState } from 'react';

function Page() {

  const [getPageState, setPageState] = useState('timeslots');
  const [getConfirmationModal, setConfirmationModal] = useState(null);
  const [getTimeslots, setTimeslots] = useState([]);

  var currentBooking = useRef(null);

  useEffect(() => {
    loadTimeslots()
  }, []);

  function loadTimeslots() {
    axios.get("https://localhost:7083/api/timeslots/get")
      .then(response => {
        setTimeslots(response.data)
      })
  }

  function onStartBooking(booking) {
    setConfirmationModal(null);
    currentBooking.current = booking;
    setPageState('book');
  }

  function doConfirmBooking(booking) {

    var createBookingDto = {
      Location: 1, TimeslotIds: booking.timeslots.map(x => x.id)
    };
    console.log(createBookingDto);
    axios.post("https://localhost:7083/api/bookings/CreateBooking", createBookingDto)
      .then(loadTimeslots())

    setPageState('timeslots');

    let confirmationModal = <Confirmation
      booking={booking}
      show={true}
      handleClose={handleCloseModal}
    />

    setConfirmationModal(confirmationModal)
  }

  function onCancelBooking() {
    setPageState('timeslots');
  }

  function updateTimeslotsState(timeslots) {
    setTimeslots(timeslots.slice()); // copy array for state to recognise any changes
  }

  function handleCloseModal() {
    setConfirmationModal(null);
  }

  var selectTimeslots;
  var inputBookingDetails;

  if (getPageState === 'timeslots') {
    selectTimeslots = <div className="pt-3"><SelectTimeslots
      timeslots={getTimeslots}
      onBook={(booking) => onStartBooking(booking)}
      onUpdateTimeslots={timeslots => updateTimeslotsState(timeslots)} />
    </div>
  }
  else {
    inputBookingDetails = <InputBookingDetails booking={currentBooking.current} confirmBooking={booking => doConfirmBooking(booking)} onCancelBooking={onCancelBooking} />
  }

  return (
    <Container className='mt-5'>
      {getConfirmationModal}
      {selectTimeslots}
      {inputBookingDetails}
    </Container>
  )
}

export default Page;
