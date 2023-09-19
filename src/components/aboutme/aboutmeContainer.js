import React from 'react'
import { Container, Row, Col,Nav } from "react-bootstrap";
import { Link,Outlet } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';


export default function AboutmeContainer() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={12} className="home-about-description d-flex justify-content-start">
                    <Zoom left cascade>
                        <h1 className='aboutme-heading'>
                            About me
                        </h1>
                    </Zoom>
                    </Col>
                    <Col ms={12} className="mt-3 d-flex flex-column">
                        <div>
                            <Nav justify variant="tabs" defaultActiveKey="/">
                            <Nav.Item className="Navitem">
                                <Nav.Link as={Link} to="/" eventKey="link-1" style={{ fontSize: "17px",fontWeight:700 }}>About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="technicalskill" eventKey="link-2" style={{ fontSize: "17px",fontWeight:700 }}>Skills</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="educationjourney" eventKey="link-3" style={{ fontSize: "17px",fontWeight:700 }}>Journey</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="ranking" eventKey="link-4" style={{ fontSize: "17px",fontWeight:700 }}>
                                Ranking
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="socialmedia" eventKey="link-5" style={{ fontSize: "17px",fontWeight:700 }}>
                                Social Media
                                </Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <div>
                                <Outlet />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
