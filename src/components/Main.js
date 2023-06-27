import React, { useState, useEffect } from "react";

import Scoreboard from "./Scoreboard/scoreboard";

const Main = () => {
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