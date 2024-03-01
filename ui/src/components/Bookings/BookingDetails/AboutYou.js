import { Col, Row } from 'react-bootstrap';
import Input from 'components/Controls/Input';
import { useEffect, useState } from 'react';

function AboutYou({ data, onSetInputs }) {

  const [getName, setName] = useState('');
  const [getPostCode, setPostCode] = useState('');
  const [getPropertyNumberName, setPropertyNumberName] = useState('');
  const [getLocationDetails, setLocationDetails] = useState('');

  useEffect(() => {
    setName(data?.name ?? '');
    setPostCode(data?.postCode ?? '');
    setPropertyNumberName(data?.propertyNumberName ?? '');
    setLocationDetails(data?.locationDetails ?? '');
  }, [data.name, data.postCode, data.propertyNumberName, data.locationDetails])

  var isComplete = false;
  if (
    (getName?.length > 0)
    && (getPostCode?.length > 0)
    && (getPropertyNumberName?.length > 0)
  ) {
    isComplete = true;
  }
  onSetInputs(isComplete);

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
          <Input
            value={getName}
            placeholder="Your name"
            onChange={e => onSetName(e.target.value)}
          />
        </Col>
        <Col></Col>
      </Row>
      <Row className="mt-1">
        <Col xs={3}>Post code:</Col>
        <Col xs={2}>
          <Input
            style={{ width: "100%" }}
            value={getPostCode}
            placeholder="AA1 1AA"
            onChange={e => onSetPostCode(e.target.value)}
          />
        </Col>
        <Col></Col>
      </Row>
      <Row className="mt-1">
        <Col xs={3}>Property number/name:</Col>
        <Col xs={9}>
          <Input
            value={getPropertyNumberName}
            onChange={e => onSetPropertyNumberName(e.target.value)}
          />
        </Col>
        <Col></Col>
      </Row>
      <Row className="mt-1">
        <Col xs={3}>Location details:</Col>
        <Col xs={9}>
          <Input
            value={getLocationDetails}
            placeholder="Any other details that will help to locate you"
            onChange={e => onSetLocationDetails(e.target.value)}
          />
        </Col>
        <Col></Col>
      </Row>
    </>

  );
}

export default AboutYou;
