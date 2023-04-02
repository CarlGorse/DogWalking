import Breed from './Breed'
import Button from 'react-bootstrap/Button';
import CanBeOffLead from './CanBeOffLead'
import Col from 'react-bootstrap/Col';
import Comments from './Comments'
import Name from './Name'
import Row from 'react-bootstrap/Row';
import Size from './Size';
import { useState } from 'react';

function Page(props) {

  const [getNameIsComploete, setNameIsComplete] = useState(false);
  const [getBreedIsComplete, setBreedIsComplete] = useState(false);
  const [getSizeIsComplete, setSizeIsComplete] = useState(false);
  const [getCanBeOffLeadIsComplete, setCanBeOffLeadIsComplete] = useState(false);
  const [getCommentsIsComplete, setCommentsIsComplete] = useState(false);

  function updateDog(dog) {
    props.updateDog(dog);
  }

  var removeDogButton = props.showRemoveButton ?
    <Button variant="warning" size='sm' onClick={() => props.removeDog(props.dog.id)}>
      Remove dog
    </Button> : undefined;

  return (
    <div className="p-3 mb-1 border">

      <Row className="mt-1">
        <Col xs={3}>

        </Col>
        <Col xs={6}></Col>
        <Col>{removeDogButton}</Col>
      </Row>

      <Name dog={props.dog} updateDog={updateDog} onSetInput={isComplete => setNameIsComplete(isComplete)} />
      <Breed dog={props.dog} updateDog={updateDog} onSetInput={isComplete => setBreedIsComplete(isComplete)} />
      <Size dog={props.dog} updateDog={updateDog} onSetInput={isComplete => setSizeIsComplete(isComplete)} />
      <CanBeOffLead dog={props.dog} updateDog={updateDog} onSetInput={isComplete => setCanBeOffLeadIsComplete(isComplete)} />
      <Comments dog={props.dog} updateDog={updateDog} onSetInput={isComplete => setCommentsIsComplete(isComplete)} />

    </div>
  )
}

export default Page;
