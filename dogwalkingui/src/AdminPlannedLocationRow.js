import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import DatePicker from "./DatePicker";
import React from 'react';
import Row from 'react-bootstrap/Row';
import TimePicker from "./TimePicker";

function AdminPlannedLocationRow(props) {

  return (
    <>
      <Row className="justify-content-md-center mt-2">
        <Col xs={2}><DatePicker date={props.date}/></Col>
        <Col xs={1}><TimePicker time={props.startTime}/></Col>
        <Col xs={1}><TimePicker time={props.endTime}/></Col>
        <Col xs={2}><input type="text" value={props.location} /></Col>
        <Col xs={1}><Button size='sm' onClick={props.deleteRecordHandler}>delete row</Button></Col>
      </Row>
    </>
  );
}

export default AdminPlannedLocationRow;
