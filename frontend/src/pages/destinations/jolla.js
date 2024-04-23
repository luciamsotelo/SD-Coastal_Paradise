import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

const LaJolla = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Row>
      <Col md={6} style={{ marginBottom: "15px" }}>
          <Card className="bg-dark text-white" style={{ margin: "15px", height: "100%" }}>
            <Card.Img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/e4/45/74.jpg" alt="Card image" style={{ height: "100%" }} />
            <Card.ImgOverlay>
              <Card.Title style={{ textAlign: "center", marginTop: "40%" }}>LA JOLLA SHORES <br /><br /> 32.8582° N, 117.2561° W</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-dark text-white" style={{ margin: "15px", height: "100%" }}>
          <Card.Body style={{ marginBottom: "30px"}}>
              <Card.Title style={{ textAlign: "center" }}>Details</Card.Title>
              <Card.Text>
                <div><strong>Address:</strong> <p> La Jolla, CA 92037</p></div>
                <div><strong>Hours of Operation:</strong> <p>24 hours</p></div>
                <div><strong>Parking:</strong> <p>Paid Parking available in lots adjacent to Beach | Limited Free Street Parking and Fills up Quick</p></div>
                <div><strong>Facilities & Amenities:</strong> <p>Restrooms | Outdoor Shower | Picnic Areas and Grassy Areas for Picnicking | Rental Shops for Kayaking, Snorkeling, and Stand-up Paddleboarding</p></div>
                <div><strong>Local Attractions:</strong> <p>Scenic Cove with Gentle Waves, Perfect for Swimming, Snorkeling and Beginner Surfing | Kellogg Park | Scripps Pier | Birch Aquarium</p></div>
                <div><strong>Dog Friendly:</strong> <p>Dogs are allowed on the Beach before 9am and after 4pm | Dogs must be leashed </p></div>
              </Card.Text>
              <Link to="/beaches" className="btn btn-info" style={{ textAlign: "center", display: "block", padding: "10px" }}>Explore More Beaches</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default LaJolla;
