import Col from 'react-bootstrap/Col';
import InputHint from '../../../InputHint';
import Row from 'react-bootstrap/Row';
import Select from 'components/Forms/Select';
import { useEffect } from 'react';

function CanBeLetOffLead(props) {

  //const [getValue, setValue] = useState('');

  //props.updateDog({ ...props.dog, ...{ canBeOffLead: getValue } });

  useEffect(() => {
    //setValue(props.dog.canBeOffLead);
  }, []);

  function changeValue(value) {
    //setValue(value);
    props.updateDog({ ...props.dog, ...{ canBeOffLead: value } });
  }

  return (
    <Row className="mt-1">
      <Col xs={3}>Can be let off the lead?: <InputHint hint="Can your dog be left off the lead in a park or countryside?" /></Col>
      <Col xs={6}>
        <Select
          //value={getValue}
          defaultValue='Please select'
          onChange={e => changeValue(e.target.value)}
          options={
            <>
              <option>Please select</option>
              <option>Either</option>
              <option>Countryside only</option>
              <option>Park only</option>
              <option>No</option>
            </>
          }
        />
      </Col>
      <Col></Col>
    </Row>
  )
}

export default CanBeLetOffLead;
