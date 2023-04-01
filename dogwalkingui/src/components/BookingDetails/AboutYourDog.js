import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Dog from './Dog';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

function AboutYourDog() {

  const [getDogs, setDogs] = useState(['']);

  var newDog = <Dog id={getDogs.length} showRemoveButton={getDogs.length > 1} handleRemoveDog={removeDog} />

  function addDog() {
    setDogs(dogs => [newDog, ...dogs]);
  }

  function removeDog() {
    setDogs(dogs => dogs.slice(1, dogs.length));
  }

  console.log(getDogs);

  return (
    <>
      <Row>
        <Col xs={3}><b>About your dog(s)</b></Col>
        <Col xs={6}>
          <Button variant="light" size='sm' onClick={addDog}>Add new dog</Button>
        </Col>
      </Row>

      {getDogs}

    </>
  );
}

export default AboutYourDog;
