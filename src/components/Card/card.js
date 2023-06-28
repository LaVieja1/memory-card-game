import React from "react";

import './card.css';

const Card = ({ gtaCharacter, handleCardClick }) => {
    return (
        <div className="card-wrapper" onClick={handleCardClick}>
            <img className="image" src={gtaCharacter.image} alt={gtaCharacter.name} />
            <p className="name">{gtaCharacter.name}</p>
        </div>
    )
}

export default Card;