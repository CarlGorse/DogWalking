import BookingDetails from 'components/Bookings/BookingDetails';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';
import { userSettings } from 'components/Data/UserSettings';

function UserSettings() {

  return (
    <>
      <Container>
        <h3>Settings</h3>

        <Row className='mt-5'>
          <Col xs={6}>
            <BookingDetails data={userSettings} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserSettings;
