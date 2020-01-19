import React from "react";
import useToggle from "./hooks/useToggle";

function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHeart, toggleIsHeart] = useToggle(false);
  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? "😊" : "🤢"}</h1>
      <h1 onClick={toggleIsHeart}>{isHeart ? "❤" : "💖"}</h1>
    </div>
  );
}

export default Toggler;
