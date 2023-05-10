import AdminPlannedLocationRow from './AdminPlannedLocations/AdminPlannedLocationRow';
import { Col, Container, Row } from 'react-bootstrap';
import DeleteAdminPlannedLocationModal from './AdminPlannedLocations/DeleteAdminPlannedLocationModal';
import React, { useState, useEffect } from 'react';

function AdminPlannedLocationsList(props) {

  const [getData, setData] = useState(null);
  const [getShowModal, setShowModal] = useState(false);

  useEffect(() => {

    const startData = [
      {
        id: 1,
        date: Date.parse('07/21/2023'),
        startTime: Date.parse('01/01/2001 09:00:00'),
        endTime: Date.parse('01/01/2001 14:00:00'),
        location: 'Midsomer Norton'
      },
      {
        id: 2,
        date: Date.parse('08/21/2023'),
        startTime: Date.parse('01/01/2001 13:00:00'),
        endTime: Date.parse('01/01/2001 16:00:00'),
        location: 'Midsomer Norton'
      },
    ];

    setData(startData);
  }, []);

  function deleteRecordHandler(id) {
    setShowModal(true);
  }

  function deleteRecordHandler2(id) {
    setData(getData.filter(function (record) {
      return record.id !== id;
    }));
  }

  if (getData === null) {
    return (<></>);
  }

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={2}>Day</Col>
          <Col xs={1}>Time start</Col>
          <Col xs={1}>Time end</Col>
          <Col xs={2}>Location</Col>
        </Row>

        {getData.map(record =>
          <AdminPlannedLocationRow
            date={record.date}
            startTime={record.startTime}
            endTime={record.endTime}
            location={record.location}
            deleteRecordHandler={() => deleteRecordHandler(record.id)}
          />)
        }

        <Row className="justify-content-md-center mt-2">
          <Col xs={2}><input type="text" /></Col>
          <Col xs={1}><input type="text" /></Col>
          <Col xs={1}><input type="text" /></Col>
          <Col xs={2}><input type="text" /></Col>
          <Col xs={1}></Col>
        </Row>
      </Container>

      <DeleteAdminPlannedLocationModal show={getShowModal} deleteRecordHandler2={deleteRecordHandler2}></DeleteAdminPlannedLocationModal>
    </>
  );
}

export default AdminPlannedLocationsList;
