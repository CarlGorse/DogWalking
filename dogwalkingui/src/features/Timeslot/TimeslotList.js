import Timeslot from './Timeslot';

function TimeslotList(props) {

  function handleOnSelectTimeslot(id, isSelected) {
    props.handleOnSelectTimeslot(id, isSelected);
  };

  return (
    <>
      {props.timeslots?.map((timeslot) => (
        <Timeslot
          key={timeslot.id}
          id={timeslot.id}
          timeslot={timeslot}
          handleOnSelectTimeslot={handleOnSelectTimeslot}
        />
      ))}
    </>
  );
}

export default TimeslotList;
