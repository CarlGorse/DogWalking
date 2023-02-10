import AdminPlannedLocationRow from './AdminPlannedLocationRow';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';

function AdminPlannedLocations(props) {

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={2}>Day</Col>
          <Col xs={1}>Time start</Col>
          <Col xs={1}>Time end</Col>
          <Col xs={2}>Location</Col>
        </Row>
        <AdminPlannedLocationRow
          date={Date.parse('07/21/2023')}
          startTime={Date.parse('01/01/2001 14:00:00')}
          endTime={Date.parse('01/01/2001 14:00:00')}
          location='Midsomer Norton'
        />
        <AdminPlannedLocationRow
          date={Date.parse('07/21/2023')}
          startTime={Date.parse('01/01/2001 14:00:00')}
          endTime={Date.parse('01/01/2001 14:00:00')}
          location='Midsomer Norton'
        />
      <Row className="justify-content-md-center mt-2">
        <Col xs={2}><input type="text"/></Col>
        <Col xs={1}><input type="text" /></Col>
        <Col xs={1}><input type="text"  /></Col>
        <Col xs={2}><input type="text"  /></Col>
        <Col xs={1}></Col>
      </Row>
      </Container>
    </>
  );
}

export default AdminPlannedLocations;
