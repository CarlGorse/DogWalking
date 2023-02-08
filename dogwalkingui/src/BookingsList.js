import BookSession from './Booking';

function BookSessionList(props) {
  
  return (
    <>
      <BookSession id='1' date='Wed 3rd Feb' duration='2 hour walk' startTime='09:30' isBooked='true' />
      <BookSession id='2' date='Thu 29th Sep' duration='30 minute walk' startTime='14:25' isBooked='false' />
    </>
  );
}

export default BookSessionList;
