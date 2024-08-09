import { useState } from "react";
import "./Style.css";

export default function Modal({ handleNamesInput }) {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const handleFirstNameInput = (e) => {
    e.preventDefault();
    let firstNa = e.target.value;
    firstNa.trim();
    setFirstName(firstNa);
  };
  const handleSecondNameInput = (e) => {
    e.preventDefault();
    let secondNa = e.target.value;
    secondNa.trim();
    setSecondName(secondNa);
  };
  return (
    <div id="modal">
      <div id="modal-content">
        <h2>Enter Player Name</h2>
        <form>
          <label htmlFor="player1">Player 1</label>
          <input
            type="text"
            id="player1"
            name="Player 1"
            placeholder="Coco"
            maxLength="10"
            required
            value={firstName}
            onChange={handleFirstNameInput}
          />
          <label htmlFor="player2">Player 2</label>
          <input
            type="text"
            id="player2"
            name="Player 2"
            placeholder="Mama"
            maxLength="10"
            required
            value={secondName}
            onChange={handleSecondNameInput}
          />
          <input
            type="submit"
            value="Start Game"
            onClick={(e) => {
              e.preventDefault();
              handleNamesInput(firstName, secondName);
            }}
          />
        </form>
      </div>
    </div>
  );
}
