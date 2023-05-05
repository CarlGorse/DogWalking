import axios from 'axios';
import Container from 'react-bootstrap/Container';
import InputBookingDetails from "./Components/InputBookingDetails/InputBookingDetails";
import { useNavigate } from "react-router-dom";

function Book() {

  let navigate = useNavigate();

  const navigateToBook = () => {
    let path = `../book`;
    navigate(path);
  }

  function doConfirmBooking(booking) {

    var createBookingDto = {
      Location: 1, TimeslotIds: booking.timeslots.map(x => x.id)
    };

    axios.post("https://localhost:7083/api/bookings/CreateBooking", createBookingDto)
      .then(response => navigateToBook())
  }

  return (
    <>
      <h3>Book</h3>

      <Container className='mt-5'>
        <InputBookingDetails
          booking={JSON.parse(window.localStorage.getItem("booking"))}
          confirmBooking={booking => doConfirmBooking(booking)}
          onCancelBooking={navigateToBook}
        />
      </Container>
    </>
  )
}

export default Book;
