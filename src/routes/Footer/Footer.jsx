import React from "react";
// Style Import
import "./Footer.styles.scss";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
// Router Dom
import { Link } from "react-router-dom";

const Footer = () => {
    // Get the current year
    const year = new Date().getFullYear();
    return (
        // Footer section with the 'footer' class
        <footer className="footer">
        <Container>
            <Row style={{display: "flex", paddingLeft: "260px"}}>
            {/* About */}
                <Col lg="4" className="mb-4" md="6">
                    <div className="logo">
                        <div>
                            <h1 className="text-white">MY-EKART</h1>
                        </div>
                    </div>
                    <p className="footer__text mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Temporibus assumenda est dicta nihil qui magni dolorem fuga
                        necessitatibus sunt enim.
                    </p>
                </Col>

                {/* Category */}
                <Col lg="3" md="3" className="mb-4">
                    <div className="footer__quick-link">
                        <h4 className="quick__links-title">Top Categories</h4>
                        <ListGroup className="mb-3">
                            <ListGroupItem className="ps-0 border-0">
                                <Link to="#">Mobile Phone</Link>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to="#">Modern Sofa</Link>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to="#">Arm Chair</Link>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to="#">Smart Watches</Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>

                {/* Links */}
                <Col lg="2" md="3" className="mb-4">
                    <div className="footer__quick-link">
                        <h4 className="quick__links-title">Useful Links</h4>
                        <ListGroup className="mb-3">
                            <ListGroupItem className="ps-0 border-0">
                                <Link to="/allProds">Shop</Link>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to="/cart">Cart</Link>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to="#">Privacy Policy</Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>

                {/* Contacts */}
                <Col lg="3" md="4">
                    <div className="footer__quick-link">
                        <h4 className="quick__links-title">Contact</h4>
                        <ListGroup className="footer__contact">
                            <ListGroupItem className="ps-0 border-0 d-flex gap-2">
                                <span>
                                    <i class="ri-map-pin-line"> 123, Pune, India</i>
                                </span>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                <span>
                                    <i class="ri-phone-line"> +1111111111</i>
                                </span>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0 d-flex  gap-2">
                                <span>
                                    <i class="ri-mail-line"> xyz@mail.com</i>
                                </span>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>

            </Row>
                {/* Bottom section */}
                <Col lg="12">
                    {/* Bottom section */}
                    <p className="footer__copyright">
                    Copyright {year} developed by - Asadullah Shaikh. All rights
                    reserved.
                    </p>
                </Col>
        </Container>
        </footer>
    );
};

export default Footer;
