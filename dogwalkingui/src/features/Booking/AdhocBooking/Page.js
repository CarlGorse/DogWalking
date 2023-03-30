import Timeslots from "./Timeslots";
import { bookTimeslots } from "../BookingLogic";
import BookingConfirmationDetails from "./ConfirmationDetails";
import BookingConfirmationModal from '../BookingConfirmationModal';
import { timeslotData } from '../../../components/Data/TimeslotData';
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
        <Timeslots timeslots={getTimeslots} onBook={(booking) => onStartBooking(booking)} onUpdateTimeslots={timeslots => updateTimeslotsState(timeslots)} />
      </>
    )
  }
  else {
    return <BookingConfirmationDetails booking={currentBooking.current} onBookingMade={(booking) => onBookingMade(booking)} />
  }

}

export default Page;
