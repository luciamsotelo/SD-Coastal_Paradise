import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

const Ocean = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Row>
        <Col md={6}>
          <Card className="bg-dark text-white" style={{ margin: "15px", height: "100%" }}>
            <Card.Img src="https://oceanbeachsandiego.com/sites/default/files/styles/768x768/public/d7/photos/20161010_181008_hdr.jpg?itok=2SOSzivJ" alt="Card image" style={{ height: "100%" }} />
            <Card.ImgOverlay>
              <Card.Title style={{ textAlign: "center", marginTop: "40%" }}>OCEAN BEACH <br /><br /> 32.7495° N, 117.2470° W</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-dark text-white" style={{ margin: "15px", height: "100%" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Details</Card.Title>
              <Card.Text>
                <div><strong>Address:</strong> <p> Ocean Beach, CA 92107 </p></div>
                <div><strong>Hours of Operation:</strong> <p>24 hours</p></div>
                <div><strong>Parking:</strong> <p>Street Parking | Free Parking in Lot</p></div>
                <div><strong>Facilities & Amenities:</strong> <p>Restrooms | Outdoor Shower | Lawns and Open Space </p></div>
                <div><strong>Local Attractions:</strong> <p>Surfing | Swimming | Shopping | Dining</p></div>
                <div><strong>Dog Friendly:</strong> <p>Very Dog Friendly City | The only 24 hour Leash-free Dog Beach </p></div>
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

export default Ocean;
