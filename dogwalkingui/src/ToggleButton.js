import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function ToggleButton(props) {

  function getBookingButtonBgColour(isOn) {
    return isOn ? props.onBgColour : props.offBgColour;
  }

  function getBookingButtonTextColour(isOn) {
    return isOn ? props.onTextColour : props.offTextColour;
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <Badge
            pill
            bg={getBookingButtonBgColour(props.isOn)}
            text={getBookingButtonTextColour(props.isOn)}
            style={{ fontSize: 12 }}>
            {props.onText}
          </Badge>
        </Col>
        <Col xs={6}>
          <Badge
            pill
            bg={getBookingButtonBgColour(props.isOff)}
            text={getBookingButtonTextColour(props.isOff)}
            style={{ fontSize: 12 }}>
            {props.offText}
          </Badge>
        </Col>
      </Row>
    </Container>
  );
}

export default ToggleButton;
