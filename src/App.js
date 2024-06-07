import React, { useState } from 'react';
import './App.css';
import HitButton from './components/HitMeButton';


function App() {
  const [currentCard, setCurrentCard] = useState('');

  const handleHit = () => {
    const newCard = generateCard();
    setCurrentCard(newCard);
  };

  const generateCard = () => {
    const faces = [  "2",  "3", "4", "5", "6", "7","8",
      "9","10","Jack","Queen","King","Ace"
    ];
    const suits = ["Diamonds", "Hearts", "Clubs", "Spades"];

    const randomFace = faces[Math.floor(Math.random() * faces.length)]
    const randomSuit = suits[Math.floor(Math.random() * suits.length)]

    return `${randomFace} of ${randomSuit}`;
  };


  return (
    <div>
      <h1>BLACKJACK!</h1>
      <div className="hit-me-button">
      <HitButton onHit={handleHit}/>
      </div>
      <div className="cards">
        <p>{currentCard}</p>
      </div>
    </div>
  );
};

export default App;
