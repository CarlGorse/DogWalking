import Button from 'react-bootstrap/Button';
import Cost from './Cost';
import Container from 'react-bootstrap/Container';
import InputBookingDetailsButtons from './Buttons';
import InputBookingDetailsPages from './SubPages';
import LogIn from 'components/LogIn';
import React, { useState } from 'react';
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

  function onCloseLogInHint() {
    setShowLogInHint(false);
    setShowLogIn(true);
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
          <Button className="ms-2" size="sm" variant="light" onClick={onCloseLogInHint}>Log in</Button>
        </Toast.Body>
      </Toast >

      <LogIn show={getShowLogIn} handleClose={() => setShowLogIn(false)} description='Log in to use your preferences'></LogIn>

      <Container className="mt-5 mb-5">
        <InputBookingDetailsButtons
          pageId={getPageId}
          onClickPrevPage={prevPage}
          onClickNextPage={nextPage}
          onClickBook={() => props.onBookingMade(props.booking)}
          onClickCancel={() => props.onCancelBooking()}
        />
      </Container>

      <div className="pt-0">
        <InputBookingDetailsPages pageId={getPageId} />
      </div>

    </>
  );
}

export default InputBookingDetails;
