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
      <h1> <image src="./logo.png" > </image>Stuff 'd</h1> 
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
              Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum
              porttitor. Sed malesuada molestie velit ac viverra. Quisque a
              ullamcorper purus. Curabitur luctus mi ac mi hendrerit semper.
              Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
              nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue
              dictum egestas. Aliquam blandit mi eu urna scelerisque, vitae
              volutpat ligula ultricies. Maecenas vel porta augue. Fusce mauris
              ex, dignissim et lacinia ut, tempus eget nibh.
            </p>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default HomePage;
