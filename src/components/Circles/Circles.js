import React from "react";

const Circles = ({ active, isPlaying, circleClicked, count }) => {
  return (
    <div className="center">
      <div className="circles" onClick={circleClicked}>
        {count.map((_, i) => (
          <span
            key={i}
            data-testid={i}
            className={`circle${isPlaying && active === i ? " active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Circles;
