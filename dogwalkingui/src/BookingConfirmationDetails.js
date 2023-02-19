import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import LogIn from './LogIn';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import { useLocation } from 'react-router-dom'

function BookingConfirmationDetails({ route, navigation }) {

  const [getShowLogIn, setShowLogIn] = useState(true);

  const location = useLocation();
  const booking = location.state.booking;

  const handleCloseLogIn = () => {
    setShowLogIn(false);
  }

  return (
    <>
      <LogIn show={getShowLogIn} handleClose={() => handleCloseLogIn()} description='Log in to use your preferences'></LogIn>
      <div style={{ border: '1px solid black' }}>
        <b>Booking</b>
        <Container>
          <Row>
            <Col>Date:</Col>
            <Col>{booking.date}</Col>
          </Row>
          <Row>
            <Col>Start time:</Col>
            <Col>{booking.startTime}</Col>
          </Row>
          <Row>
            <Col>End time:</Col>
            <Col>{booking.endTime}</Col>
          </Row>
        </Container>
      </div>
      <div style={{ border: '1px solid black' }}>
        <b>Options</b>
        <Container>
          <Row>
            <Col>Number of dogs:</Col>
            <Col>
              <select>
                <option selected>One</option>
                <option>Two</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col>Service:</Col>
            <Col>
              <select>
                <option selected>Please select</option>
                <option>Walk</option>
                <option>Play park</option>
                <option>Sitting</option>
              </select></Col>
          </Row>
          <Row>
            <Col>Type of walk:</Col>
            <Col>
              <select>
                <option selected>Any</option>
                <option>Town/street</option>
                <option>Park</option>
                <option>Countryside</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col>Sugegsted location:</Col>
            <Col><input type='textbox' placeholder="Details of an area your dog would like"></input></Col>
          </Row>
          <Row>
            <Col>Can another dog join your walk (at reduced cost?):</Col>
            <Col>
              <select>
                <option>Yes</option>
                <option selected>No</option>
              </select>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ border: '1px solid black' }}>
        <b>About you</b>
        <Container>
          <Row>
            <Col>Name:</Col>
            <Col><input type='textbox' placeholder="Your name"></input></Col>
          </Row>
          <Row>
            <Col>Post code:</Col>
            <Col><input type='textbox' placeholder="AA1 1AA"></input></Col>
          </Row>
          <Row>
            <Col>Property number/name:</Col>
            <Col>
              <select>
              </select>
            </Col>
          </Row>
          <Row>
            <Col>Location details:</Col>
            <Col><input type='textbox' placeholder="Any other details that will help to locate you"></input></Col>
          </Row>
        </Container>
      </div>
      <div style={{ border: '1px solid black' }}>
        <b>About your dog</b>
        <Container>
          <Row>
            <Col>Name:</Col>
            <Col><input type='textbox' placeholder="Your dog's name"></input></Col>
          </Row>
          <Row>
            <Col>Breed:</Col>
            <Col>
              <select>
                <option selected>Please select</option>
                <option>Cockapoo</option>
                <option>Spaniel</option>
                <option>Labrador</option>
                <option selected>Other</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col>Size:</Col>
            <Col>
              <select>
                <option selected>Please select)</option>
                <option>Toy</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col>Can your dog be let off the lead in a park or countryside?:</Col>
            <Col>
              <select>
                <option>Either</option>
                <option>Countryside only</option>
                <option>Park only</option>
                <option selected>No</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col>Comments:</Col>
            <Col><input type='textbox' placeholder="e.g. significant behaviours"></input></Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col>Cost:</Col>
          <Col>{booking.cost}</Col>
        </Row>
      </Container>
      <Button onClick={() => setShowLogIn(true)}>Log In</Button>
      <Button>Book</Button>
    </>
  );
}

export default BookingConfirmationDetails;
