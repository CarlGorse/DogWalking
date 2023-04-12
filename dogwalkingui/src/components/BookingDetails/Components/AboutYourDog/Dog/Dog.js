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

  const setNameIsComplete = useState(false)[1];
  const setBreedIsComplete = useState(false)[1];
  const setSizeIsComplete = useState(false)[1];
  const setCanBeOffLeadIsComplete = useState(false)[1];
  const setCommentsIsComplete = useState(false)[1];

  function updateDog(dog) {
    props.updateDog(dog);
  }

  var removeDogButton = props.showRemoveButton ?
    <Button variant="warning" size='sm' onClick={() => props.removeDog(props.dog.id)}>
      Remove dog
    </Button> : undefined;

  return (
    <div className="p-3 mb-1 border-top">

      <Row className="mt-1">
        <Col xs={3} />
        <Col xs={6}>{removeDogButton}</Col>
      </Row>

      <Name dog={props.dog} updateDog={updateDog} onSetInput={isComplete => setNameIsComplete(isComplete)} />
      <Breed dog={props.dog} updateDog={updateDog} onSetInput={isComplete => setBreedIsComplete(isComplete)} />
      <Size dog={props.dog} updateDog={updateDog} onSetInput={isComplete => setSizeIsComplete(isComplete)} />
      <CanBeOffLead dog={props.dog} updateDog={updateDog} onSetInput={isComplete => setCanBeOffLeadIsComplete(isComplete)} />
      <Comments dog={props.dog} updateDog={updateDog} onSetInput={isComplete => setCommentsIsComplete(isComplete)} />

    </div>
  )
}

export default Dog;
