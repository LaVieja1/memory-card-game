import React from "react";

import './scoreboard.css';

const Scoreboard = ({ currentScore, bestScore }) => {
    return (
        <div className="scoreboard-wrapper">
            <div className="score current-score">Puntuación actual: {currentScore}</div>
            <div className="score best-score">Mejor puntuación: {bestScore}</div>
        </div>
    )
}

export default Scoreboard;