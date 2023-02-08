import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ToggleButton from './ToggleButton';

function Setting(props) {
  return (
    <Row>
      <Col>{props.name}</Col>
      <Col>
        <ToggleButton
          isOn={props.isOn === 'true'}
          isOff={props.isOn !== 'true'}
          onText='On'
          onBgColour='primary'
          onTextColour='light'
          offText='Off'
          offBgColour='light'
          offTextColour='dark'
        />
      </Col>
    </Row>
  );
}

export default Setting;
