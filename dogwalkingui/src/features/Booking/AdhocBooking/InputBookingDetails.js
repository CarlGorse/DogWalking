import AboutYou from 'components/BookingDetails/AboutYou';
import AboutYourDog from 'components/BookingDetails/AboutYourDog';
import BookingSummary from 'features/Booking/AdhocBooking/BookingSummary';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import LogIn from 'components/LogIn';
import Options from 'components/BookingDetails/Options';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import SelectService from 'components/BookingDetails/SelectService';

function InputBookingDetails(props) {

  const [getShowLogIn, setShowLogIn] = useState(true);
  const [getPageId, setPageId] = useState(1);

  function nextPage() {
    setPageId(prevState => prevState + 1);
  }

  function prevPage() {
    setPageId(prevState => prevState - 1);
  }

  var selectService;
  var aboutYou;
  var aboutYourDog;
  var options;

  if (getPageId == 1) {
    selectService = <SelectService />;
  }
  if (getPageId == 2) {
    aboutYou = <AboutYou />;
  }
  if (getPageId == 3) {
    aboutYourDog = <AboutYourDog />;
  }
  if (getPageId == 4) {
    options = <Options />;
  }

  return (
    <Container>
      <LogIn show={getShowLogIn} handleClose={() => setShowLogIn(false)} description='Log in to use your preferences'></LogIn>

      <div className="pt-5">
        <BookingSummary booking={props.booking} />
      </div>

      <Container>
        <Row>
          <Col></Col>
          <Col xs={4}>Cost:</Col>
          <Col xs={4}>{props.booking.cost}</Col>
          <Col></Col>
        </Row>
      </Container>

      <Container className="mt-5 mb-5">
        <Button variant='light' onClick={prevPage} disabled={getPageId == 1}>Previous</Button>
        <Button variant='light' onClick={nextPage} disabled={getPageId == 4}>Next</Button>
        <Button variant='primary' className="ms-3" onClick={() => props.onBookingMade(props.booking)} disabled={getPageId != 4}>Book</Button>
        <Button variant='secondary' onClick={() => props.onCancelBooking()}>Cancel</Button>
      </Container>

      {selectService}
      {aboutYou}
      {aboutYourDog}
      {options}

    </Container>
  );
}

export default InputBookingDetails;
