import Timeslot from './Timeslot';

function TimeslotList(props) {

  return (
    <>
      {props.timeslots?.map((timeslot) => (
        <Timeslot
          key={timeslot.id}
          id={timeslot.id}
          timeslot={timeslot}
          handleOnChangeSelect={(id, isSelected) => props.handleOnChangeSelect(id, isSelected)}
          handleOnSelectBookedTimeslot={() => props.handleOnSelectBookedTimeslot(timeslot)}
          onBook={props.onBook}
          timeslots={props.timeslots}
        />
      ))}
    </>
  );
}

export default TimeslotList;
