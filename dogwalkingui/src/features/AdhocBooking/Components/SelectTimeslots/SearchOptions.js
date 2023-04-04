import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DatePicker from "./DatePicker";
import React from 'react';
import Row from 'react-bootstrap/Row';
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
