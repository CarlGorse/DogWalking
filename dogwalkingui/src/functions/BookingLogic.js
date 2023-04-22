
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
        && actionedTimeslot.hasBooking
        && timeslot.hasBooking
        && timeslot.booking.id === actionedTimeslot.booking.id
      )
      || (
        timeslot.isSelected
        && !actionedTimeslot.hasBooking
        && !timeslot.hasBooking
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
  timeslots.filter(x => x.id === timeslot.id)[0] = timeslot;
}

function createDraftBooking(selectedTimeslots) {
  return {
    date: selectedTimeslots[0].date,
    startTime: selectedTimeslots[0].startTime,
    endTime: selectedTimeslots[selectedTimeslots.length - 1].endTime,
    duration: (selectedTimeslots.length * 15) + ' mins',
    cost: '£16',
    timeslots: selectedTimeslots
  };
}

function confirmBooking(timeslots, booking) {
  var bookedTimeslots = timeslots;
  booking.timeslots.forEach(timeslot => {
    timeslot.status = 'booked';
    timeslot.booking = booking;
    timeslot.hasBooking = true;
    timeslot.isSelected = false;
    updateTimeslot(bookedTimeslots, timeslot);
  });
  return bookedTimeslots;
}

function getSelectedTimeslots(timeslots) {
  return timeslots.filter(timeslot => timeslot.isSelected);
}

export { createDraftBooking, confirmBooking, getSelectedTimeslots, selectTimeslots };
