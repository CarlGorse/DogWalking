import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function BookingDetailsDog(props) {

  var removeDogButton = props.showRemoveButton ? <Button size='sm' onClick={props.handleRemoveDog}>Remove dog</Button> : undefined;

  return (
    <Container>
      <Row>
        <Col><b>Dog #{props.id}</b></Col>
        <Col>
          {removeDogButton}
        </Col>
      </Row>
      <Row>
        <Col>Name:</Col>
        <Col><input type='textbox' placeholder="Your dog's name"></input></Col>
      </Row>
      <Row>
        <Col>Breed:</Col>
        <Col>
          <select defaultValue='Other'>
            <option>Please select</option>
            <option>Cockapoo</option>
            <option>Spaniel</option>
            <option>Labrador</option>
            <option>Other</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col>Size:</Col>
        <Col>
          <select defaultValue='Please select'>
            <option>Please select</option>
            <option>Toy</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col>Can your dog be let off the lead in a park or countryside?:</Col>
        <Col>
          <select defaultValue='No'>
            <option>Either</option>
            <option>Countryside only</option>
            <option>Park only</option>
            <option>No</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col>Comments:</Col>
        <Col><input type='textbox' placeholder="e.g. significant behaviours"></input></Col>
      </Row>

      <Button size='sm' onClick={props.handleAddDog}>Add dog</Button>

    </Container>
  )
}

export default BookingDetailsDog;
