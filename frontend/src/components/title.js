import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Title = () => {
  return (
    <Card style={{ background: "#ffeae3" }}>
      <Card.Body>
        <h1 className="title" style={{ textAlign: "center", background: "#0095b6", fontSize: "75px", color: "#ffb79d", textShadow: "2px 5px 10px #0dba86", 
        '@media (max-width: 768px)': {
          fontSize: '50px'
        } }}>
          San Diego Coastal Paradise
        </h1>
        <p className="welcome" style={{ border: "3px solid #ffb79d", padding: "40px", fontSize: "23px", textAlign: "justify", fontFamily: "trebuchet ms",
        '@media (max-width: 768px)': {
          fontSize: '18px'
        } }}>
          Welcome to San Diego Coastal Paradise! Our app is your ultimate guide to exploring the breathtaking beaches of San Diego. From Imperial Beach to Oceanside, embark on a journey along the stunning coastline. Discover fun facts about each beach, from Coronado's Hotel del Coronado to Ocean Beach's bohemian vibe. Immerse yourself in La Jolla Shores, surf at Encinitas Beach, and enjoy the sun at Carlsbad Beach. Whether you're a local or a visitor, our app is your go-to companion for experiencing San Diego's coastal gems. Start your adventure today!
          <br />
          <br />
          New to our community? Welcome aboard! If you're ready to embark on exciting beach adventures, join our community of beach buddies by sharing your name and email. Dive into the ocean of experiences awaiting you! Already part of our crew? Welcome back! Let's continue beachcombing together and create unforgettable seaside memories!
        </p>
        <Container className="pt-3">
          <Row>
            <Col>
              <img src="https://www.prettyfluffy.com/wp-content/uploads/2022/04/Pet-Friendly-Gippsland-Pretty-Fluffy-Travel_-811.jpg" alt="dog beach" className="img-fluid" />
            </Col>
            <Col>
              <img src="https://a.cdn-hotels.com/gdcs/production167/d76/2a15eef8-7360-464c-89f2-d48953b9edcb.jpg" alt="mission beach" className="img-fluid" />
            </Col>
            <Col>
              <img src="https://live.staticflickr.com/574/33071773625_99d0c69fd9_b.jpg" alt="la jolla seals" className="img-fluid" />
            </Col>
            <Col>
              <img src="https://cdn.shopify.com/s/files/1/2516/8932/products/NewPierGold7-12-22_2000x.jpg?v=1657654002" alt="oceanside beach" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Title;
