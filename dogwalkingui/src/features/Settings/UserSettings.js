import Col from 'react-bootstrap/Col';
import SubPages from 'components/BookingDetails/SubPages';
import React from 'react';
import Row from 'react-bootstrap/Row';

function UserSettings(props) {

  return (
    <>

      <p>You can change your own settings here.</p>

      <Row className="mt-5">
        <Col>
          <SubPages onSetInputs={isComplete => { }} />
        </Col>
        <Col xs={2}></Col>
      </Row>
    </>
  );
}

export default UserSettings;
