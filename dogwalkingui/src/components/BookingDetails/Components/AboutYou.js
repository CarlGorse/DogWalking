import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

function AboutYou(props) {

  const [getName, setName] = useState('');
  const [getPostCode, setPostCode] = useState('');
  const [getPropertyNumberName, setPropertyNumberName] = useState('');
  const [getLocationDetails, setLocationDetails] = useState('');

  var isComplete = false;
  if (
    (getName?.length > 0)
    && (getPostCode?.length > 0)
    && (getPropertyNumberName?.length > 0)
  ) {
    isComplete = true;
  }
  props.onSetInputs(isComplete);

  function onSetName(value) {
    setName(value);
  }

  function onSetPostCode(value) {
    setPostCode(value);
  }

  function onSetPropertyNumberName(value) {
    setPropertyNumberName(value);
  }

  function onSetLocationDetails(value) {
    setLocationDetails(value);
  }

  return (
    <>
      <Row className="mt-1">
        <Col xs={3}>Name:</Col>
        <Col xs={9}>
          <input
            style={{ width: "100%" }}
            value={getName}
            type='textbox'
            placeholder="Your name"
            onInput={e => onSetName(e.target.value)}
          />
        </Col>
        <Col></Col>
      </Row>
      <Row className="mt-1">
        <Col xs={3}>Post code:</Col>
        <Col xs={2}>
          <input
            style={{ width: "100%" }}
            value={getPostCode}
            type='textbox'
            placeholder="AA1 1AA"
            onInput={e => onSetPostCode(e.target.value)}
          />
        </Col>
        <Col></Col>
      </Row>
      <Row className="mt-1">
        <Col xs={3}>Property number/name:</Col>
        <Col xs={4}>
          <input
            style={{ width: "100%" }}
            value={getPropertyNumberName}
            type='textbox'
            onInput={e => onSetPropertyNumberName(e.target.value)}
          />
        </Col>
        <Col></Col>
      </Row>
      <Row className="mt-1">
        <Col xs={3}>Location details:</Col>
        <Col xs={9}>
          <input
            style={{ width: "100%" }}
            value={getLocationDetails}
            type='textbox'
            placeholder="Any other details that will help to locate you"
            onInput={e => onSetLocationDetails(e.target.value)}
          />
        </Col>
        <Col></Col>
      </Row>
    </>

  );
}

export default AboutYou;
