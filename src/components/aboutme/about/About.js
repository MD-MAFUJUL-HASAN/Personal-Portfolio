import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">MD Mafujul Hasan </b> 
                  and I am a <b className="purple">computer science and engineering</b> 
                    student at <b className="purple">Sonargaon University</b>
                      in Dhaka, Bangladesh.
                <br />
                  I am passionate about developing computerized systems that gather, retain, evaluate and exhibit data to facilitate the achievement of organizational aims and objectives.
                <br />I am proficient in various programming languages such as &nbsp;
                <i>
                  <b className="purple">
                    {" "}
                    C, C++, Java, Python, HTML, CSS, PHP, and JavaScript.{" "}
                  </b>
                </i>
                <br />
                <br />
                I also have experience working with frameworks and libraries such as &nbsp;
                <i>
                  <b className="purple">
                    {" "}
                    NodeJS, ReactJS, OpenCV, Pandas, and NumPy.{" "}
                  </b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with &nbsp;
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                <br />
                <br />In my free time, I enjoy learning new technologies and &nbsp;
                <i>
                  <b className="purple">building new web technologies and products. </b>
                </i>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
