import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        🎬 CineVerse
      </div>

      <nav>
        <button onClick={() => navigate("/")}>Home</button>
      </nav>
    </header>
  );
}

export default Header;