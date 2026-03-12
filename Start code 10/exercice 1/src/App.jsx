import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState("");

  const getScoreBarStyle = () => {
    const numericScore = Number(score) || 0;
    const scoreWidth = `${numericScore * 10}%`;

    let scoreColor = "#f3bc47";
    if (numericScore <= 3) {
      scoreColor = "#e74c3c";
    } else if (numericScore <= 7) {
      scoreColor = "#f3bc47";
    } else {
      scoreColor = "#2ecc71";
    }

    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <div className="score-panel">
      <h1>My Score in React</h1>

      <small>Enter a score (0 to 10): </small>

      <input
        type="number"
        min="0"
        max="10"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      <div className="score-bar">
        <div className="score-bar-value" style={getScoreBarStyle()}></div>
      </div>
    </div>
  );
}