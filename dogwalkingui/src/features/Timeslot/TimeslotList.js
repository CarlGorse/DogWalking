import Timeslot from './Timeslot';

function TimeslotList(props) {

  return (
    <>
      {props.timeslots?.map((timeslot) => (
        <Timeslot
          key={timeslot.id}
          id={timeslot.id}
          timeslot={timeslot}
          handleOnSelectTimeslot={(id, isSelected) => props.handleOnSelectTimeslot(id, isSelected)}
        />
      ))}
    </>
  );
}

export default TimeslotList;
