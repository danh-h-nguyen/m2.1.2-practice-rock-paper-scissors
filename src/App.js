import React, { useState } from "react";
import "./styles.css";

function App() {
  const [result, setResult] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");

  const choices = ["ROCK", "PAPER", "SCISSORS"];

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("IT'S A TIE");
    } else if (
      (player === "ROCK" && computer === "SCISSORS") ||
      (player === "PAPER" && computer === "ROCK") ||
      (player === "SCISSORS" && computer === "PAPER")
    ) {
      setResult("YOU WIN");
    } else {
      setResult("YOU LOSE");
    }
  };

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    determineWinner(choice, randomChoice);
  };

  return (
    <div className="container">
      <h1>Rock Paper Scissors</h1>

      <div className="state">
        <div className="computerChoose">Computer choose {computerChoice}</div>
        <div className="youChoose">You choose {playerChoice}</div>
        <div className="result">Result: {result}</div>
      </div>

      <div className="button">
        <button
          onClick={() => handlePlayerChoice("ROCK")}
          className="rockButton"
        >
          Rock
        </button>
        <button
          onClick={() => handlePlayerChoice("PAPER")}
          className="paperButton"
        >
          Paper
        </button>
        <button
          onClick={() => handlePlayerChoice("SCISSORS")}
          className="scissorsButton"
        >
          Scissors
        </button>
      </div>
    </div>
  );
}

export default App;
