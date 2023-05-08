import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
import SystemSettingsContext from "contexts/systemSettingsContext";
import { useContext } from 'react';

function NavBar() {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `book`;
    navigate(path);
  }

  return (
    <Navbar collapseOnSelect expand='sm' bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="./home">Dog walking</Navbar.Brand>
        <Button variant="primary" onClick={routeChange}>Book</Button>
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
      </Container>
    </Navbar >
  );
}

export default NavBar;
