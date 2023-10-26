import React from "react";

const diceImgs = [
  "https://irem.univ-rouen.fr/sites/irem.univ-rouen.fr/files/groupes/Images_Mentales_et_TICE/jean-luc.de-seegner%40ac-rouen.fr/Programmation_au_college/D6_-_1.png",
  "https://irem.univ-rouen.fr/sites/irem.univ-rouen.fr/files/groupes/Images_Mentales_et_TICE/jean-luc.de-seegner%40ac-rouen.fr/Programmation_au_college/D6_-_2.png",
  "https://irem.univ-rouen.fr/sites/irem.univ-rouen.fr/files/groupes/Images_Mentales_et_TICE/jean-luc.de-seegner%40ac-rouen.fr/Programmation_au_college/D6_-_3.png",
  "https://irem.univ-rouen.fr/sites/irem.univ-rouen.fr/files/groupes/Images_Mentales_et_TICE/jean-luc.de-seegner%40ac-rouen.fr/Programmation_au_college/D6_-_4.png",
  "https://irem.univ-rouen.fr/sites/irem.univ-rouen.fr/files/groupes/Images_Mentales_et_TICE/jean-luc.de-seegner%40ac-rouen.fr/Programmation_au_college/D6_-_5.png",
  "https://irem.univ-rouen.fr/sites/irem.univ-rouen.fr/files/groupes/Images_Mentales_et_TICE/jean-luc.de-seegner%40ac-rouen.fr/Programmation_au_college/D6_-_6.png",
];

function ViewHandelDice({
  scores,
  winner,
  currentPlayer,
  diceValues,
  rollDice,
  resetGame,
}) {
  console.log(currentPlayer);
  return (
    <>
      <div className="dices-main">
        <div className="dice">
          <div>
            <h3>Player 1</h3>
            <p className="score">Score: {scores[0]}</p>
          </div>

          {currentPlayer === 1 && (
            <img
              className="img-state"
              src="https://www.playmeo.com/wp-content/uploads/2017/09/0325_double-dice-game_PNG.png"
              alt="img"
              width={100}
              height={100}
            />
          )}
        </div>

        <div className="dice">
          {currentPlayer === 2 && (
            <img
              className="img-state"
              src="https://www.playmeo.com/wp-content/uploads/2017/09/0325_double-dice-game_PNG.png"
              alt="img"
              width={100}
              height={100}
            />
          )}
          <div>
            <h3>Player 2</h3>
            <p className="score">Score: {scores[1]}</p>
          </div>
        </div>
      </div>
      {winner ? (
        <h2 className="winner-animation">Player {winner} wins!</h2>
      ) : (
        <img
          className="dice-image"
          src="https://www.bonendroi.com/1279-medium_default/de-en-bois-6-x-6-cm.jpg"
          alt="img"
          width={100}
          height={100}
        />
      )}

      <div className="dice-main-container"></div>
      <h1 className="title-dice-game">Game of Dice</h1>

      <div className="dices-imgs">
        <img
          className="dice-image"
          src={diceImgs[diceValues[0] - 1]}
          alt={`Dice 1`}
        />
        <img
          className="dice-image"
          src={diceImgs[diceValues[1] - 1]}
          alt={`Dice 2`}
        />
      </div>

      <div className="dice-bloc">
        {!winner && (
          <button className="btn btn-roll-dice" onClick={rollDice}>
            Roll Dice
          </button>
        )}
        <button className="btn btn-roll-dice" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </>
  );
}

export default ViewHandelDice;
