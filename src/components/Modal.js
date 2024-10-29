import { useState } from "react";
const Modal = ({ handleAddPlayerNames }) => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const handleNameInput = (e, flag) => {
    e.preventDefault();
    if (flag) {
      setFirstName(e.target.value);
    } else {
      setSecondName(e.target.value);
    }
  };
  return (
    <div id="modal">
      <div id="modal-content">
        <form>
          <h2>Enter Player Names</h2>
          <input
            placeholder="Swati"
            value={firstName}
            onChange={(e) => handleNameInput(e, true)}
          ></input>
          <input
            placeholder="Tanush"
            onChange={(e) => handleNameInput(e, false)}
            value={secondName}
          ></input>
          <input
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleAddPlayerNames(firstName, secondName);
            }}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Modal;
