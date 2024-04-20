import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

const Mission = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Row>
        <Col md={6}>
          <Card className="bg-dark text-white" style={{ margin: "15px", height: "100%" }}>
            <Card.Img src="https://82365a9c799400a5d0fb-9273b35808336b1a8f5ab2f5697faad3.ssl.cf1.rackcdn.com/_comfort/media/belmont-park-roller-coaster-6019a1ba7016d.jpg" alt="Card image" style={{ height: "100%" }} />
            <Card.ImgOverlay>
              <Card.Title style={{ textAlign: "center", marginTop: "40%" }}>MISSION BEACH <br /><br /> 32.7707° N, 117.2514° W</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-dark text-white" style={{ margin: "15px", height: "100%" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Details</Card.Title>
              <Card.Text>
                <div><strong>Address:</strong> <p> Mission Beach, CA 92109</p></div>
                <div><strong>Hours of Operation:</strong> <p>Open 24/7</p></div>
                <div><strong>Parking:</strong> <p>Paid Parking Lots available along Mission Blvd | Limited Free Parking (especially during peak hours)</p></div>
                <div><strong>Facilities & Amenities:</strong> <p>Restrooms | Outdoor Shower | Rental Shops and Dining | Picnic Areas and Fire Pits </p></div>
                <div><strong>Local Attractions:</strong> <p>Famous Boardwalk | Belmont Park | Volleyball Courts | Gym with Ocean View</p></div>
                <div><strong>Dog Friendly:</strong> <p>Dog-friendly hours vary | Dogs must be leashed at all times</p></div>
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

export default Mission;
