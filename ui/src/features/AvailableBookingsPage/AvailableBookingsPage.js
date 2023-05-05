import axios from 'axios';
import SelectTimeslots from "../../components/SelectTimeslots/SelectTimeslots";
import { useEffect, useRef, useState } from 'react';

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

    return (
        <SelectTimeslots
            timeslots={getTimeslots}
            date={getDate}
            onSetFilterDate={date => setDate(date)}
        />
    )
}

export default Page;
