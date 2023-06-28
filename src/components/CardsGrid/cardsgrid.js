import React from "react";
import Card from "../Card/card";

import './cardsgrid.css';

const CardsGrid = ({ superheroCharacters, handleCardClick }) => {
    const superheroCards = superheroCharacters.map((superhero) => (
        <Card key={superhero.id} superhero={superhero} handleCardClick={handleCardClick} />
    ))

    return <div className="cards-grid-wrapper">{superheroCards}</div>
}

export default CardsGrid;