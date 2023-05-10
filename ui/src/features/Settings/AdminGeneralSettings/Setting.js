import { Col, Row } from 'react-bootstrap';
import ToggleButton from 'components/Controls/ToggleButton';

function Setting(props) {

  return (
    <Row>
      <Col>{props.name}:</Col>
      <Col>
        <ToggleButton
          isOn={props.isOn}
          isOff={!props.isOn}
          onText={props.onText}
          offText={props.offText}
          onChange={isOn => props.onChange(isOn)}
        />
      </Col>
    </Row>
  );
}

export default Setting;
