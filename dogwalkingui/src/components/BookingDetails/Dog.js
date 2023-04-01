import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputHint from './InputHint';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

function Dog(props) {

  const [getName, setName] = useState('');
  const [getBreed, setBreed] = useState('');
  const [getSize, setSize] = useState('');
  const [getCanBeOffLead, setCanBeOffLead] = useState('');
  const [getComments, setComments] = useState('');

  useEffect(() => {
    setName(props.dog.name);
    setBreed(props.dog.breed);
    setSize(props.dog.size);
    setCanBeOffLead(props.dog.canBeOffLead);
    setComments(props.dog.comments);
  }, []);

  function changeName(value) {
    setName(value);
    props.updateDog({ ...props.dog, ...{ name: value } });
  }

  function changeBreed(value) {
    setBreed(value);
    props.updateDog({ ...props.dog, ...{ breed: value } });
  }

  function changeSize(value) {
    setSize(value);
    props.updateDog({ ...props.dog, ...{ size: value } });
  }

  function changeCanBeOffLead(value) {
    setCanBeOffLead(value);
    props.updateDog({ ...props.dog, ...{ canBeOffLead: value } });
  }

  function changeComments(value) {
    setComments(value);
    props.updateDog({ ...props.dog, ...{ comments: value } });
  }

  var removeDogButton = props.showRemoveButton ?
    <Button variant="light" size='sm' onClick={() => props.removeDog(props.dog.id)}>
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

      <Row className="mt-1">
        <Col xs={3}>Name:</Col>
        <Col xs={6}>
          <input
            type='textbox'
            style={{ width: "100%" }}
            value={getName}
            placeholder="Your dog's name"
            onChange={e => changeName(e.target.value)}
          />
        </Col>
        <Col></Col>
      </Row>

      <Row className="mt-1">
        <Col xs={3}>Breed:</Col>
        <Col xs={6}>
          <select
            value={getBreed}
            defaultValue='Other'
            onChange={e => changeBreed(e.target.value)}
          >
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
          <select
            value={getSize}
            defaultValue='Please select'
            onChange={e => changeSize(e.target.value)}
          >
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
          <select
            value={getCanBeOffLead}
            defaultValue='No'
            onChange={e => changeCanBeOffLead(e.target.value)}
          >
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
        <Col xs={6}>
          <input
            type='textbox'
            placeholder="e.g. significant behaviours"
            value={getComments}
            style={{ width: "100%" }}
            onInput={e => changeComments(e.target.value)}
          />
        </Col>
        <Col></Col>
      </Row>
    </div>
  )
}

export default Dog;
