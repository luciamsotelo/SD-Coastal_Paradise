import "../../App.css";
import React from 'react';
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Card from 'react-bootstrap/Card';
import Footer from "../../components/footer";

const imperial = () => {
  return (
    <div>
      <Navigation/>
      <Header/>
      
      
    <Card className="bg-dark text-white" style={{margin:"15px"}}>
      <Card.Img src="https://www.imperialbeachca.gov/ImageRepository/Document?documentID=84" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title style={{textAlign:"center"}}>IMPERIAL BEACH <br></br><br></br> 32.5839° N, 117.1131° W</Card.Title>
        <Card.Text>
          <br></br>
          <div><strong>Address:</strong> <p> Imperial Beach, CA 91932 </p></div>
          <div><strong>Hours of Operation:</strong> <p>7am to 10pm</p></div>
          <div><strong>Parking:</strong> <p>Street Parking | Lot Parking (price varies)</p></div>
          <div><strong>Facilities & Amenities:</strong> <p>Restrooms | Outdoor Shower | Shops and Dining | Lawns and Open Space | Outdoor Gym Equipment</p></div>
          <div><strong>Local Attractions:</strong> <p>Imperial Beach Pier | Tijuana River National Estuary | Veterans Park</p></div>
          <div><strong>Dog Friendly:</strong> <p>Very Dog Friendly City | Dogs are allowed in designated areas of the beach and leashed</p></div>
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
      <Footer />
    </div>
    
    
  )
}

export default imperial