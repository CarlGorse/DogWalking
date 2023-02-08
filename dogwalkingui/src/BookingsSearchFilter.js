import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DatePicker from "react-datepicker";
import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Row from 'react-bootstrap/Row';

function BookingsSearchFilter() {

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6}>Show 2 hour sessions?</Col>
          <Col xs={6}><input type="checkbox" /></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={6}>From date</Col>
          <Col xs={6}>
            <DatePicker selected={fromDate} onChange={date => setFromDate(date)} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={6}>To date</Col>
          <Col xs={6}>
            <DatePicker selected={toDate} onChange={date => setToDate(date)} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BookingsSearchFilter;
