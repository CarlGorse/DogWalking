import Col from 'react-bootstrap/Col';
import Input from 'components/Forms/Input';
import Row from 'react-bootstrap/Row';
import { useEffect } from 'react';

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
      <Col xs={9}>
        <Input
          placeholder="e.g. any relevent behaviours"
          //value={getValue}
          onInput={e => changeValue(e.target.value)}
        />
      </Col>
      <Col></Col>
    </Row>
  )
}

export default Comments;
