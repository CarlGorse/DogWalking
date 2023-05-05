import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { selectTimeslots } from "functions/BookingLogic";
import Row from 'react-bootstrap/Row';
import TimeslotList from './TimeslotList/TimeslotList';
import { useEffect, useState } from 'react';
import BookingModal from './BookingModal';

function SelectTimeslots(props) {

  const [getTimeslots, setTimeslots] = useState([]);
  const [getShowBookingModal, setShowBookingModal] = useState(false);
  const [getBooking, setBooking] = useState(null);

  useEffect(() => {
    axios.get("https://localhost:7083/api/timeslots/get?date=" + new Date(props.date).toISOString().split('T')[0])
      .then(response => {
        setTimeslots(response.data)
      })
  }, [props.date]);

  function handleOnChangeSelectTimeslot(actionedTimeslotid, isSelect) {
    var timeslots = selectTimeslots(getTimeslots, actionedTimeslotid, isSelect);
    setTimeslots(timeslots.slice()); // copy array for state to recognise any changes
    props.onUpdateTimeslotsState(getTimeslots);
  }

  let bookingModal;

  function handleOnSelectBookedTimeslot(timeslot) {
    setShowBookingModal(true);
    setBooking(timeslot.booking);
  }

  if (getShowBookingModal) {
    bookingModal = <BookingModal booking={getBooking} show={getShowBookingModal} handleClose={() => setShowBookingModal(false)} />;
  }

  return (
    <>
      {bookingModal}
      < Container >
        <Row className='mt-3'>
          <Col>
            <TimeslotList
              timeslots={getTimeslots}
              handleOnChangeSelect={handleOnChangeSelectTimeslot}
              handleOnSelectBookedTimeslot={handleOnSelectBookedTimeslot}
            />
          </Col>
        </Row>
      </Container >
    </>
  );
}

export default SelectTimeslots;
