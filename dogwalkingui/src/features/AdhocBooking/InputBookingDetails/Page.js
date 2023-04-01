import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Cost from './Cost';
import InputBookingDetailsPages from './SubPages';
import LogIn from 'components/LogIn';
import LogInHint from './LogInHint';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Summary from './Summary';

function InputBookingDetails(props) {

  const [getShowLogIn, setShowLogIn] = useState(false);
  const [getShowLogInHint, setShowLogInHint] = useState(true);
  const [getPageId, setPageId] = useState(1);

  function nextPage() {
    setPageId(prevState => prevState + 1);
  }

  function prevPage() {
    setPageId(prevState => prevState - 1);
  }

  function onLogIn() {
    setShowLogInHint(false)
    setShowLogIn(false)
  }

  return (
    <>
      <div className="pt-5">
        <Summary booking={props.booking} />
      </div>

      <Cost cost={props.booking.cost} />

      <div class="pt-5">
        <Button variant='primary' className="me-1" onClick={() => props.onBookingMade(props.booking)} disabled={getPageId != 4}>Confirm booking</Button>
        <Button variant='light' onClick={() => props.onCancelBooking()}>Cancel</Button>
      </div>

      <LogInHint show={getShowLogInHint} onClose={() => setShowLogInHint(false)} onClickLogIn={() => setShowLogIn(true)} />

      <LogIn show={getShowLogIn} onCancel={() => setShowLogIn(false)} onLogIn={onLogIn} description='Log in to use your preferences'></LogIn >

      <div class="mt-5">
        <Row>
          <Col className="p-3 border rounded-3">

            <Button className="me-1" variant="light" size="sm" onClick={prevPage} disabled={getPageId == 1}>Previous</Button>
            <Button variant='light' size="sm" onClick={nextPage} disabled={getPageId == 4}>Next</Button>

            <div className="mt-3">
              <InputBookingDetailsPages pageId={getPageId} />
            </div>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </div>
    </>
  );
}

export default InputBookingDetails;
