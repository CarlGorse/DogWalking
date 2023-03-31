import Page from 'components/Timeslot/Page';

function TimeslotList(props) {

  return (
    <>
      {props.timeslots?.map((timeslot) => (
        <Page
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
