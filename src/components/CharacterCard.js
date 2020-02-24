import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";


export default function CharacterCard({ character }) {
  
  return (
    <div>
      <Card>
        <CardImg src={character.image} alt="Character image" />
        <CardBody>
          <CardTitle>
            <h1>{character.name}</h1>
          </CardTitle>
            <CardSubtitle>
              <span>Status: </span>
              <p>{character.status}</p>
            </CardSubtitle>
            <CardSubtitle>
              <span>Gender: </span>
              <p>{character.gender}</p>
            </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
  
  // <span>todo: character</span>;
}
