import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ToggleButton from './ToggleButton';

function BookSession(props) {

  return (
    <Card className="mb-2" style={{ width: '28rem' }}>
      <Card.Body>
        <Card.Title>
          <Container>
            <Row className="justify-content-md-center">
              <Col>{props.date}</Col>
              <Col>
                <ToggleButton 
                  isOn={props.isBooked==='true'}
                  isOff={props.isBooked!=='true'}
                  onText='Booked'
                  offText='Not booked'
                />
              </Col>
            </Row>
          </Container></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.startTime}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{props.duration}</Card.Subtitle>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BookSession;
