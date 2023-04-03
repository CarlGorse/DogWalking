import Container from 'react-bootstrap/Container';
import React from 'react';
import Setting from './Components/Setting';

function AdminGeneralSettings(props) {

  return (
    <>
      <p>You can change system settings here.</p>

      <Container>
        <Setting name='System status' isOn='true' />
      </Container>
    </>
  );
}

export default AdminGeneralSettings;
