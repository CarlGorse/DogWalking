import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Input from 'components/Forms/Input';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

function LogIn(props) {

  const [getShow, setShow] = useState(true);

  useEffect(
    () => setShow(props.show ?? true),
    [props.show]
  );

  return (
    <Alert className="fs-6" show={getShow} variant="dark" onClose={() => setShow(false)} dismissible>
      <h5>{props.title}</h5>
      <p>{props.message}</p>

      <Container>
        <Row>
          <Col xs={2}>
            E-mail:
          </Col>
          <Col xs={6}>
            <Input />
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            Password:
          </Col>
          <Col xs={6}>
            <Input />
          </Col>
        </Row>
      </Container>

      <Button className="mt-2" variant="primary" size='sm' onClick={() => setShow(false)}>
        Log in
      </Button>

    </Alert>


  );
}

export default LogIn;
