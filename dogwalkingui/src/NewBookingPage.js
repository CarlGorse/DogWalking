import BookingsList from './BookingsList';
import BookError from './BookError';
import Button from 'react-bootstrap/Button';
import DatePicker from "./DatePicker";
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function NewBookingPage() {

  const [getShowBook, setShowBook] = useState(false);
  const [getShowError, setShowError] = useState({ result: true });

  var bookings = [
    { id: 1, date: 'Sat 18/02/2023', startTime: '09:00', endTime: '09:15', duration: '15', isBooked: true, isBookable: false },
    { id: 2, date: 'Sat 18/02/2023', startTime: '09:15', endTime: '09:30', duration: '15', isBooked: false, isBookable: true },
    { id: 3, date: 'Sat 18/02/2023', startTime: '09:30', endTime: '09:45', duration: '15', isBooked: false, isBookable: true },
    { id: 4, date: 'Sat 18/02/2023', startTime: '09:45', endTime: '10:00', duration: '15', isBooked: false, isBookable: true },
    { id: 5, date: 'Sat 18/02/2023', startTime: '10:00', endTime: '10:15', duration: '15', isBooked: false, isBookable: true },
    { id: 6, date: 'Sat 18/02/2023', startTime: '10:15', endTime: '10:30', duration: '15', isBooked: false, isBookable: true },
    { id: 7, date: 'Sat 18/02/2023', startTime: '10:30', endTime: '10:45', duration: '15', isBooked: false, isBookable: true },
    { id: 8, date: 'Sat 18/02/2023', startTime: '10:45', endTime: '11:00', duration: '15', isBooked: false, isBookable: true },
    { id: 9, date: 'Sat 18/02/2023', startTime: '11:00', endTime: '11:15', duration: '15', isBooked: false, isBookable: true },
    { id: 10, date: 'Sat 18/02/2023', startTime: '11:15', endTime: '11:30', duration: '15', isBooked: true, isBookable: true },
    { id: 11, date: 'Sat 18/02/2023', startTime: '11:30', endTime: '11:45', duration: '15', isBooked: true, isBookable: true },
    { id: 12, date: 'Sat 18/02/2023', startTime: '11:45', endTime: '12:00', duration: '15', isBooked: true, isBookable: true },
    { id: 13, date: 'Sat 18/02/2023', startTime: '12:00', endTime: '12:15', duration: '15', isBooked: true, isBookable: false },
    { id: 14, date: 'Sat 18/02/2023', startTime: '12:15', endTime: '12:30', duration: '15', isBooked: true, isBookable: false },
    { id: 15, date: 'Sat 18/02/2023', startTime: '12:30', endTime: '12:45', duration: '15', isBooked: false, isBookable: true },
    { id: 16, date: 'Sat 18/02/2023', startTime: '12:45', endTime: '13:00', duration: '15', isBooked: false, isBookable: true },
    { id: 17, date: 'Sat 18/02/2023', startTime: '13:00', endTime: '13:15', duration: '15', isBooked: false, isBookable: true },
    { id: 18, date: 'Sat 18/02/2023', startTime: '13:15', endTime: '13:30', duration: '15', isBooked: false, isBookable: true },
    { id: 19, date: 'Sat 18/02/2023', startTime: '13:30', endTime: '13:45', duration: '15', isBooked: false, isBookable: true },
    { id: 20, date: 'Sat 18/02/2023', startTime: '13:45', endTime: '14:00', duration: '15', isBooked: false, isBookable: true },
    { id: 21, date: 'Sat 18/02/2023', startTime: '14:00', endTime: '14:15', duration: '15', isBooked: false, isBookable: true },
    { id: 22, date: 'Sat 18/02/2023', startTime: '14:15', endTime: '14:30', duration: '15', isBooked: false, isBookable: true },
    { id: 23, date: 'Sat 18/02/2023', startTime: '14:30', endTime: '14:45', duration: '15', isBooked: false, isBookable: true },
    { id: 24, date: 'Sat 18/02/2023', startTime: '14:45', endTime: '15:00', duration: '15', isBooked: false, isBookable: true },
    { id: 25, date: 'Sat 18/02/2023', startTime: '15:00', endTime: '15:15', duration: '15', isBooked: false, isBookable: true },
    { id: 26, date: 'Sat 18/02/2023', startTime: '15:15', endTime: '15:30', duration: '15', isBooked: false, isBookable: true },
    { id: 27, date: 'Sat 18/02/2023', startTime: '15:30', endTime: '15:45', duration: '15', isBooked: false, isBookable: true },
    { id: 28, date: 'Sat 18/02/2023', startTime: '15:45', endTime: '16:00', duration: '15', isBooked: false, isBookable: true },
    { id: 29, date: 'Sat 18/02/2023', startTime: '16:00', endTime: '16:15', duration: '15', isBooked: false, isBookable: true }
  ];

  const navigate = useNavigate();

  function book() {
    var doShowBookResult = doShowBook();
    if (doShowBookResult.result) {
      var booking = {
        date: selectedBookings.current[0].date,
        startTime: selectedBookings.current[0].startTime,
        endTime: selectedBookings.current[selectedBookings.current.length - 1].endTime,
        cost: '£16'
      };
      navigate('/bookingDetails', { replace: false, state: { booking } });
    }
    else {
      setShowError(doShowBookResult);
    }
  }

  function handleClose() {
    setShowError({ result: true });
  }

  const selectedBookings = useRef([]);

  function handleOnClickBooking(id, isSelected) {
    if (isSelected) {
      var selectedBooking = bookings.filter((booking) => booking.id === id)[0];
      selectedBookings.current.push(selectedBooking);
    }
    else {
      var indexOf = getSelectedBookingIds().indexOf(id);
      selectedBookings.current.splice(indexOf, 1);
    }

    selectedBookings.current = selectedBookings.current
      .sort(function (a, b) {
        return a.startTime - b.startTime;
      }
      );
    setShowBook(doShowBook());
  }

  function getSelectedBookingIds() {
    return selectedBookings.current.map((booking) => booking.id);
  }

  function doShowBook() {

    if (selectedBookings.current.length == 0) {
      return { result: false, message: 'You must select at least one time-slot.' };
    }

    if (selectedBookings.current.length == 1) {
      return { result: true };
    }

    // gap exists
    if (selectedBookings.current.some((booking) => booking.id > selectedBookings.current[0].id && getSelectedBookingIds().indexOf(booking.id - 1) === -1)) {
      return { result: false, message: 'Multiple time-slots must be adjacent to one another; separate time-slots can be selected in a separate booking.' };
    }

    let isBookedGroups = [...new Set(selectedBookings.current.map((booking) => booking.isBooked))]

    if (isBookedGroups.length > 1) {
      return { result: false, message: 'You cannot select a mix of booked and unbooked time slots.' };
    }

    return { result: true };
  }

  return (
    <>
      <p>You can book a new session here.</p>

      <DatePicker />

      <BookError show={!getShowError.result} message={getShowError.message} handleClose={handleClose}></BookError>

      <Button variant='dark' onClick={book}>Book</Button>

      <BookingsList bookings={bookings} handleOnClickBooking={handleOnClickBooking} />

    </>
  );
}

export default NewBookingPage;
