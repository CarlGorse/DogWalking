import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';

function Cost(props) {

  return (

    <div>
      <Row>
        <Col xs={3}>Cost:</Col>
        <Col>{props.cost}</Col>
      </Row>
    </div>
  );
}

export default Cost;
