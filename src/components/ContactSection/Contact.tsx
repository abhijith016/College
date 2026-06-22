import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import {
  HiArrowUpRight,
  HiMapPin,
  HiPhone,
  HiEnvelope,
} from "react-icons/hi2";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors: any = {};

    if (!formData.name.trim())
      tempErrors.name = "Name is required";

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim())
      tempErrors.phone = "Phone number is required";

    if (!formData.message.trim())
      tempErrors.message = "Message is required";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <Container>
        <Row className="g-5 align-items-center">

          <Col lg={5}>
            <span className="section-badge">Contact Us</span>

            <h2 className="contact-title">
              Get In Touch With Our Team
            </h2>

            <p className="contact-desc">
              Have questions regarding admissions or programs? We're here to help.
            </p>

            <div className="contact-info-card">
              <div className="info-icon">
                <HiPhone />
              </div>

              <div>
                <h6>Phone</h6>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="info-icon">
                <HiEnvelope />
              </div>

              <div>
                <h6>Email</h6>
                <p>info@xyzcollege.edu</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="info-icon">
                <HiMapPin />
              </div>

              <div>
                <h6>Address</h6>
                <p>
                  XYZ College Campus,
                  Kochi, Kerala - 682001
                </p>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="contact-form-card">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <small>{errors.name}</small>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Control
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <small>{errors.email}</small>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <small>{errors.phone}</small>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Write your message..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <small>{errors.message}</small>
                </Form.Group>

                <button className="send-btn">
                  Send Message <HiArrowUpRight />
                </button>
              </Form>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Contact;