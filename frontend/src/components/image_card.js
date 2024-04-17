import Card from 'react-bootstrap/Card';

function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="https://www.imperialbeachca.gov/ImageRepository/Document?documentID=84" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Imperial Beach</Card.Title>
        <Card.Text>
        Imperial Beach is home to 370 species of birds and considered one of the best birding areas in Southern California. Visit the Tijuana Estuary Visitor Center for maps of public trail systems and guided tours of the area.
        </Card.Text>
        <Card.Text>32.5839° N, 117.1131° W</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;