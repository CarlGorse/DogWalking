import React, { useState } from 'react';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePicker(props) {

  const [date, setDate] = useState(props.date ?? new Date());

  return (
    <>
      <ReactDatePicker selected={date} onChange={date => setDate(date)} />
    </>
  );
}

export default DatePicker;
