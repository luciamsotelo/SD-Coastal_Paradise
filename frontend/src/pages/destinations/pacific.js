import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

const Pacific = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Row>
      <Col md={6} style={{ marginBottom: "15px" }}>
          <Card className="bg-dark text-white" style={{ margin: "15px", height: "100%" }}>
            <Card.Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/39/ca/a4/crystal-pier-hotel-cottages.jpg?w=700&h=-1&s=1" alt="Card image" style={{ height: "100%" }} />
            <Card.ImgOverlay>
              <Card.Title style={{ textAlign: "center", marginTop: "40%" }}>PACIFIC BEACH <br /><br /> 32.8025° N, 117.2356° W</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-dark text-white" style={{ margin: "15px", height: "100%" }}>
          <Card.Body style={{ marginBottom: "30px"}}>
              <Card.Title style={{ textAlign: "center" }}>Details</Card.Title>
              <Card.Text>
                <div><strong>Address:</strong> <p> Pacific Beach, San Diego, CA 92109</p></div>
                <div><strong>Hours of Operation:</strong> <p>24 hours</p></div>
                <div><strong>Parking:</strong> <p>Paid Parking Available on Garnet Avenue| Limited Street Parking</p></div>
                <div><strong>Facilities & Amenities:</strong> <p>Restrooms | Outdoor Shower | Picnic Areas and Fire Pits | Rental Shops </p></div>
                <div><strong>Local Attractions:</strong> <p>Boardwalk | Crystal Pier| Surfing, paddleboarding, beach volleyball | Kate Sessions Park</p></div>
                <div><strong>Dog Friendly:</strong> <p>Dogs are allowed on the Boardwalk but not the Beach </p></div>
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

export default Pacific;
