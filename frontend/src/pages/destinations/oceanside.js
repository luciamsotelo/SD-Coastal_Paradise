import "../../App.css";
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Card from 'react-bootstrap/Card';
import Footer from "../../components/footer";

const oceanside = () => {
  return (
    <div>
      <Navigation/>
      <Header/>
      
    <Card className="bg-dark text-white" style={{margin:"15px"}}>
      <Card.Img src="https://patch.com/img/cdn20/shutterstock/54855/20230614/073927/styles/patch_image/public/shutterstock-1053673922___14193112108.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title style={{textAlign:"center"}}>OCEANSIDE BEACH <br></br><br></br> 33.2052° N, 117.3945° W</Card.Title>
        <Card.Text>
          <br></br>
          <div><strong>Address:</strong> <p>Oceanside, CA 92054</p></div>
          <div><strong>Hours of Operation:</strong> <p>24 hours</p></div>
          <div><strong>Parking:</strong> <p>Paid Parking Available in lots along Pacific Beach| Limited Street Parking</p></div>
          <div><strong>Facilities & Amenities:</strong> <p>Restrooms | Outdoor Shower | Picnic Areas and Tables Overlooking the Ocean | Rental Shops for Surfers and Boogie Boarders | Volleyball</p></div>
          <div><strong>Local Attractions:</strong> <p>Sandy Shores Ideal for Sunbathing | Beach Volleyball, Sandcastle Building | Oceanside Pier | Oceanside Harbor with Marina, Shops and Restaurants | Boat Rentals | Whale Watching Tours | Historic Train Station </p></div>
          <div><strong>Dog Friendly:</strong> <p>Dogs are allowed on Beach before 9am to 6pm | Dogs must be leashed </p></div>
          </Card.Text>
          <Link to="/beaches" className="btn btn-info" style={{margin:"60px 825px 10px 825px", textAlign:"center", display:"block", padding:"10px"}}>Explore More Beaches</Link> {/* Link to navigate back to beaches page */}
        </Card.ImgOverlay>
      </Card>

        <Footer />
      
    </div>
    
  )
}

export default oceanside