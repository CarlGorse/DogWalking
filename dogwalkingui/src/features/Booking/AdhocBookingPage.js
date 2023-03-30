import AdhocBookingPageTimeslots from "./AdhocBookingPageTimeslots";
import BookingConfirmationDetails from "./BookingConfirmationDetails";
import { timeslotData } from '../Timeslot/TimeslotData';
import { useEffect, useRef, useState } from 'react';

function AdhocBookingPage() {

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
  }

  function updateTimeslotsState(timeslots) {
    setTimeslots(timeslots.slice()); // copy array for state to recognise any changes
  }

  if (getState == 'timeslots') {
    return <AdhocBookingPageTimeslots timeslots={getTimeslots} onBook={(booking) => onStartBooking(booking)} onUpdateTimeslots={timeslots => updateTimeslotsState(timeslots)} />
  }
  else {
    return <BookingConfirmationDetails booking={currentBooking.current} onBookingMade={(booking) => onBookingMade(booking)} />
  }

}

export default AdhocBookingPage;
