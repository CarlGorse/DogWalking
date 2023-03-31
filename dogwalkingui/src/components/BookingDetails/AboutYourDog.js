import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dog from './Dog';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

function AboutYourDog() {

  const [getDogs, setDogs] = useState([{ id: 1, showRemoveButton: false }]);

  function addDog() {
    var newDog = { id: getDogs.length + 1, showRemoveButton: true };
    setDogs(arr => [...arr, newDog]); // push doesn't work on arrays in state
  }

  function removeDog(id) {
    setDogs(getDogs.filter(dog => dog.id != id));
  }

  return (
    <>
      <Container>
        <b>About your dog(s)</b>
        {getDogs.map(dog => (
          <Dog key={dog.id} id={dog.id} showRemoveButton={dog.showRemoveButton} handleRemoveDog={removeDog} />
        ))}
        <Row>
          <Col></Col>
          <Col xs={4}>
            <Button size='sm' onClick={addDog}>Add dog</Button>
          </Col>
          <Col xs={4}></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutYourDog;
