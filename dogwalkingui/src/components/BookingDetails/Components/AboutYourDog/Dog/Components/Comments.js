import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

function Comments(props) {

  //const [getValue, setValue] = useState('');

  //props.updateDog({ ...props.dog, ...{ comments: getValue } });

  useEffect(() => {
    //setValue(props.dog.comments);
  }, []);

  function changeValue(value) {
    //setValue(value);
    props.updateDog({ ...props.dog, ...{ comments: value } });
  }

  return (
    <Row className="mt-1">
      <Col xs={3}>Comments:</Col>
      <Col xs={6}>
        <input
          type='textbox'
          placeholder="e.g. any relevent behaviours"
          //value={getValue}
          style={{ width: "100%" }}
          onInput={e => changeValue(e.target.value)}
        />
      </Col>
      <Col></Col>
    </Row>
  )
}

export default Comments;
