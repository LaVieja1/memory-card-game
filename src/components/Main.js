import React, { useState, useEffect } from "react";

import Scoreboard from "./Scoreboard/scoreboard";
import CardsGrid from "./CardsGrid/cardsgrid";
import { capitalizeFirstLetter, shuffleArray, randomHero } from './helpers';

import './Main.css';

const Main = () => {
    const SUPERHEROS_AMOUNT = 12;
    const [superheros, setSuperheros] = useState([]);
    const [clickedSupeheros, setClickedSuperheros] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    useEffect(() => {
        const loadCards = async () => {
            setSuperheros(shuffleArray(await fetchSuperheros(SUPERHEROS_AMOUNT)));
        }

        loadCards();
    }, []);

    const fetchSuperheros = async (amount) => {
        const superheros = [];

        for (let i = 1; i <= amount; i++) {
            const superheroUrl = `https://www.superheroapi.com/api.php/6416329678425992/${randomHero()}`;
            const response = await fetch(superheroUrl);
            const superhero = await response.json();
            const id = superhero.id;
            const name = capitalizeFirstLetter(superhero.name);
            const image = superhero.image;
            superheros.push({ id, name, image });
        }

        return superheros;
    }

    const handleCardClick = (e) => {
        const superheroName = e.target.parentNode.lastChild.textContent;
        playRound(superheroName);
        setSuperheros(shuffleArray(superheros));
    }

    const playRound = (superheroName) => {
        if (clickedSupeheros.includes(superheroName)) {
            resetGame();
        } else {
            const newScore = currentScore + 1;
            if (newScore > bestScore) setBestScore(newScore);
            setCurrentScore(newScore);
            setClickedSuperheros((prevState) => [...prevState, superheroName]);
        }
    };

    const resetGame = () => {
        setClickedSuperheros([]);
        setCurrentScore(0);
    }

    return (
        <main className="main">
            <Scoreboard
                currentScore={currentScore}
                bestScore={bestScore}
            />
            <CardsGrid
                superheros={superheros}
                handleCardClick={handleCardClick}
            />
        </main>
    )
}

export default Main;