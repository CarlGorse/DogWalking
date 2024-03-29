import { Col, Container, Row } from 'react-bootstrap';
import DatePicker from "./DatePicker";
import React from 'react';
import Select from 'components/Forms/Select';

function SearchOptions() {

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>Area</Col>
        <Col xs={6}>
          <Select options={
            <>
              <option>Midsomer Norton</option>
              <option>Keynsham</option>
              <option>Bristol</option>
            </>
          }
          />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={6}>From date</Col>
        <Col xs={6}>
          <DatePicker />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={6}>To date</Col>
        <Col xs={6}>
          <DatePicker />
        </Col>
      </Row>
    </Container >
  );
}

export default SearchOptions;
