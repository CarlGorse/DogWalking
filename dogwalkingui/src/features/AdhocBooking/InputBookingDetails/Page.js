import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Cost from './Cost';
import Container from 'react-bootstrap/Container';
import InputBookingDetailsPages from './SubPages';
import LogIn from 'components/LogIn';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Summary from './Summary';
import Toast from 'react-bootstrap/Toast';

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

      <Toast className="mt-5" show={getShowLogInHint} onClose={() => setShowLogInHint(false)}>
        <Toast.Header>
          <strong className="me-auto">Auto populate</strong>
        </Toast.Header>
        <Toast.Body>
          You can auto populate the booking details with your preferences if you log in.
          <Button className="ms-2" size="sm" variant="secondary" onClick={() => setShowLogIn(true)}>Log in</Button>
        </Toast.Body>
      </Toast >

      <LogIn show={getShowLogIn} onCancel={() => setShowLogIn(false)} onLogIn={onLogIn} description='Log in to use your preferences'></LogIn >

      <div className="pt-5 pb-3">
        <Button variant='primary' className="me-1" onClick={() => props.onBookingMade(props.booking)} disabled={getPageId != 4}>Book</Button>
        <Button variant='light' onClick={() => props.onCancelBooking()}>Cancel</Button>
      </div>

      <div>
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
