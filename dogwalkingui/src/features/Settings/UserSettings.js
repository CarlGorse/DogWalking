import BookingDetails from 'components/BookingDetails/BookingDetails';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';
import { userSettings } from 'components/Data/UserSettings';

function UserSettings() {

  return (
    <>

      <p>You can change your own settings here.</p>

      <Row className='mt-5 justify-content-center'>
        <Col xs={6}>
          <BookingDetails data={userSettings} />
        </Col>
      </Row>
    </>
  );
}

export default UserSettings;
