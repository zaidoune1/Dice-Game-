import React, { useEffect, useState } from "react";
import ViewHandelDice from "./ViewHandelDice";

function HandelDice() {
  const [diceValues, setDiceValues] = useState([1, 1]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [scores, setScores] = useState([0, 0]);
  const [winner, setWinner] = useState(null);

  const rollDice = () => {
    if (!winner) {
      const newDiceValues = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
      ];
      setDiceValues(newDiceValues);

      const totalScore = newDiceValues[0] + newDiceValues[1];
      const updatedScores = [...scores];
      updatedScores[currentPlayer - 1] += totalScore;
      setScores(updatedScores);

      if (updatedScores[currentPlayer - 1] >= 50) {
        setWinner(currentPlayer);
      } else {
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
      }
    }
  };

  const resetGame = () => {
    setDiceValues([1, 1]);
    setCurrentPlayer(1);
    setScores([0, 0]);
    setWinner(null);
  };

  return (
    <div className="main">
      <ViewHandelDice
        scores={scores}
        winner={winner}
        currentPlayer={currentPlayer}
        diceValues={diceValues}
        rollDice={rollDice}
        resetGame={resetGame}
      />
    </div>
  );
}

export default HandelDice;
