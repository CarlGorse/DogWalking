import BookingDetails from 'components/BookingDetails/BookingDetails';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Cost from './Components/Summary/Cost';
import LogIn from './Components/LogIn';
import LogInHint from './Components/LogInHint';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Summary from './Components/Summary';

function InputBookingDetails(props) {

  const [getShowLogIn, setShowLogIn] = useState(false);
  const [getShowLogInHint, setShowLogInHint] = useState(true);
  const [getConfirmBookingEnabled, setConfirmBookingEnabled] = useState(false);

  function onLogIn() {
    setShowLogInHint(false)
    setShowLogIn(false)
  }

  return (
    <>
      <div className="pt-0">
        <Summary booking={props.booking} />
      </div >

      <Cost cost={props.booking.cost} />

      <div className="pt-5">
        <Button variant='primary' className="me-1" onClick={() => props.onBookingMade(props.booking)} disabled={!getConfirmBookingEnabled}>Confirm booking</Button>
        <Button variant='light' onClick={() => props.onCancelBooking()}>Cancel</Button>
      </div>

      <LogInHint show={getShowLogInHint} onClose={() => setShowLogInHint(false)} onClickLogIn={() => setShowLogIn(true)} />

      <LogIn show={getShowLogIn} onCancel={() => setShowLogIn(false)} onLogIn={onLogIn} description='Log in to use your preferences'></LogIn >

      <Row className="mt-5">
        <Col xs={9}>
          <BookingDetails onSetInputs={isComplete => setConfirmBookingEnabled(isComplete)} />
        </Col>
      </Row>
    </>
  );
}

export default InputBookingDetails;
