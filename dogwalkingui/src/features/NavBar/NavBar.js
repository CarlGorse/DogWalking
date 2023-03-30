import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="./home">Dog walking</Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title="Bookings">
            <NavDropdown.Item href="./adhocBookingPage">New adhoc booking</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="./userSettings">Settings</Nav.Link>
          <Nav.Link href="./adminGeneralSettings">Admin settings</Nav.Link>
          {/*<NavDropdown title="Admin settings">
            <NavDropdown.Item href="./adminGeneralSettings">General</NavDropdown.Item>
            <NavDropdown.Item href="./adminPlannedLocations">Planned locations</NavDropdown.Item>
        </NavDropdown>
        */}
          <Nav.Link href="./contact">Contact</Nav.Link>
          <Nav.Link href="./about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar >
  );
}

export default NavBar;
