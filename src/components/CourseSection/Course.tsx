import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight, FaClock, FaUsers } from "react-icons/fa";
import "./Course.css";

import course1 from "../../assets/computer-science.jpeg";
import course2 from "../../assets/Business-Administration.jpeg";
import course3 from "../../assets/Mechanical-Engineering.avif";
import { FiArrowUpRight } from "react-icons/fi";

const courses = [
    {
        image: course1,
        title: "Computer Science",
        description:
            "Learn modern software development, AI, cloud computing, and data structures.",
        duration: "4 Years",
        seats: "120 Seats",
    },
    {
        image: course2,
        title: "Business Administration",
        description:
            "Develop leadership skills and understand the world of business and finance.",
        duration: "3 Years",
        seats: "80 Seats",
    },
    {
        image: course3,
        title: "Mechanical Engineering",
        description:
            "Build expertise in manufacturing, robotics and industrial systems.",
        duration: "4 Years",
        seats: "100 Seats",
    },
];

function Course() {
    return (
        <>
            <section className="course-section" id="courses">
                <Container>
                    <div className="section-heading">
                        <div>
                            <span className="section-badge">Our Courses</span>
                        </div>

                        <h2>Explore Popular Programs</h2>

                        <p>
                            Discover a wide range of academic programs designed for future
                            innovators and leaders.
                        </p>
                    </div>

                    <Row className="g-4">
                        {courses.map((course, index) => (
                            <Col lg={4} md={6} key={index}>
                                <div className="course-card">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="course-image"
                                    />

                                    <div className="course-overlay">
                                        <div className="course-top">
                                            <h3>{course.title}</h3>

                                            <button className="expand-btn">
                                                <FiArrowUpRight />
                                            </button>
                                        </div>

                                        <div className="course-details">
                                            <p>{course.description}</p>

                                            <div className="course-info">
                                                <span>
                                                    <FaClock /> {course.duration}
                                                </span>

                                                <span>
                                                    <FaUsers /> {course.seats}
                                                </span>
                                            </div>

                                            <button className="course-btn">
                                                Explore Course <FaArrowRight />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Course;