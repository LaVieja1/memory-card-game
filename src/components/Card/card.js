import React from "react";

import './card.css';

const Card = ({ superheroCharacter, handleCardClick }) => {
    return (
        <div className="card-wrapper" onClick={handleCardClick}>
            <img className="image" src={superheroCharacter.image} alt={superheroCharacter.name} />
            <p className="name">{superheroCharacter.name}</p>
        </div>
    )
}

export default Card;