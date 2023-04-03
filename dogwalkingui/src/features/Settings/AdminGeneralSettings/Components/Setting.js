import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ToggleButton from './Setting/ToggleButton';

function Setting(props) {
  return (
    <Row>
      <Col>{props.name}</Col>
      <Col>
        <ToggleButton
          isOn={props.isOn === 'true'}
          isOff={props.isOn !== 'true'}
          onText='On'
          offText='Off'
        />
      </Col>
    </Row>
  );
}

export default Setting;
