// Importing necessary modules and components
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from 'framer-motion';
import "./Services.scss";
import serviceData from "../assets/data/serviceData";


const Services = () => {
    return (
        // The section element with the "services" class to contain the service items
        <section className="services">
            <Container style={{display: "flex", alignItems:"center", justifyContent:"center"}}>
                <Row style={{display: "flex", marginTop: "30px"}}>
                {/* Looping through the serviceData array to display service items */}
                {serviceData.map((item, index) => (
                    <Col lg="3" md="4" key={index}>
                    {/* Applying Framer Motion animation to the service item */}
                    {/* Framer Motion's "whileHover" prop scales up the element on hover */}
                        <motion.div whileHover={{ scale: 1.1 }} className="service__item" style={{ background: `${item.bg}` }}>
                            <span>
                                {/* Rendering the service icon using the CSS class from the serviceData */}
                                <i className={item.icon}></i>
                            </span>
                            <div>
                                {/* Displaying the service title and subtitle */}
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </div>
                        </motion.div>
                    </Col>
                ))}
                </Row>
            </Container>
        </section>
    );
};

export default Services;
