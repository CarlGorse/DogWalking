import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TimeslotSelector from './TimeslotSelector';
import TimeslotShowDetails from './TimeslotShowDetails';

function Timeslot(props) {

  function handleOnSelect(isSelected) {
    props.handleOnSelectTimeslot(props.id, isSelected);
  };


  return (
    <Container>
      <Row key={props.id} className='h-10'>
        <Col xs={2}>
          <TimeslotSelector
            handleOnClick={handleOnSelect}
            isBookable={props.isBookable}
            isBooked={props.isBooked}
            text={props.startTime + ' - ' + props.endTime + ' (' + props.duration + ' mins)'}>
          </TimeslotSelector>
        </Col>
        <Col xs={1}>
          <TimeslotShowDetails
            status={props.isBookable ? (props.isBooked ? 'Booked (bookable)' : 'Bookable') : 'Not bookable'}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Timeslot;
