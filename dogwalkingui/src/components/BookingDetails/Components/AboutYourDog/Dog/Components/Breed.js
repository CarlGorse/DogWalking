import Col from 'react-bootstrap/Col';
import Select from 'components/Forms/Select';
import Row from 'react-bootstrap/Row';
import { useEffect } from 'react';

function Breed(props) {

  //const [getValue, setValue] = useState('');

  //props.updateDog({ ...props.dog, ...{ breed: getValue } });

  useEffect(() => {
    //setValue(props.dog.breed);
  }, []);

  function changeValue(value) {
    props.updateDog({ ...props.dog, ...{ breed: value } });
    //setValue(value);
  }

  return (
    <Row className="mt-1">
      <Col xs={3}>Breed:</Col>
      <Col xs={3}>
        <Select
          //value={getValue}
          defaultValue='Please select'
          onChange={e => changeValue(e.target.value)}
          options={<>
            <option>Please select</option>
            <option>Cockapoo</option>
            <option>Spaniel</option>
            <option>Labrador</option>
            <option>Other</option>
          </>
          }
        />
      </Col>
      <Col></Col>
    </Row>
  )
}

export default Breed;
