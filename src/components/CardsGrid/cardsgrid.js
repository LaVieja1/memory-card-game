import React from "react";
import Card from "../Card/card";

import './cardsgrid.css';

const CardsGrid = ({ superheros, handleCardClick }) => {
    const superheroCards = superheros.map((superhero) => (
        <Card key={superhero.id} superhero={superhero} handleCardClick={handleCardClick} />
    ))

    return <div className="cards-grid-wrapper">{superheroCards}</div>
}

export default CardsGrid;