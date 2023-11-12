import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from'react-router-dom';
export default function Header() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
    <Container>
      <Navbar.Brand> <Link className='Navbar-Name' to={"/"}>Sameer</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " className='shadow-none border-0'/>
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="navbar-nav mx-auto">
          <Nav.Link><Link className='nav-link Navbar-sections' to={"/"}><h2>Home</h2></Link></Nav.Link>
          <Nav.Link><Link className='nav-link Navbar-sections' to={"/about"}><h2>About</h2></Link></Nav.Link>
          <Nav.Link><Link className='nav-link Navbar-sections' to={"/project"}><h2>Projects</h2></Link></Nav.Link>
          <Nav.Link><Link className='nav-link Navbar-sections' to={"/review"}><h2>Reviews</h2></Link></Nav.Link>
          <Nav.Link><Link className='nav-link Navbar-sections' to={"/contact"}><h2>Contact</h2></Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
