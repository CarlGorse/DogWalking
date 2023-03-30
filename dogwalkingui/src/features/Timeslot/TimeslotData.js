const dateTime = (new Date()).toLocaleDateString("en-GB");

const timeslotData = [
  { id: 0, date: dateTime, startTime: '08:00', endTime: '08:15', duration: '15', status: 'notBookable' },
  { id: 1, date: dateTime, startTime: '08:15', endTime: '08:30', duration: '15', status: 'notBookable' },
  { id: 2, date: dateTime, startTime: '08:30', endTime: '08:45', duration: '15', status: 'notBookable' },
  { id: 3, date: dateTime, startTime: '08:45', endTime: '09:00', duration: '15', status: 'notBookable' },
  { id: 4, date: dateTime, startTime: '09:00', endTime: '09:15', duration: '15', status: 'notBookable' },
  { id: 5, date: dateTime, startTime: '09:15', endTime: '09:30', duration: '15', status: 'notBookable' },
  { id: 6, date: dateTime, startTime: '09:30', endTime: '09:45', duration: '15', status: 'notBookable' },
  { id: 7, date: dateTime, startTime: '09:45', endTime: '10:00', duration: '15', status: 'bookable', booking: { id: 1, location: 'Bristol', startTime: '09:45', endTime: '10:15', duration: '30 mins' } },
  { id: 8, date: dateTime, startTime: '10:00', endTime: '10:15', duration: '15', status: 'bookable', booking: { id: 1, location: 'Bristol', startTime: '09:45', endTime: '10:15', duration: '30 mins' } },
  { id: 9, date: dateTime, startTime: '10:15', endTime: '10:30', duration: '15', status: 'bookable', booking: { id: 2, location: 'Midsomer Norton', startTime: '10:15', endTime: '10:45', duration: '30 mins' } },
  { id: 10, date: dateTime, startTime: '10:30', endTime: '10:45', duration: '15', status: 'bookable', booking: { id: 2, location: 'Midsomer', startTime: '10:15', endTime: '10:45', duration: '30 mins' } },
  { id: 11, date: dateTime, startTime: '10:45', endTime: '11:00', duration: '15', status: 'bookable' },
  { id: 12, date: dateTime, startTime: '11:00', endTime: '11:15', duration: '15', status: 'bookable' },
  { id: 13, date: dateTime, startTime: '11:15', endTime: '11:30', duration: '15', status: 'bookable' },
  { id: 14, date: dateTime, startTime: '11:30', endTime: '11:45', duration: '15', status: 'bookable' },
  { id: 15, date: dateTime, startTime: '11:45', endTime: '12:00', duration: '15', status: 'bookable' },
  { id: 16, date: dateTime, startTime: '12:00', endTime: '12:15', duration: '15', status: 'notBookable' },
  { id: 17, date: dateTime, startTime: '12:15', endTime: '12:30', duration: '15', status: 'notBookable' },
  { id: 18, date: dateTime, startTime: '12:30', endTime: '12:45', duration: '15', status: 'notBookable' },
  { id: 19, date: dateTime, startTime: '12:45', endTime: '13:00', duration: '15', status: 'notBookable' },
  { id: 20, date: dateTime, startTime: '13:00', endTime: '13:15', duration: '15', status: 'notBookable' },
  { id: 21, date: dateTime, startTime: '13:15', endTime: '13:30', duration: '15', status: 'notBookable' },
  { id: 22, date: dateTime, startTime: '13:30', endTime: '13:45', duration: '15', status: 'bookable' },
  { id: 23, date: dateTime, startTime: '13:45', endTime: '14:00', duration: '15', status: 'bookable' },
  { id: 24, date: dateTime, startTime: '14:00', endTime: '14:15', duration: '15', status: 'bookable' },
  { id: 25, date: dateTime, startTime: '14:15', endTime: '14:30', duration: '15', status: 'bookable' },
  { id: 26, date: dateTime, startTime: '14:30', endTime: '14:45', duration: '15', status: 'bookable', booking: { id: 3, location: 'Paulton', startTime: '14:30', endTime: '15:15', duration: '45 mins' } },
  { id: 27, date: dateTime, startTime: '14:45', endTime: '15:00', duration: '15', status: 'bookable', booking: { id: 3, location: 'Paulton', startTime: '14:30', endTime: '15:15', duration: '45 mins' } },
  { id: 28, date: dateTime, startTime: '15:00', endTime: '15:15', duration: '15', status: 'bookable', booking: { id: 3, location: 'Paulton', startTime: '14:30', endTime: '15:15', duration: '45 mins' } },
  { id: 29, date: dateTime, startTime: '15:15', endTime: '15:30', duration: '15', status: 'bookable' },
  { id: 30, date: dateTime, startTime: '15:30', endTime: '15:45', duration: '15', status: 'bookable' },
  { id: 31, date: dateTime, startTime: '15:45', endTime: '16:00', duration: '15', status: 'bookable' },
  { id: 32, date: dateTime, startTime: '16:00', endTime: '16:15', duration: '15', status: 'bookable' },
  { id: 33, date: dateTime, startTime: '16:15', endTime: '16:30', duration: '15', status: 'bookable' },
  { id: 34, date: dateTime, startTime: '16:30', endTime: '16:45', duration: '15', status: 'bookable' },
  { id: 35, date: dateTime, startTime: '16:45', endTime: '17:00', duration: '15', status: 'bookable' }
];

export { timeslotData };