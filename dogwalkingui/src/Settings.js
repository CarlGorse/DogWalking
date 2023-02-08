import Container from 'react-bootstrap/Container';
import Setting from './Setting';

function Settings(props) {
  
  return (
    <>

      <p>You can change settings here.</p>

      <Container>
        <Setting name='Setting #1' isOn='true'/>
        <Setting name='Setting #2'/>
      </Container>
    </>
  );
}

export default Settings;
