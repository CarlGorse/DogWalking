import Container from 'react-bootstrap/Container';
import BookingConfirmationModal from '../ConfirmationModal';
import { bookTimeslots } from "../BookingLogic";
import InputBookingDetails from "./InputBookingDetails";
import { timeslotData } from 'components/Data/TimeslotData';
import Timeslots from "./Timeslots";
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
  var timeslots;
  var inputBookingDetails;

  if (getShowModal) {
    bookingConfirmationModal = <BookingConfirmationModal show={getShowModal} handleClose={handleCloseModal}></BookingConfirmationModal>
  }

  if (getPageState == 'timeslots') {
    timeslots = <Timeslots timeslots={getTimeslots} onBook={(booking) => onStartBooking(booking)} onUpdateTimeslots={timeslots => updateTimeslotsState(timeslots)} />
  }
  else {
    inputBookingDetails = <InputBookingDetails booking={currentBooking.current} onBookingMade={(booking) => onBookingMade(booking)} onCancelBooking={onCancelBooking} />
  }

  return (
    <Container>
      {bookingConfirmationModal}
      {timeslots}
      {inputBookingDetails}
    </Container>
  )
}

export default Page;
