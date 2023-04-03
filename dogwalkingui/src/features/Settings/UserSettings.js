import BookingDetails from 'components/BookingDetails/BookingDetails';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';

function UserSettings(props) {

  return (
    <>

      <p>You can change your own settings here.</p>

      <Row className="mt-5">
        <Col>
          <BookingDetails onSetInputs={isComplete => { }} />
        </Col>
        <Col xs={2}></Col>
      </Row>
    </>
  );
}

export default UserSettings;
