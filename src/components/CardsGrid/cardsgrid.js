import React from "react";
import Card from "../Card/card";

import './cardsgrid.css';

const CardsGrid = ({ gtaCharacters, handleCardClick }) => {
    const gtaCards = gtaCharacters.map((gta) => (
        <Card key={gta.id} gta={gta} handleCardClick={handleCardClick} />
    ))

    return <div className="cards-grid-wrapper">{gtaCards}</div>
}

export default CardsGrid;