import { Button, Col, Container, Row } from "react-bootstrap";
import { HiArrowUpRight } from "react-icons/hi2";
import "./Admission.css";

function Admission() {
  return (
    <section className="admission-section" id="admissions">
      <Container>
        <Row className="align-items-center g-5">

          <Col lg={7}>
            <span className="section-badge">Admissions Open 2026</span>

            <h2 className="admission-title">
              Begin Your Academic Journey With Us
            </h2>

            <p className="admission-description">
              Our admission process is designed to be simple and transparent.
              Submit your application, upload the required documents, and our
              admissions team will guide you through every step toward becoming
              a part of our vibrant academic community.
            </p>

            <div className="admission-steps">
              <div className="step">
                <span>01</span>
                <p>Submit Application Form</p>
              </div>

              <div className="step">
                <span>02</span>
                <p>Document Verification</p>
              </div>

              <div className="step">
                <span>03</span>
                <p>Admission Confirmation</p>
              </div>
            </div>
          </Col>

          <Col lg={5}>
            <div className="admission-card">
              <h3>Admissions Open</h3>

              <p>
                Applications are now open for undergraduate and postgraduate
                programs. Secure your future today.
              </p>

              <Button className="apply-btn">
                Apply Now
                <HiArrowUpRight />
              </Button>

              <button className="detail-btn">
                View Admission Details
              </button>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Admission;