import { Container, Nav, Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {

  return (
    <Navbar collapseOnSelect expand='sm' bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="./home">Dog walking</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavDropdown title="Bookings">
              <NavDropdown.Item href="./adhocBookingPage">New adhoc booking</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="./userSettings">Settings</Nav.Link>
            <Nav.Link href="./adminGeneralSettings">Admin settings</Nav.Link>
            <Nav.Link href="./contact">Contact</Nav.Link>
            <Nav.Link href="./about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default NavBar;
