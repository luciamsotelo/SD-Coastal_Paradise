import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

const Coronado = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Row>
        <Col md={6}>
          <Card className="bg-dark text-white" style={{ margin: "15px", height: "100%" }}>
            <Card.Img src="https://coronadotimes.com/wp-content/uploads/import/photos/1001-2000/1140-nadonov13016.JPG" alt="Card image" style={{ height: "100%" }} />
            <Card.ImgOverlay>
              <Card.Title style={{ textAlign: "center", marginTop: "40%" }}>CORONADO BEACH <br /><br /> 32.6848° N, 117.1878° W</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-dark text-white" style={{ margin: "15px", height: "100%" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Details</Card.Title>
              <Card.Text>
                <div><strong>Address:</strong> <p>Coronado, CA 92118 </p></div>
                <div><strong>Hours of Operation:</strong> <p>6am to sunset</p></div>
                <div><strong>Parking:</strong> <p>Street Parking Only</p></div>
                <div><strong>Facilities & Amenities:</strong> <p>Restrooms | Outdoor Shower | Shops and Dining | Close to Military Base</p></div>
                <div><strong>Local Attractions:</strong> <p>Segway Tour of Island | Ferry Landing | Lambs Theatre | Spreckels Park | Vietnam Unit Memorial Monument</p></div>
                <div><strong>Dog Friendly:</strong> <p>Very Dog Friendly City | They have a Dog Beach (located adjacent to North Island Navy Base)</p></div>
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

export default Coronado;
