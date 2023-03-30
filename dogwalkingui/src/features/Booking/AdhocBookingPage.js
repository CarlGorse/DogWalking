import AdhocBookingPageTimeslots from "./AdhocBookingPageTimeslots";
import BookingConfirmationDetails from "./BookingConfirmationDetails";
import BookingConfirmationModal from './BookingConfirmationModal';
import { timeslotData } from '../Timeslot/TimeslotData';
import { useEffect, useRef, useState } from 'react';

function AdhocBookingPage() {

  const [getShowModal, setShowModal] = useState(false);
  const [getState, setState] = useState('timeslots');
  const [getTimeslots, setTimeslots] = useState([]);

  var currentBooking = useRef(null);

  useEffect(() => {
    setTimeslots(timeslotData);
  }, []);

  function onStartBooking(booking) {
    currentBooking.current = booking;
    setState('book');
  }

  function onBookingMade(booking) {
    var timeslots = getTimeslots;

    booking.timeslots.forEach(bookedTimeslot => {

      bookedTimeslot.status = 'booked';
      bookedTimeslot.booking = booking;
      bookedTimeslot.isSelected = false;

      timeslots[bookedTimeslot.id] = bookedTimeslot;
    });

    updateTimeslotsState(timeslots);
    setState('timeslots');

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

  if (getState == 'timeslots') {

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
