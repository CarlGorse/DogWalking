import React, { useState } from 'react';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePicker(props) {

  const [date, setDate] = useState(props.date ?? new Date());

  function onSetDate(date) {
    setDate(date);
    props.onSetDate(date);
  }

  return (
    <ReactDatePicker selected={date} onChange={date => onSetDate(date)} />
  );
}

export default DatePicker;
