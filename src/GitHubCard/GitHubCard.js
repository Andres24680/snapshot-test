

import React from "react"
import Card from "react-bootstrap/Card"
import MickeyMouse from './Batman.png'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        {/* Use your GitHub info instead, but Mickey Mouse is used as an example */}
        <Card.Img variant="top" src='https://w7.pngwing.com/pngs/22/790/png-transparent-batman-family-catwoman-robin-comics-batman-heroes-superhero-comic-book-thumbnail.png' />
        {/* Source: https://en.wikipedia.org/wiki/Mickey_Mouse */}
        <Card.Body>
            <Card.Title>Batman</Card.Title>
            <Card.Text>
            I am Gothoms protector 
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard