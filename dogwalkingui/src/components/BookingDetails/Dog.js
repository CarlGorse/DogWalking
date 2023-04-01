import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputHint from './InputHint';
import Row from 'react-bootstrap/Row';

function Dog(props) {

  var removeDogButton = props.showRemoveButton ?
    <Button variant="light" size='sm' onClick={() => props.handleRemoveDog(props.id)}>
      Remove dog
    </Button> : undefined;

  return (
    <div className="mb-3 border-top">

      <Row className="mt-1">
        <Col xs={3}>
          {removeDogButton}
        </Col>
        <Col xs={6}></Col>
        <Col></Col>
      </Row>

      <Row className="mt-1">
        <Col xs={3}>Name:</Col>
        <Col xs={6}><input style={{ width: "100%" }} type='textbox' placeholder="Your dog's name"></input></Col>
        <Col></Col>
      </Row>

      <Row className="mt-1">
        <Col xs={3}>Breed:</Col>
        <Col xs={6}>
          <select defaultValue='Other'>
            <option>Please select</option>
            <option>Cockapoo</option>
            <option>Spaniel</option>
            <option>Labrador</option>
            <option>Other</option>
          </select>
        </Col>
        <Col></Col>
      </Row>

      <Row className="mt-1">
        <Col xs={3}>Size:</Col>
        <Col xs={6}>
          <select defaultValue='Please select'>
            <option>Please select</option>
            <option>Toy</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </Col>
        <Col></Col>
      </Row>

      <Row className="mt-1">
        <Col xs={3}>Can be let off the lead?: <InputHint hint="Can your dog be left off the lead in a park or countryside?" /></Col>
        <Col xs={6}>
          <select defaultValue='No'>
            <option>Either</option>
            <option>Countryside only</option>
            <option>Park only</option>
            <option>No</option>
          </select>
        </Col>
        <Col></Col>
      </Row>

      <Row className="mt-1">
        <Col xs={3}>Comments:</Col>
        <Col xs={6}><input style={{ width: "100%" }} type='textbox' placeholder="e.g. significant behaviours"></input></Col>
        <Col></Col>
      </Row>
    </div>
  )
}

export default Dog;
