import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Setting from './Setting';

function AdminGeneralSettings(props) {

  return (
    <>
          <p>You can change system settings here.</p>

<Container>
  <Setting name='System is available' isOn='true'/>
</Container>
    </>
  );
}

export default AdminGeneralSettings;
