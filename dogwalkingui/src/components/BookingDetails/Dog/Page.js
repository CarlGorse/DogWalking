import Breed from './Breed'
import Button from 'react-bootstrap/Button';
import CanBeOffLead from './CanBeOffLead'
import Col from 'react-bootstrap/Col';
import Comments from './Comments'
import Name from './Name'
import Row from 'react-bootstrap/Row';
import Size from './Size';

function Page(props) {

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

      <Name dog={props.dog} updateDog={updateDog} />
      <Breed dog={props.dog} updateDog={updateDog} />
      <Size dog={props.dog} updateDog={updateDog} />
      <CanBeOffLead dog={props.dog} updateDog={updateDog} />
      <Comments dog={props.dog} updateDog={updateDog} />

    </div>
  )
}

export default Page;
