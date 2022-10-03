import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'; // I added this


function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand  href="/">The Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            {/* the href is what actually changes the url name in the browser */}
            <Nav.Link href="/configure"> Edit Catalog</Nav.Link>
            <Nav.Link href="/browse"> Browse Books</Nav.Link>
            <Nav.Link href="/about"> About Us</Nav.Link>
          
          </Nav>
    
          <Nav className="ms-auto">

            <Nav.Link href="/checkout"> Test</Nav.Link>
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;