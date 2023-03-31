import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Dog(props) {

  var removeDogButton = props.showRemoveButton ? <Button size='sm' onClick={() => props.handleRemoveDog(props.id)}>Remove dog</Button> : undefined;

  return (
    <Container className="pb-5">
      <Row>
        <Col></Col>
        <Col xs={4}><b>Dog #{props.id}</b></Col>
        <Col xs={4}>
          {removeDogButton}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={4}>Name:</Col>
        <Col xs={4}><input type='textbox' placeholder="Your dog's name"></input></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={4}>Breed:</Col>
        <Col xs={4}>
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
      <Row>
        <Col></Col>
        <Col xs={4}>Size:</Col>
        <Col xs={4}>
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
      <Row>
        <Col></Col>
        <Col xs={4}>Can your dog be let off the lead in a park or countryside?:</Col>
        <Col xs={4}>
          <select defaultValue='No'>
            <option>Either</option>
            <option>Countryside only</option>
            <option>Park only</option>
            <option>No</option>
          </select>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={4}>Comments:</Col>
        <Col xs={4}><input type='textbox' placeholder="e.g. significant behaviours"></input></Col>
        <Col></Col>
      </Row>

    </Container>
  )
}

export default Dog;
