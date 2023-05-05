import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';

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
