import { Container } from 'react-bootstrap';
import React from 'react';
import Setting from './AdminGeneralSettings/Setting';
import SystemSettingsContext from "contexts/systemSettingsContext";
import { useContext } from 'react';

function AdminGeneralSettings() {

  const { getSystemSettings, setSystemSettings } = useContext(SystemSettingsContext);

  function updateSystemSettings(isOn) {
    setSystemSettings({ status: isOn ? 1 : 0 })
  }

  return (
    <>
      <Container>
        <Setting
          name='System status'
          isOn={getSystemSettings?.status === 1 ? true : false}
          onChange={isOn => updateSystemSettings(isOn)}
          onText='online'
          offText='offline'
        />
      </Container>
    </>
  );
}

export default AdminGeneralSettings;
