import AdhocBookingPageTimeslots from "./AdhocBookingPageTimeslots";
import { bookTimeslots } from "./BookingLogic";
import BookingConfirmationDetails from "./BookingConfirmationDetails";
import BookingConfirmationModal from './BookingConfirmationModal';
import { timeslotData } from '../Timeslot/TimeslotData';
import { useEffect, useRef, useState } from 'react';

function AdhocBookingPage() {

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

  function updateTimeslotsState(timeslots) {
    setTimeslots(timeslots.slice()); // copy array for state to recognise any changes
  }

  var bookingConfirmationModal;
  if (getShowModal) {
    bookingConfirmationModal = <BookingConfirmationModal show={getShowModal} handleClose={handleCloseModal}></BookingConfirmationModal>
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  if (getPageState == 'timeslots') {

    return (
      <>
        {bookingConfirmationModal}
        <AdhocBookingPageTimeslots timeslots={getTimeslots} onBook={(booking) => onStartBooking(booking)} onUpdateTimeslots={timeslots => updateTimeslotsState(timeslots)} />
      </>
    )
  }
  else {
    return <BookingConfirmationDetails booking={currentBooking.current} onBookingMade={(booking) => onBookingMade(booking)} />
  }

}

export default AdhocBookingPage;
