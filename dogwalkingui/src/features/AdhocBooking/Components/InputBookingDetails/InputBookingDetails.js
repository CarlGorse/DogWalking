import BookingDetails from 'components/BookingDetails/BookingDetails';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Cost from './Components/Summary/Cost';
import LogIn from './Components/LogIn';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Summary from './Components/Summary';

function InputBookingDetails(props) {

  const [getConfirmBookingEnabled, setConfirmBookingEnabled] = useState(false);

  return (
    <>

      <LogIn
        title="Auto-populate"
        message="You can auto populate the booking details with your preferences if you log in."
      />

      <div className="mt-5">
        <Summary booking={props.booking} />
      </div >

      <Cost cost={props.booking.cost} />

      <div className="pt-5">
        <Button
          variant='primary'
          size='sm'
          onClick={() => props.onBookingMade(props.booking)}
          disabled={!getConfirmBookingEnabled}>
          Confirm booking
        </Button>

        <Button
          variant='light'
          className="ms-2"
          size='sm'
          onClick={() => props.onCancelBooking()}>
          Cancel
        </Button>
      </div>

      <Row className="mt-3">
        <Col xs={9}>
          <BookingDetails onSetInputs={isComplete => setConfirmBookingEnabled(isComplete)} />
        </Col>
      </Row>

    </>
  );
}

export default InputBookingDetails;
