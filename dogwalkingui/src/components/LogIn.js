import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';

function LogIn(props) {

  const [getShow, setShow] = useState(props.show);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <Modal
      show={getShow}
    >

      <Modal.Header>{props.description}:</Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              E-mail
            </Col>
            <Col>
              <input type='textbox'></input>
            </Col>
          </Row>
          <Row>
            <Col>
              Password
            </Col>
            <Col>
              <input type='textbox'></input>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.onLogIn}>
          Log in
        </Button>
        <Button variant="secondary" onClick={props.onCancel}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal >
  );
}

export default LogIn;
