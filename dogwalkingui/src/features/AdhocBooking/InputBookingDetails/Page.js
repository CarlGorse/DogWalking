import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Cost from './Cost';
import Container from 'react-bootstrap/Container';
import InputBookingDetailsButtons from './Buttons';
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

      <Container className="pt-5">
        <Summary booking={props.booking} />
      </Container>

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

      <Container className="pt-5 pb-3">
        <InputBookingDetailsButtons
          pageId={getPageId}
          onClickPrevPage={prevPage}
          onClickNextPage={nextPage}
          onClickBook={() => props.onBookingMade(props.booking)}
          onClickCancel={() => props.onCancelBooking()}
        />
      </Container>

      <Container>
        <Row>
          <Col className="p-3 bg-light rounded-3">
            <InputBookingDetailsPages pageId={getPageId} />
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>

    </>
  );
}

export default InputBookingDetails;
