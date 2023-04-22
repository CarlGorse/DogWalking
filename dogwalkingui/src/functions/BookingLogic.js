
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
      updateTimeslot(timeslot);
    });
  }

  function deselectTimeslots(timeslotsToDeselect) {
    timeslotsToDeselect?.forEach(timeslot => {
      timeslot.isSelected = false;
      updateTimeslot(timeslot);
    });
  }

  function updateTimeslot(timeslot) {
    timeslots.filter(x => x.id === timeslot.id)[0] = timeslot;
  }
}

function bookTimeslots(timeslots, booking) {
  let bookedTimeslots = timeslots.slice();
  booking.timeslots.forEach(bookedTimeslot => {
    bookedTimeslot.status = 'booked';
    bookedTimeslot.booking = booking;
    bookedTimeslot.isSelected = false;
    bookedTimeslots[bookedTimeslot.id] = bookedTimeslot;
  });
  return bookedTimeslots;
}

function createBooking(selectedTimeslots) {
  return {
    date: selectedTimeslots[0].date,
    startTime: selectedTimeslots[0].startTime,
    endTime: selectedTimeslots[selectedTimeslots.length - 1].endTime,
    duration: (selectedTimeslots.length * 15) + ' mins',
    cost: '£16',
    timeslots: selectedTimeslots
  };
}

function getSelectedTimeslots(timeslots) {
  return timeslots.filter(timeslot => timeslot.isSelected);
}

export { createBooking, bookTimeslots, getSelectedTimeslots, selectTimeslots };
