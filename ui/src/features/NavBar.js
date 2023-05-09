import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
import SystemSettingsContext from "contexts/systemSettingsContext";
import { useContext } from 'react';

function NavBar() {

  const { getSystemSettings } = useContext(SystemSettingsContext);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `book`;
    navigate(path);
  }

  let isOnline = getSystemSettings?.status === 1;

  return (
    <Navbar collapseOnSelect expand='sm' bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="./home">Dog walking</Navbar.Brand>
        <Button variant="outline-primary" onClick={routeChange}>Book</Button>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            {/*<NavDropdown title="Bookings">
              <NavDropdown.Item href="./book">Book</NavDropdown.Item>
            </NavDropdown>
  */}
            <Nav.Link href="./userSettings">Settings</Nav.Link>
            <NavDropdown title="Admin">

              <NavDropdown.Item href="./adminGeneralSettings">Settings</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="./contact">Contact</Nav.Link>
            <Nav.Link href="./about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form.Label style={{ fontWeight: "bold", color: isOnline ? "green" : "red" }}>{isOnline ? "TAKING NEW BOOKINGS" : "NO NEW BOOKINGS"}</Form.Label>
      </Container>
    </Navbar >
  );
}

export default NavBar;
