import axios from 'axios';
import Container from 'react-bootstrap/Container';
import SelectTimeslots from "components/SelectTimeslots/SelectTimeslots";
import { useEffect, useState } from 'react';

function Page() {

  const [getDate, setDate] = useState(new Date());
  const [getTimeslots, setTimeslots] = useState([]);

  useEffect(() => {
    loadTimeslots()
  }, [getDate]);

  function loadTimeslots() {
    axios.get("https://localhost:7083/api/timeslots/get?date=" + getDate.toISOString().split('T')[0])
      .then(response => {
        setTimeslots(response.data)
      })
  }

  function updateTimeslotsState(timeslots) {
    setTimeslots(timeslots.slice()); // copy array for state to recognise any changes
  }

  var selectTimeslots =
    <div className="pt-3">
      <SelectTimeslots
        timeslots={getTimeslots}
        onUpdateTimeslots={timeslots => updateTimeslotsState(timeslots)}
        date={getDate}
        onSetFilterDate={date => setDate(date)}
      />
    </div>

  return (
    <>

      <h3>Edit bookings</h3>

      <Container className='mt-5'>
        {selectTimeslots}
      </Container>
    </>
  )
}

export default Page;
