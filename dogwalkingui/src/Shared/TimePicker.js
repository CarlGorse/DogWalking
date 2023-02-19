import React, { useState } from 'react';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TimePicker(props) {

  const [time, setTime] = useState(props.time);

  return (
    <ReactDatePicker
      placeholderText='Click to select a time'
      dateFormat="HH:mm"
      showTimeSelect
      showTimeSelectOnly
      selected={time}
      onChange={time => setTime(time)} />
  );
}

export default TimePicker;
