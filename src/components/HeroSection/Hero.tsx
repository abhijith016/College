import { Button, Col, Container, Row } from "react-bootstrap";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <Container>
        <Row className="hero-main-section min-vh-100">

          <Col lg={7}>
            <div className="hero-content">

              <span className="hero-badge">
                🎓 Excellence in Education
              </span>

              <h1 className="hero-title">
                Shape Your
                <span> Future </span>
                With Quality Education
              </h1>

              <p className="hero-description">
                Empowering students with knowledge, innovation, and opportunities
                to become tomorrow's leaders.
              </p>

              <div className="hero-buttons">
                <Button className="hero-btn-primary">
                  Apply Now
                </Button>

                <Button className="hero-btn-secondary">
                  Explore Courses
                </Button>
              </div>

            </div>
          </Col>

          <Col lg={5}>
            <div className="hero-right">

              <div className="glass-card card-1">
                <h2>5000+</h2>
                <p>Students</p>
              </div>

              <div className="glass-card card-2">
                <h2>50+</h2>
                <p>Courses</p>
              </div>

              <div className="glass-card card-3">
                <h2>98%</h2>
                <p>Placement Rate</p>
              </div>

            </div>
          </Col>

        </Row>
      </Container>

      <div className="blur blur1"></div>
      <div className="blur blur2"></div>
    </section>
  );
}

export default Hero;