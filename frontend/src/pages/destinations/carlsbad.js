import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

const Carlsbad = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Row>
      <Col md={6} style={{ marginBottom: "15px" }}>
          <Card className="bg-dark text-white" style={{ margin: "15px", height: "100%" }}>
            <Card.Img src="https://media.istockphoto.com/id/466290466/photo/california-beach-sunset-bright-orange-and-pink.jpg?s=612x612&w=0&k=20&c=VP8rqlszfxrVKK3EwKXlhuUSRi48Q63xIxmJOtoYVSo=" alt="Card image" style={{ height: "100%" }} />
            <Card.ImgOverlay>
              <Card.Title style={{ textAlign: "center", marginTop: "40%" }}>CARLSBAD BEACH <br /><br /> 33.1543° N, 117.3510° W</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-dark text-white" style={{ margin: "15px", height: "100%" }}>
            <Card.Body style={{ marginBottom: "30px"}}>
              <Card.Title style={{ textAlign: "center" }}>Details</Card.Title>
              <Card.Text>
                <div><strong>Address:</strong> <p>Carlsbad, CA 92008</p></div>
                <div><strong>Hours of Operation:</strong> <p>24 hours</p></div>
                <div><strong>Parking:</strong> <p>Paid Parking Available Carlsbad Boulevard | Limited Street Parking</p></div>
                <div><strong>Facilities & Amenities:</strong> <p>Restrooms | Outdoor Shower | Rental Shops Offering Equipment for Surfing, Boogie Boarding and Beach Games</p></div>
                <div><strong>Local Attractions:</strong> <p>Family-Friendly Atmosphere | Scenic Coastal Trails for Walking, Jogging, and Cycling | Shops and Restaurants | Art Galleries | Legoland</p></div>
                <div><strong>Dog Friendly:</strong> <p>Dogs are allowed on Beach all Day from September 15th to June 15th | Dogs must be leashed </p></div>
              </Card.Text>
              <Link to="/beaches" className="btn btn-info" style={{ textAlign: "center", display: "block", padding: "10px" }}>Explore More Beaches</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default Carlsbad;
