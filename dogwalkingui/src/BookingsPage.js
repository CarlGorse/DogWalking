import BookingsList from './BookingsList';
import BookError from './BookError';
import BookModal from './BookModal';
import Button from 'react-bootstrap/Button';
import DatePicker from "./DatePicker";
import { useState, useRef } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function BookingsPage() {

  const [getShowModal, setShowModal] = useState(false);
  const [getShowBook, setShowBook] = useState(false);
  const [getShowError, setShowError] = useState(false);

  var bookings = [
    { id: 1, startTime: '09:00', endTime: '09:15', duration: '15', isBooked: true },
    { id: 2, startTime: '09:15', endTime: '09:30', duration: '15', isBooked: false },
    { id: 3, startTime: '09:30', endTime: '09:45', duration: '15', isBooked: false },
    { id: 4, startTime: '09:45', endTime: '10:00', duration: '15', isBooked: false },
    { id: 5, startTime: '10:00', endTime: '10:15', duration: '15', isBooked: false },
    { id: 6, startTime: '10:15', endTime: '10:30', duration: '15', isBooked: false },
    { id: 7, startTime: '10:30', endTime: '10:45', duration: '15', isBooked: false },
    { id: 8, startTime: '10:45', endTime: '11:00', duration: '15', isBooked: false },
    { id: 9, startTime: '11:00', endTime: '11:15', duration: '15', isBooked: false },
    { id: 10, startTime: '11:15', endTime: '11:30', duration: '15', isBooked: true },
    { id: 11, startTime: '11:30', endTime: '11:45', duration: '15', isBooked: true },
    { id: 12, startTime: '11:45', endTime: '12:00', duration: '15', isBooked: true },
    { id: 13, startTime: '12:00', endTime: '12:15', duration: '15', isBooked: true },
    { id: 14, startTime: '12:15', endTime: '12:30', duration: '15', isBooked: true },
    { id: 15, startTime: '12:30', endTime: '12:45', duration: '15', isBooked: false },
    { id: 16, startTime: '12:45', endTime: '13:00', duration: '15', isBooked: false },
    { id: 17, startTime: '13:00', endTime: '13:15', duration: '15', isBooked: false },
    { id: 18, startTime: '13:15', endTime: '13:30', duration: '15', isBooked: false },
    { id: 19, startTime: '13:30', endTime: '13:45', duration: '15', isBooked: false },
    { id: 20, startTime: '13:45', endTime: '14:00', duration: '15', isBooked: false },
    { id: 21, startTime: '14:00', endTime: '14:15', duration: '15', isBooked: false },
    { id: 22, startTime: '14:15', endTime: '14:30', duration: '15', isBooked: false },
    { id: 23, startTime: '14:30', endTime: '14:45', duration: '15', isBooked: false },
    { id: 24, startTime: '14:45', endTime: '15:00', duration: '15', isBooked: false },
    { id: 25, startTime: '15:00', endTime: '15:15', duration: '15', isBooked: false },
    { id: 26, startTime: '15:15', endTime: '15:30', duration: '15', isBooked: false },
    { id: 27, startTime: '15:30', endTime: '15:45', duration: '15', isBooked: false },
    { id: 28, startTime: '15:45', endTime: '16:00', duration: '15', isBooked: false },
    { id: 29, startTime: '16:00', endTime: '16:15', duration: '15', isBooked: false }
  ];

  function book() {
    if (doShowBook()) {
      setShowModal(true);
    }
    else {
      setShowError(true);
    }
  }

  function handleClose() {
    setShowModal(false);
    setShowError(false);
  }
  
  const selectedBookingIds = useRef([]);

  function handleOnClickBooking(id, isSelected) {
    if (isSelected) {
      selectedBookingIds.current.push(id);
    }
    else {
      var indexOf = selectedBookingIds.current.indexOf(id);
      selectedBookingIds.current.splice(indexOf, 1);
    }
    setShowBook(doShowBook());
  }

  function doShowBook() {
    
    if (selectedBookingIds.current.length == 0) {
      return false;
    }

    if (selectedBookingIds.current.length == 1) {
      return true;
    }

    selectedBookingIds.current.sort(function(a, b) {
      return a - b;});

    if (selectedBookingIds.current.some((id) => id > selectedBookingIds.current[0] && selectedBookingIds.current.indexOf(id-1)===-1)) {
      return false;
    }
    
    return true;
  }



  return (
    <>
      <p>You can book a new walk here, or change existing bookings.</p>

      <DatePicker />

      <BookModal show={getShowModal} handleClose={handleClose}></BookModal>

      <BookError show={getShowError} handleClose={handleClose}></BookError>


      <Button variant='dark' onClick={book}>Book</Button>
      
      <BookingsList bookings={bookings} handleOnClickBooking={handleOnClickBooking} />


    </>
  );
}

export default BookingsPage;
