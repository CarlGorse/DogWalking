import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ToggleButton from 'components/Forms/ToggleButton';

function Setting(props) {

  return (
    <Row>
      <Col>{props.name}</Col>
      <Col>
        <ToggleButton
          isOn={props.isOn}
          isOff={!props.isOn}
          onText='On'
          offText='Off'
          onChange={isOn => props.onChange(isOn)}
        />
      </Col>
    </Row>
  );
}

export default Setting;
