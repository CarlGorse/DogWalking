import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Setting from './Setting';

function UserSettings(props) {
  
  return (
    <>

      <p>You can change your own settings here.</p>

      <Container>
        <Setting name='Setting #1' isOn='true'/>
        <Setting name='Setting #2'/>
        <Row className="justify-content-md-center">
          <Col xs={6}>My default pickup address</Col>
          <Col xs={6}><input type="text" /></Col>
        </Row>
      </Container>
    </>
  );
}

export default UserSettings;
