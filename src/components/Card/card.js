import React from "react";

import './card.css';

const Card = ({ superhero, handleCardClick }) => {
    return (
        <div className="card-wrapper" onClick={handleCardClick}>
            <img className="image" src={superhero.image.url} alt={superhero.name} />
            <p className="name">{superhero.name}</p>
        </div>
    )
}

export default Card;