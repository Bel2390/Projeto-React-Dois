import React, { useState } from "react";
import "./App.css";

function App() {
  const [displayText, setDisplayText] = useState("");

  function playSound(id, name) {
    const audio = document.getElementById(id);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setDisplayText(name);
    }
  }

  return (
    <div id="drum-machine">
      <div id="display">{displayText}</div>

      {/* Container para organizar os botões */}
      <div className="drum-container">
        <button className="drum-pad" id="heater-1" onClick={() => playSound("Q", "Heater 1")}>
          Q
          <audio className="clip" id="Q" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio>
        </button>

        <button className="drum-pad" id="heater-2" onClick={() => playSound("W", "Heater 2")}>
          W
          <audio className="clip" id="W" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></audio>
        </button>

        <button className="drum-pad" id="heater-3" onClick={() => playSound("E", "Heater 3")}>
          E
          <audio className="clip" id="E" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio>
        </button>

        <button className="drum-pad" id="heater-4" onClick={() => playSound("A", "Heater 4")}>
          A
          <audio className="clip" id="A" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></audio>
        </button>

        <button className="drum-pad" id="clap" onClick={() => playSound("S", "Clap")}>
          S
          <audio className="clip" id="S" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"></audio>
        </button>

        <button className="drum-pad" id="open-hh" onClick={() => playSound("D", "Open HH")}>
          D
          <audio className="clip" id="D" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></audio>
        </button>

        <button className="drum-pad" id="kick-hat" onClick={() => playSound("Z", "Kick & Hat")}>
          Z
          <audio className="clip" id="Z" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"></audio>
        </button>

        <button className="drum-pad" id="kick" onClick={() => playSound("X", "Kick")}>
          X
          <audio className="clip" id="X" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"></audio>
        </button>

        <button className="drum-pad" id="closed-hh" onClick={() => playSound("C", "Closed HH")}>
          C
          <audio className="clip" id="C" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></audio>
        </button>
      </div>
    </div>
  );
}

export default App;
