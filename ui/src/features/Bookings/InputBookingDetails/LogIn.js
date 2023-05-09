import { Alert, Accordion, Button, Col, Container, Row } from 'react-bootstrap';
import Input from 'components/Controls/Input';
import { useEffect, useState } from 'react';
import styles from './style.module.css';

function LogIn(props) {

  const [getShow, setShow] = useState(true);

  useEffect(
    () => setShow(props.show ?? true),
    [props.show]
  );

  return (
    <Alert className="fs-6" show={getShow} variant="dark" onClose={() => setShow(false)} dismissible>
      <Accordion className={styles} show={getShow} onClose={() => setShow(false)}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Container>
              <Row>
                {props.message}
              </Row>
            </Container>
          </Accordion.Header>
          <Accordion.Body>
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
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Alert>
  );
}

export default LogIn;
