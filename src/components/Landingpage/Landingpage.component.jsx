// Import necessary modules and components
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";
import "./Landingpage.styles.scss"; // Import necessary styles
import heroImg from "../../assets/Images/hero-img.png"; // Import hero image
import Helmet from "./Helmet"; // Import Helmet component
import Services from "../../Services/Services"; // Import Services component

// Define the Landingpage component
const Landingpage = () => {
    // Getting the current year
    const year = new Date().getFullYear();

    // Render the component
    return (
        <Helmet title={"Home"}> {/* Set the page title using Helmet */}
            {/* Hero section */}
            <section className="hero__section">
                <Container style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Row style={{ display: "flex" }}>
                        <Col ig="6" md="6">
                            <div className="hero__content">
                                <p className="hero__subtitle">Trending Product in {year}</p>
                                <h2>Make Your Outfit Minimalistic & Modern</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque asperiores a veritatis repellendus fugit in
                                    ducimus non beatae nobis dignissimos.
                                </p>
                                <br />

                                {/* Button with framer-motion animation and Link to the Shop page */}
                                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                                    <Link to="/allProds">Shop Now</Link>
                                </motion.button>
                            </div>
                        </Col>

                        <Col ig="6" md="6">
                            {/* Image in the hero section */}
                            <div className="hero__img">
                                <img src={heroImg} alt="heroImg" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Services section */}
            <Services /> {/* Render the Services component */}
        </Helmet>
    );
};

// Export the Landingpage component as the default export
export default Landingpage;