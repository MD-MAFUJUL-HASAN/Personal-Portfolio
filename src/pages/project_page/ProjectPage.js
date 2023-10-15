import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/nyc.png";
import ci from "../../images/onboarding.png";
import hd from "../../images/hd.png";
import eco from "../../images/eco.png";
import pp from "../../images/portfolio.png";
import meal from "../../images/meal.png";
import ac from "../../images/academic.png";
import age from "../../images/age.png";
import calculator from "../../images/calculator.png";
import calendar from "../../images/calendar.png";
import dc from "../../images/dc.png";
import sims from "../../images/sims.png";
import { FaCode } from "react-icons/fa";
export default function ProjectPage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
            </Zoom>
          </div>
          <div>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  New Year CountDown
                                </h5>
                                <img src={nyc} alt={nyc} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/MD-MAFUJUL-HASAN/Web_Programming/tree/main/New-Year-Countdown"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  The New Year Countdown Project is more than
                                  just a celebration; it's a testament to the
                                  human spirit and our shared aspirations for a
                                  brighter future. So, mark your calendars and
                                  get ready to be part of this global
                                  extravaganza as we count down to a new year
                                  filled with endless possibilities.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, JavaScript
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Heart Disease Prediction
                                </h5>
                                <img src={hd} alt={hd} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/MD-MAFUJUL-HASAN/Machine_Learning/tree/main/Heart%20Disease%20Prediction"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Use of AI and Machine Learning: Artificial
                                  intelligence and machine learning are already
                                  being used in healthcare to help predict heart
                                  disease. In the future, these technologies
                                  could become more advanced, enabling more
                                  accurate predictions of heart disease risk.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Pandas, Matplotlib, Scikit-Learn
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProjectPage"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectPageContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Online Payroll Management System
                                </h5>
                                <img src={ci} alt={ci} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/MD-MAFUJUL-HASAN/Online-Payroll-Management-System"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  A Payroll management System with feature like
                                  generate payslip & reports. It manages
                                  salaries, leaves, branches, employees,
                                  designations, shifts, holidays and employee
                                  attendance. It has chat application so
                                  internal employees can use that feature.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, JavaScript, PHP, SCSS
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Shoppy Ecommerce
                                </h5>
                                <img src={eco} alt={eco} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/MD-MAFUJUL-HASAN/Shoppy_Ecommerce"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Seamless online shopping with a vast catalog,
                                  secure transactions, and personalized
                                  recommendations. 24/7 customer support,
                                  flexible payments, and fast shipping. Explore
                                  our website and redefine your shopping
                                  experience.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, React, JavaScript
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Personal Portfolio
                                </h5>
                                <img src={pp} alt={pp} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/MD-MAFUJUL-HASAN/Personal-Portfolio"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Welcome to my personal portfolio. Explore my
                                  work, skills, and achievements in a concise
                                  and visually appealing format. Get a glimpse
                                  of my expertise and creativity.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, SCSS, React, JavaScript
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Amazing Meal
                                </h5>
                                <img src={meal} alt={meal} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/MD-MAFUJUL-HASAN/Amazing_Meal"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Indulge in a mouthwatering meal that combines
                                  flavors and textures to create a culinary
                                  masterpiece. Our carefully crafted dishes are
                                  made with the freshest ingredients, expertly
                                  prepared to satisfy your taste buds and leave
                                  you craving for more.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, JavaScript, React
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Academia Learning Website
                                </h5>
                                <img src={ac} alt={ac} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/MD-MAFUJUL-HASAN/Academia"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Unlock your potential with our dynamic
                                  learning website. Access a wide range of
                                  courses, interactive lessons, and expert
                                  instructors to enhance your knowledge and
                                  skills. Start your learning journey today and
                                  expand your horizons.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, JavaScript, React
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Dual Mode Calendar
                                </h5>
                                <img src={calendar} alt={calendar} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/MD-MAFUJUL-HASAN/Web_Programming/tree/main/Dual-Mode-Calendar"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  The Dual Mode Calendar project is a versatile web application built with HTML, CSS, and JavaScript. It seamlessly 
                                  toggles between a traditional monthly calendar view and a sleek event scheduler. Users can effortlessly manage 
                                  appointments and events in a visually appealing and user-friendly interface.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, JavaScript
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Dual Mode Calculator
                                </h5>
                                <img src={calculator} alt={calculator} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/MD-MAFUJUL-HASAN/Web_Programming/tree/main/Dual-Mode-Calculator"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  The Dual Mode Calculator project is a web application created with HTML, CSS, and JavaScript. It offers two modes: 
                                  basic and scientific, providing essential arithmetic functions and advanced calculations. The user-friendly interface 
                                  and responsive design ensure seamless use across various devices.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, JavaScript
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Digital Clock
                                </h5>
                                <img src={dc} alt={dc} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/MD-MAFUJUL-HASAN/Web_Programming/tree/main/Digital-Clock"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Create a sleek, responsive digital clock with HTML, CSS, and JavaScript. Display real-time hours, minutes, and seconds, 
                                  and update automatically. Customize its style and layout using CSS for a modern, functional timekeeping experience.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, JavaScript
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Age Calculator
                                </h5>
                                <img src={age} alt={age} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/MD-MAFUJUL-HASAN/Web_Programming/tree/main/Age-Calculator"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Create an Age Calculator project using HTML, CSS, and JavaScript. Input your birthdate, and the tool 
                                  instantly calculates your current age. The sleek design and user-friendly interface make age 
                                  determination quick and hassle-free. Perfect for websites, apps, or personal use.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, JavaScript
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Student Information Management System
                                </h5>
                                <img src={sims} alt={sims} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/MD-MAFUJUL-HASAN/Student-Information-Management-System"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  The Student Information Management System project in C++ is a robust software solution designed to 
                                  efficiently organize and manage student data. It enables users to store, update, and retrieve student 
                                  information, including grades, attendance, and personal details, ensuring streamlined academic 
                                  administration.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                C++
                              </div>
                            </div>
                          </Fade>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}
