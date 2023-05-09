import { Col, Row } from 'react-bootstrap';
import React from 'react';

function SummaryCost({ cost }) {

  return (

    <div>
      <Row>
        <Col xs={3}>Cost:</Col>
        <Col>{cost}</Col>
      </Row>
    </div>
  );
}

export default SummaryCost;
