
const selectTimeslots = (timeslots, actionedTimeslotid, isSelect) => {

  var actionedTimeslot = timeslots.filter((timeslot) => timeslot.id === actionedTimeslotid)[0];

  selectOrDeselectActionedTimeslot(isSelect, actionedTimeslot);
  selectRequiredTimeslots();

  return timeslots;

  function selectOrDeselectActionedTimeslot() {
    selectTimeslots(isSelect ? [actionedTimeslot] : undefined);
    deselectTimeslots(!isSelect ? [actionedTimeslot] : undefined);
  }

  function calculateTimeslotsToSelect() {
    return timeslots.filter(timeslot =>
      (timeslot.id === actionedTimeslot.id && isSelect)
      || (
        isSelect
        && actionedTimeslot !== undefined
        && actionedTimeslot.booking !== undefined
        && timeslot.booking !== undefined
        && timeslot.booking?.id === actionedTimeslot.booking?.id
      )
      || (
        timeslot.isSelected
        && actionedTimeslot.booking === undefined
        && !(
          timeslots.some(blankTimeslot => !blankTimeslot.isSelected
            && timeslots.some(selectedTimeslot => selectedTimeslot.isSelected && selectedTimeslot.id < blankTimeslot.id)
            && timeslots.some(selectedTimeslot => selectedTimeslot.isSelected && selectedTimeslot.id > blankTimeslot.id)
          )
        )
      )
    );
  }

  function selectRequiredTimeslots() {
    var timeslotsToSelect = calculateTimeslotsToSelect();

    deselectTimeslots(timeslots);
    selectTimeslots(timeslotsToSelect);
  }

  function selectTimeslots(timeslotsToSelect) {
    timeslotsToSelect?.forEach(timeslot => {
      timeslot.isSelected = true;
      timeslots[timeslot.id] = timeslot;
    });
  }

  function deselectTimeslots(timeslotsToDeselect) {
    timeslotsToDeselect?.forEach(timeslot => {
      timeslot.isSelected = false;
      timeslots[timeslot.id] = timeslot;
    });
  }
}

export { selectTimeslots };
