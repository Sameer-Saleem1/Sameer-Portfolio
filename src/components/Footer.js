import { Container, Navbar } from "react-bootstrap";
function Footer() {
  return(
      <Navbar fixed='bottom'  className="bg-dark p-4 text-white">
          <Container >
          <p className="footer">
              copyright @{new Date().getFullYear()} by <a style={{textDecoration: 'none'}} className={"text-white"} target={"_blank"} href="https://www.iba-suk.edu.pk" rel="noreferrer">Sameer Saleem</a>
          </p>
          </Container>
      </Navbar>
  )
}

export default Footer;
