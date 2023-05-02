import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Confirmation from './Components/Confirmation';
import InputBookingDetails from "./Components/InputBookingDetails/InputBookingDetails";
import Row from 'react-bootstrap/Row';
import SelectTimeslots from "../../components/SelectTimeslots/SelectTimeslots";
import { useEffect, useRef, useState } from 'react';
import { createDraftBooking, getSelectedTimeslots } from "functions/BookingLogic";
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

function Page() {

  const [getDate, setDate] = useState(new Date());
  const [getPageState, setPageState] = useState('timeslots');
  const [getConfirmationModal, setConfirmationModal] = useState(null);
  const [getTimeslots, setTimeslots] = useState([]);

  var currentBooking = useRef(null);

  useEffect(() => {
    loadTimeslots()
  }, [getDate]);

  function loadTimeslots() {
    axios.get("https://localhost:7083/api/timeslots/get?date=" + getDate.toISOString().split('T')[0])
      .then(response => {
        setTimeslots(response.data)
      })
  }

  function onStartBooking() {
    let booking = createDraftBooking(getSelectedTimeslots(getTimeslots));
    setConfirmationModal(null);
    currentBooking.current = booking;
    setPageState('book');
  }

  function doConfirmBooking(booking) {

    var createBookingDto = {
      Location: 1, TimeslotIds: booking.timeslots.map(x => x.id)
    };

    axios.post("https://localhost:7083/api/bookings/CreateBooking", createBookingDto)
      .then(response => loadTimeslots())

    setPageState('timeslots');

    let confirmationModal = <Confirmation
      booking={booking}
      show={true}
      handleClose={handleCloseModal}
    />

    setConfirmationModal(confirmationModal)
  }

  function onCancelBooking() {
    setPageState('timeslots');
  }

  function updateTimeslotsState(timeslots) {
    setTimeslots(timeslots.slice()); // copy array for state to recognise any changes
  }

  function handleCloseModal() {
    setConfirmationModal(null);
  }

  function canBook() {
    var selectedTimeslots = getSelectedTimeslots(getTimeslots);
    return selectedTimeslots.length > 0
  }

  var selectTimeslots;
  var inputBookingDetails;

  const [show, setShow] = useState(false);
  const target = useRef(null);

  var bookComponents;
  if (canBook()) {
    bookComponents = <Button className="mt-2" variant='primary' onClick={onStartBooking}>Book</Button>;
  }
  else {

    bookComponents = <>
      <Button className="mt-2" variant='primary' ref={target} onClick={() => setShow(!show)}>
        Book
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            You'll need to select at least one timeslot first.
          </Tooltip>
        )}
      </Overlay></>
  }

  if (getPageState === 'timeslots') {
    selectTimeslots =
      <>
        <div>
          <Row className="mt-3">
            <Col>
              {bookComponents}
            </Col>
          </Row>
        </div>
        <div className="pt-3">
          <SelectTimeslots
            timeslots={getTimeslots}
            onUpdateTimeslots={timeslots => updateTimeslotsState(timeslots)}
            date={getDate}
            onSetFilterDate={date => setDate(date)}
            updateTimeslotsState={updateTimeslotsState}
          />
        </div>
      </>
  }
  else {
    inputBookingDetails =
      <InputBookingDetails
        booking={currentBooking.current}
        confirmBooking={booking => doConfirmBooking(booking)}
        onCancelBooking={onCancelBooking}
      />
  }

  return (
    <>
      <h3>New adhoc booking</h3>

      <Container className='mt-5'>
        {getConfirmationModal}
        {selectTimeslots}
        {inputBookingDetails}
      </Container>
    </>
  )
}

export default Page;
