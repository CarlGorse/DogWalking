import Timeslot from './Timeslot/Timeslot';

function TimeslotList(props) {

  function handleOnSelectTimeslot(id, isSelected) {
    props.handleOnSelectTimeslot(id, isSelected);
  };

  return (
    <>
      {props.timeslots.map((timeslot) => (
        <Timeslot
          key={timeslot.id}
          style={{ width: '14rem' }}
          id={timeslot.id}
          timeslot={timeslot}
          handleOnSelectTimeslot={handleOnSelectTimeslot}
        />
      ))}
    </>
  );
}

export default TimeslotList;
