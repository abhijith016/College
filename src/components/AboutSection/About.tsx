import { Col, Container, Row } from "react-bootstrap";
import { FaGraduationCap, FaUsers, FaAward } from "react-icons/fa";
import "./About.css";
import aboutImage from "../../assets/about-clg.jpg";

function About() {
  return (
    <section className="about-section" id="about">
      <Container>
        <Row className="align-items-center">

          <Col lg={6}>
            <div className="about-image-wrapper">
              <img
                src={aboutImage}
                alt="College"
                className="about-image"
              />

              <div className="experience-card">
                <h2>25+</h2>
                <p>Years of Excellence</p>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="about-content">

              <span className="section-badge">
                About Us
              </span>

              <h2 className="about-title">
                Empowering Students To Achieve Their Dreams
              </h2>

              <p className="about-description">
                XYZ College is dedicated to providing world-class education,
                innovative learning experiences, and exceptional opportunities
                for students to excel academically and professionally.
              </p>

              <div className="feature-card">
                <FaGraduationCap className="feature-icon" />
                <div>
                  <h5>Quality Education</h5>
                  <p>Industry-oriented curriculum and experienced faculty.</p>
                </div>
              </div>

              <div className="feature-card">
                <FaUsers className="feature-icon" />
                <div>
                  <h5>Student Community</h5>
                  <p>Supportive and diverse learning environment.</p>
                </div>
              </div>

              <div className="feature-card">
                <FaAward className="feature-icon" />
                <div>
                  <h5>Placement Success</h5>
                  <p>Excellent placement opportunities with top companies.</p>
                </div>
              </div>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default About;