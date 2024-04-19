import "../../App.css";
import React from 'react';
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Card from 'react-bootstrap/Card';
import Footer from "../../components/footer";

const coronado = () => {
  return (
    <div>
      <Navigation/>
      <Header/>
      
    <Card className="bg-dark text-white" style={{margin:"15px"}}>
      <Card.Img src="https://coronadotimes.com/wp-content/uploads/import/photos/1001-2000/1140-nadonov13016.JPG" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title style={{textAlign:"center"}}>CORONADO BEACH <br></br><br></br> 32.6848° N, 117.1878° W</Card.Title>
        <Card.Text>
          <br></br>
          <div><strong>Address:</strong> <p>Coronado, CA 92118 </p></div>
          <div><strong>Hours of Operation:</strong> <p>6am to sunset</p></div>
          <div><strong>Parking:</strong> <p>Street Parking Only</p></div>
          <div><strong>Facilities & Amenities:</strong> <p>Restrooms | Outdoor Shower | Shops and Dining | Close to Military Base</p></div>
          <div><strong>Local Attractions:</strong> <p>Segway Tour of Island | Ferry Landing | Lambs Theatre | Spreckels Park | Vietnam Unit Memorial Monument</p></div>
          <div><strong>Dog Friendly:</strong> <p>Very Dog Friendly City | They have a Dog Beach (located adjacent to North Island Navy Base)</p></div>
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
      
    </Card>
    
        <Footer />
    </div>
    
  )
}

export default coronado