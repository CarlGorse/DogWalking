import BookingDetailsDog from './BookingDetailsDog';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

function BookingDetails() {

  const [getDogs, setDogs] = useState([{ id: 1, showRemoveButton: false }]);

  console.log(getDogs);

  function addDog() {
    var newDog = { id: getDogs.length + 1, showRemoveButton: true };
    setDogs(arr => [...arr, newDog]); // push doesn't work on arrays in state
  }

  function removeDog() {
    setDogs(getDogs.splice(getDogs.length - 2, 1)); // pop doesn't work on arrays in state
  }

  return (
    <>
      <div style={{ border: '1px solid black' }}>
        <b>Options</b>
        <Container>
          <Row>
            <Col>Service:</Col>
            <Col>
              <select>
                <option selected>Please select</option>
                <option>Walk</option>
                <option>Play park</option>
                <option>Dog sitting</option>
              </select></Col>
          </Row>
          <Row>
            <Col>Type of walk:</Col>
            <Col>
              <select>
                <option selected>Any</option>
                <option>Town/street</option>
                <option>Park</option>
                <option>Countryside</option>
              </select>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ border: '1px solid black' }}>
        <b>About you</b>
        <Container>
          <Row>
            <Col>Name:</Col>
            <Col><input type='textbox' placeholder="Your name"></input></Col>
          </Row>
          <Row>
            <Col>Post code:</Col>
            <Col><input type='textbox' placeholder="AA1 1AA"></input></Col>
          </Row>
          <Row>
            <Col>Property number/name:</Col>
            <Col>
              <select>
              </select>
            </Col>
          </Row>
          <Row>
            <Col>Location details:</Col>
            <Col><input type='textbox' placeholder="Any other details that will help to locate you"></input></Col>
          </Row>
        </Container>
      </div>
      <div style={{ border: '1px solid black' }}>
        <b>About your dog(s)</b>
        {getDogs.map(dog => (
          <BookingDetailsDog id={dog.id} showRemoveButton={dog.showRemoveButton} handleAddDog={addDog} handleRemoveDog={removeDog} />
        ))}
      </div>
      <div style={{ border: '1px solid black' }}>
        <b>Options</b>
        <Container>
          <Row>
            <Col>Can another dog join your walk (at reduced cost?):</Col>
            <Col>
              <select>
                <option>Yes</option>
                <option selected>No</option>
              </select>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BookingDetails;
