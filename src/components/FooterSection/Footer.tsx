import { Container, Row, Col } from "react-bootstrap";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";
import {
    HiOutlinePhone,
    HiOutlineEnvelope,
    HiOutlineMapPin,
} from "react-icons/hi2";
import "./Footer.css";

const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="g-5">

                    <Col lg={4}>
                        <div className="footer-brand">
                            <h3>XYZ College</h3>

                            <p>
                                Empowering students through quality education and innovative
                                learning experiences for a brighter future.
                            </p>

                            <div className="social-icons">
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebookF />
                                </a>

                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram />
                                </a>

                                <a
                                    href="https://x.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTwitter />
                                </a>

                                <a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4}>
                        <div className="footer-title">
                            <h5>Quick Links</h5>

                            <ul>
                                <li onClick={() => scrollToSection("home")}>
                                    Home
                                </li>

                                <li onClick={() => scrollToSection("about")}>
                                    About Us
                                </li>

                                <li onClick={() => scrollToSection("courses")}>
                                    Courses
                                </li>

                                <li onClick={() => scrollToSection("admissions")}>
                                    Admissions
                                </li>

                                <li onClick={() => scrollToSection("contact")}>
                                    Contact
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col lg={4}>
                        <div className="footer-title">
                            <h5>Contact Info</h5>

                            <div className="footer-contact">
                                <HiOutlineMapPin />
                                <span>
                                    XYZ College Campus,<br />
                                    Kochi, Kerala - 682001
                                </span>
                            </div>

                            <div className="footer-contact">
                                <HiOutlinePhone />
                                <span>+91 98765 43210</span>
                            </div>

                            <div className="footer-contact">
                                <HiOutlineEnvelope />
                                <span>info@xyzcollege.edu</span>
                            </div>
                        </div>
                    </Col>

                </Row>

                <hr />

                <div className="footer-bottom">
                    © 2026 XYZ College. All Rights Reserved.
                </div>
            </Container>
        </footer>
    );
}

export default Footer;