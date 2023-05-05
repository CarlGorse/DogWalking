
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';

function Cost(props) {

  return (

    <div>
      <Row>
        <Col xs={2}>Cost:</Col>
        <Col xs={6}>{props.cost}</Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default Cost;
