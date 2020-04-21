import React, { useState } from "react";
import Circles from "../Circles/Circles";
import "./App.css";

function App() {
  const [active, setActive] = useState(null);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const selectRandomCircle = () => {
    setActive(Math.floor(Math.random() * 36) + 0);
  };
  const playGame = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      return;
    }
    selectRandomCircle();
    setIsPlaying(true);
    setScore(0);
  };
  const stopGame = (e) => {
    e.stopPropagation();
    alert(`Your final score is ${score}`);
    setScore(0);
    setIsPlaying(false);
  };
  const circleClicked = (e) => {
    e.stopPropagation();
    const targetElement = e.target;
    if (targetElement.tagName !== "SPAN" || !isPlaying) {
      return;
    }
    if (targetElement.classList.contains("active")) {
      setScore(score + 1);
      selectRandomCircle();
    } else {
      setScore(score - 1);
    }
  };
  return (
    <div className="App">
      <h3>Hit the circle</h3>
      <p>Test your skill how many circles you can hit?</p>

      <div>
        Score <input type="text" data-testid="score" readOnly value={score} />
      </div>
      <hr />
      <Circles
        count={new Array(36).fill(1)}
        active={active}
        isPlaying={isPlaying}
        circleClicked={circleClicked}
      />
      <hr />
      <div>
        <button data-testid="play" className="play" onClick={playGame}>
          Play
        </button>
        <button onClick={stopGame}>Stop</button>
      </div>

      <div className="instructions">
        <p>Instructions:</p>
        <p>
          1. Click on the circles as they are selected randomly by the computer
        </p>
        <p>2. 1 point per hit, minus 1 per miss</p>
      </div>
    </div>
  );
}

export default App;
