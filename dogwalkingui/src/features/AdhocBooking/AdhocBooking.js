import Container from 'react-bootstrap/Container';
import ConfirmationModal from './Components/ConfirmationModal';
import { bookTimeslots } from "functions/BookingLogic";
import InputBookingDetails from "./Components/InputBookingDetails/InputBookingDetails";
import SelectTimeslots from "./Components/SelectTimeslots/SelectTimeslots";
import { timeslotData } from 'components/Data/TimeslotData';
import { useEffect, useRef, useState } from 'react';

function Page() {

  const [getPageState, setPageState] = useState('timeslots');
  const [getShowModal, setShowModal] = useState(false);
  const [getTimeslots, setTimeslots] = useState([]);

  var currentBooking = useRef(null);

  useEffect(() => {
    setTimeslots(timeslotData);
  }, []);

  function onStartBooking(booking) {
    currentBooking.current = booking;
    setPageState('book');
  }

  function onBookingMade(booking) {

    var bookedTimeslots = bookTimeslots(getTimeslots, booking);

    updateTimeslotsState(bookedTimeslots);
    setPageState('timeslots');

    setShowModal(true);
  }

  function onCancelBooking() {
    setPageState('timeslots');
  }

  function updateTimeslotsState(timeslots) {
    setTimeslots(timeslots.slice()); // copy array for state to recognise any changes
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  var bookingConfirmationModal;
  var selectTimeslots;
  var inputBookingDetails;

  if (getShowModal) {
    bookingConfirmationModal = <ConfirmationModal show={getShowModal} handleClose={handleCloseModal} />
  }

  if (getPageState === 'timeslots') {
    selectTimeslots = <SelectTimeslots timeslots={getTimeslots} onBook={(booking) => onStartBooking(booking)} onUpdateTimeslots={timeslots => updateTimeslotsState(timeslots)} />
  }
  else {
    inputBookingDetails = <InputBookingDetails booking={currentBooking.current} onBookingMade={(booking) => onBookingMade(booking)} onCancelBooking={onCancelBooking} />
  }

  return (
    <Container className='mt-5'>
      {bookingConfirmationModal}
      {selectTimeslots}
      {inputBookingDetails}
    </Container>
  )
}

export default Page;
