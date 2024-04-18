import "../../App.css";
import React from 'react';
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Card from 'react-bootstrap/Card';

const lajolla = () => {
  return (
    <div>
      <Navigation/>
      <Header/>
      
    <Card className="bg-dark text-white" style={{margin:"15px"}}>
      <Card.Img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/e4/45/74.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title style={{textAlign:"center"}}>LA JOLLA SHORES <br></br><br></br> 32.8582° N, 117.2561° W</Card.Title>
        <Card.Text>
          <br></br>
          <div><strong>Address:</strong> <p> La Jolla, CA 92037</p></div>
          <div><strong>Hours of Operation:</strong> <p>24 hours</p></div>
          <div><strong>Parking:</strong> <p>Paid Parking available in lots adjacent ot Beach | Limited Free Street Parking and Fills up Quick</p></div>
          <div><strong>Facilities & Amenities:</strong> <p>Restrooms | Outdoor Shower | Picnic Areas and Grassy Areas for Picnicking | Rental Shops for Kayaking, Snorkeling, and Stand-up Paddleboarding</p></div>
          <div><strong>Local Attractions:</strong> <p>Scenic Cove with Gentle Waves, Perfect for Swimming, Snorkling and Beginner Surfing | Kellogg Park | Scrips Pier | Birch Aquarium</p></div>
          <div><strong>Dog Friendly:</strong> <p>Dogs are allowed on the on Beach before 9am and after 4pm | Dogs must be leashed </p></div>
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
      
    </Card>
      
    </div>
    
  )
}

export default lajolla