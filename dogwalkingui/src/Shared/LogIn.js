import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function LogIn(props) {

  const [getShow, setShow] = useState(props.show);

  function HandleClose() {
    props.handleClose();
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <>

      <Modal
        show={getShow}
        backdrop="static"
        keyboard={false}
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
          <Modal.Footer>
            <Button variant="primary" onClick={HandleClose}>Log in</Button>
            <Button variant="secondary" onClick={HandleClose}>Cancel</Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LogIn;
