
const selectTimeslots = (timeslots, actionedTimeslotStartTime, isSelect) => {

  var actionedTimeslot = timeslots.filter((timeslot) => timeslot.startTime === actionedTimeslotStartTime)[0];

  selectOrDeselectActionedTimeslot(isSelect, actionedTimeslot);
  selectRequiredTimeslots();

  return timeslots;

  function selectOrDeselectActionedTimeslot() {
    selectTimeslots(isSelect ? [actionedTimeslot] : undefined);
    deselectTimeslots(!isSelect ? [actionedTimeslot] : undefined);
  }

  function calculateTimeslotsToSelect() {
    return timeslots.filter(timeslot =>
      (timeslot.startTime === actionedTimeslot.startTime && isSelect)
      || (
        isSelect
        && actionedTimeslot.isBooked
        && timeslot.isBooked
        && timeslot.booking.startTime === actionedTimeslot.booking.startTime
      )
      || (
        timeslot.isSelected
        && !actionedTimeslot.isBooked
        && !timeslot.isBooked
        && !(
          timeslots.some(blankTimeslot => !blankTimeslot.isSelected
            && timeslots.some(selectedTimeslot => selectedTimeslot.isSelected && selectedTimeslot.startTime < blankTimeslot.startTime)
            && timeslots.some(selectedTimeslot => selectedTimeslot.isSelected && selectedTimeslot.startTime > blankTimeslot.startTime)
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
      updateTimeslot(timeslots, timeslot);
    });
  }

  function deselectTimeslots(timeslotsToDeselect) {
    timeslotsToDeselect?.forEach(timeslot => {
      timeslot.isSelected = false;
      updateTimeslot(timeslots, timeslot);
    });
  }
}

function updateTimeslot(timeslots, timeslot) {
  timeslots.filter(x => x.startTime === timeslot.startTime)[0] = timeslot;
}

function createDraftBooking(selectedTimeslots) {
  return {
    date: selectedTimeslots[0].date,
    startTime: selectedTimeslots[0].startTime,
    endTime: selectedTimeslots[selectedTimeslots.length - 1].endTime,
    duration: selectedTimeslots.length * 15,
    cost: '£16',
    timeslots: selectedTimeslots
  };
}

function getSelectedTimeslots(timeslots) {
  return timeslots?.filter(timeslot => timeslot.isSelected);
}

function isFirstTimeslotInSelection(timeslot, timeslots) {
  if (getSelectedTimeslots(timeslots)[0].startTime !== timeslot.startTime) {
    return false;
  }
  return true;
}

function isLastTimeslotInSelection(timeslot, timeslots) {
  let selectedTimeslots = getSelectedTimeslots(timeslots)
  if (selectedTimeslots[selectedTimeslots.length - 1].startTime !== timeslot.startTime) {
    return false;
  }
  return true;
}

function isFirstTimeslotInBooking(timeslot, booking) {
  return timeslot.startTime === booking.startTime;
}

export {
  createDraftBooking,
  getSelectedTimeslots,
  isFirstTimeslotInSelection,
  isFirstTimeslotInBooking,
  isLastTimeslotInSelection,
  selectTimeslots
};
