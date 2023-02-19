import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TimeslotSelector from './TimeslotSelector';
import TimeslotShowDetails from './TimeslotShowDetails';

function Timeslot(props) {

  function handleOnSelect(isSelected) {
    props.handleOnSelectTimeslot(props.timeslot.id, isSelected);
  };

  return (
    <Container>
      <Row key={props.id} className='h-10'>
        <Col xs={2}>
          <TimeslotSelector
            handleOnClick={handleOnSelect}
            timeslot={props.timeslot}
            text={props.timeslot.startTime + ' - ' + props.timeslot.endTime + ' (' + props.timeslot.duration + ' mins)'}>
          </TimeslotSelector>
        </Col>
        <Col xs={1}>
          <TimeslotShowDetails
            timeslot={props.timeslot}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Timeslot;
