import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import React , { useState } from 'react'
export default function Header() {

  const [progress, setProgress] = useState(0)

  return (
    <>
    <LoadingBar
      color='#397080'
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
      height={3}
      waitingTime={500}
      style={
        {
          top: "fixed"
          
        }
      }
    />

    <Navbar expand="lg" className="bg-body-tertiary ">
    <Container>
      <Navbar.Brand> <Link onClick={() => setProgress(100)} className='Navbar-Name' to={"/"}>Sameer</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='shadow-none border-0'/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav ms-auto">
          <Nav.Link><Link  onClick={() => setProgress(100)} className='nav-link Navbar-sections' to={"/"}><h2>Home</h2></Link></Nav.Link>
          <Nav.Link><Link onClick={() => setProgress(100)} className='nav-link Navbar-sections' to={"/about"}><h2>About</h2></Link></Nav.Link>
          <Nav.Link><Link onClick={() => setProgress(100)} className='nav-link Navbar-sections' to={"/project"}><h2>Projects</h2></Link></Nav.Link>
          {/* <Nav.Link><Link className='nav-link Navbar-sections' to={"/review"}><h2>Reviews</h2></Link></Nav.Link> */}
          <Nav.Link><Link onClick={() => setProgress(100)} className='nav-link Navbar-sections' to={"/contact"}><h2>Contact</h2></Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  );
}
