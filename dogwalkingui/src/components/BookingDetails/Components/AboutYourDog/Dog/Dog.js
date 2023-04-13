import Breed from './Components/Breed'
import Button from 'react-bootstrap/Button';
import CanBeOffLead from './Components/CanBeOffLead'
import Col from 'react-bootstrap/Col';
import Comments from './Components/Comments'
import Name from './Components/Name'
import Row from 'react-bootstrap/Row';
import Size from './Components/Size';
import { useState } from 'react';

function Dog(props) {

  function updateDog(dog) {
    props.updateDog(dog);
  }

  var removeDogButton = props.showRemoveButton ?
    <Button variant="warning" size='sm' onClick={() => props.removeDog(props.dog.id)}>
      Remove dog
    </Button> : undefined;

  const baseProps = { dog: props.dog, updateDog: updateDog };

  return (
    <div className="p-3 mb-1 border-top">

      <Row className="mt-1">
        <Col xs={3} />
        <Col xs={6}>{removeDogButton}</Col>
      </Row>

      <Name baseProps={baseProps} />
      <Breed baseProps={baseProps} />
      <Size baseProps={baseProps} />
      <CanBeOffLead baseProps={baseProps} />
      <Comments baseProps={baseProps} />

    </div>
  )
}

export default Dog;
