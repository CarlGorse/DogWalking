import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Input from 'components/Forms/Input';
import Row from 'react-bootstrap/Row';

function LogIn(props) {

  return (
    <>
      <Container>
        <Row>
          <Col xs={4}>
            E-mail
          </Col>
          <Col>
            <Input />
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            Password
          </Col>
          <Col>
            <Input />
          </Col>
        </Row>
      </Container>

      <Button className="mt-2" variant="primary" size='sm' onClick={props.onLogIn}>
        Log in
      </Button>
    </>
  );
}

export default LogIn;
