import Col from 'react-bootstrap/Col';
import { getTimeStringHoursAndMinutes } from 'functions/DateTimeFunctions';
import Row from 'react-bootstrap/Row';
import Selector from './Selector/Selector';

function Timeslot({ timeslot, handleOnChangeSelect, handleOnSelectBookedTimeslot }) {

  return (
    <Row key={timeslot.id}>
      <Col className="col-auto pe-0">
        <Selector
          handleOnChangeSelect={isSelected => handleOnChangeSelect(timeslot.id, isSelected)}
          handleOnSelectBookedTimeslot={handleOnSelectBookedTimeslot}
          timeslot={timeslot}
          text={getTimeStringHoursAndMinutes(timeslot.startTime) + ' - ' + getTimeStringHoursAndMinutes(timeslot.endTime)}>
        </Selector>
      </Col>
    </Row >
  );
}

export default Timeslot;
