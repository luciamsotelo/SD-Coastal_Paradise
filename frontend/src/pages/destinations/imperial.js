import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

const Imperial = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Row>
      <Col md={6} style={{ marginBottom: "15px" }}>
          <Card className="bg-dark text-white" style={{ margin: "15px", height: "100%" }}>
            <Card.Img src="https://www.imperialbeachca.gov/ImageRepository/Document?documentID=84" alt="Card image" style={{ height: "100%" }} />
            <Card.ImgOverlay>
              <Card.Title style={{ textAlign: "center", marginTop: "40%" }}>IMPERIAL BEACH <br /><br /> 32.5839° N, 117.1131° W</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-dark text-white" style={{ margin: "15px", height: "100%" }}>
          <Card.Body style={{ marginBottom: "30px"}}>
              <Card.Title style={{ textAlign: "center" }}>Details</Card.Title>
              <Card.Text>
                <div><strong>Address:</strong> <p> Imperial Beach, CA 91932 </p></div>
                <div><strong>Hours of Operation:</strong> <p>7am to 10pm</p></div>
                <div><strong>Parking:</strong> <p>Street Parking | Lot Parking (price varies)</p></div>
                <div><strong>Facilities & Amenities:</strong> <p>Restrooms | Outdoor Shower | Shops and Dining | Lawns and Open Space | Outdoor Gym Equipment</p></div>
                <div><strong>Local Attractions:</strong> <p>Imperial Beach Pier | Tijuana River National Estuary | Veterans Park</p></div>
                <div><strong>Dog Friendly:</strong> <p>Very Dog Friendly City | Dogs are allowed in designated areas of the beach and leashed</p></div>
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

export default Imperial;
