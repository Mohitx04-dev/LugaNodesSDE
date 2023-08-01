import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    const NavElements = [
        {
            Name : "Home",
            Link : "/",
            className : "text-decoration-none text-secondary"
        },
        {
            Name : "About",
            Link : "about",
            className : "text-decoration-none text-secondary"
        }
    ]
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Crypto Tracker by Mohit Chourasia 20BBS0140</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {NavElements.map(e=>{
                return <Nav.Link><Link to={e.Link} className={e.className}>{e.Name}</Link></Nav.Link>;
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;