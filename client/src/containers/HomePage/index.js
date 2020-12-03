import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Navbar from "../../components/Navbar";
import "./style.css";


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero backgroundImage="https://www.maxim.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTYyNjIzMzE0MjgyNDIzMzM2/gettyimages-684757538.webp">
        <h2>Let's choose our next restaurant!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Stuff 'd!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              
            </p>
            <p>
              We've all been there: You and your significant other are hungry 
              but can't agree on a place to eat. <i>Stuff'd</i> makes it easy!
              Instead of listing off dozens of restaurants or searching for hours
              to find a restaurant you are both in the mood for, simply swipe through
              a list of restaurants nearby! Swiping left is a "NO!", swiping right
              is an "Ohhhh yeah". Once you both swipe right on the same restaurant, <i>Stuff'd</i> will notify you of your match, and just like that you've
              agreed on a place to eat in no time! What are you waiting for? Visit the
              discover page to start swiping. 
            </p>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default HomePage;
