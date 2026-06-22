import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { FaGraduationCap } from "react-icons/fa";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

function Header() {
  return (
    <div className="header-wrapper">
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid>
          <div className="logo-circle">
            <FaGraduationCap />
          </div>

          <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggler">
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto nav-links">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#courses">Courses</Nav.Link>
              <Nav.Link href="#admissions">Admissions</Nav.Link>
            </Nav>

            <button
              className="contact-btn"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;