import "../../App.css";
import React from 'react';
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Card from 'react-bootstrap/Card';

const ocean = () => {
  return (
    <div>
      <Navigation/>
      <Header/>
      
    <Card className="bg-dark text-white" style={{margin:"15px"}}>
      <Card.Img src="https://oceanbeachsandiego.com/sites/default/files/styles/768x768/public/d7/photos/20161010_181008_hdr.jpg?itok=2SOSzivJ" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title style={{textAlign:"center"}}>OCEAN BEACH <br></br><br></br> 32.7495° N, 117.2470° W</Card.Title>
        <Card.Text>
          <br></br>
          <div><strong>Address:</strong> <p> Ocean Beach, CA 92107 </p></div>
          <div><strong>Hours of Operation:</strong> <p>24 hours</p></div>
          <div><strong>Parking:</strong> <p>Street Parking | Free Parking in Lot</p></div>
          <div><strong>Facilities & Amenities:</strong> <p>Restrooms | Outdoor Shower | Lawns and Open Space </p></div>
          <div><strong>Local Attractions:</strong> <p>Surfing | Swimming | Shopping | Dining</p></div>
          <div><strong>Dog Friendly:</strong> <p>Very Dog Friendly City | The only 24 hour Leash-free Dog Beach </p></div>
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
      
    </Card>
      
    </div>
    
  )
}

export default ocean