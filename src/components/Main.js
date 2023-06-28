import React, { useState, useEffect } from "react";

import Scoreboard from "./Scoreboard/scoreboard";
import CardsGrid from "./CardsGrid/cardsgrid";

const Main = () => {
    const SUPERHEROS_AMOUNT = 12;
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return (
        <main className="main">
            <Scoreboard
                currentScore={currentScore}
                bestScore={bestScore}
            />
        </main>
    )
}

export default Main;