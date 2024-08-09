import { useState } from "react";

import Square from "./Square";
import Info from "./Info";
import Instructions from "./Instructions";

import "./Style.css";

export default function Grid({
  secondPlayerName,
  firstPlayerName,
  mountModal,
  hasGameStarted,
}) {
  const [nextIsCircle, setNextIsCircle] = useState(true);
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [didAnyoneWin, setDidAnyOneWin] = useState(false);
  const [playerScores, setPlayerScores] = useState([0, 0]);
  const [moves, setMoveCount] = useState(0);
  const handleSquareClick = (e, idx) => {
    e.preventDefault();
    if (!didAnyoneWin && hasGameStarted && grid[idx] == null) {
      let currVal;
      nextIsCircle ? (currVal = 1) : (currVal = 2);
      let newGrid = [...grid];
      newGrid[idx] = currVal;
      setGrid(newGrid);
      setNextIsCircle(!nextIsCircle);
      setMoveCount(moves + 1);
      checkWin(newGrid, !nextIsCircle);
      if (moves + 1 == 9) {
        resetTheGame();
      }
    }
  };
  const resetTheGame = () => {
    setTimeout(() => {
      setGrid(Array(9).fill(null));
      setDidAnyOneWin(false);
      setNextIsCircle(true);
      setMoveCount(0);
    }, 2500);
  };
  const checkWin = (newGrid, nextIsCircleFlag) => {
    let winScenarios = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const winScenario of winScenarios) {
      let firstSqVal = newGrid[winScenario[0]];
      if (
        firstSqVal != null &&
        newGrid[winScenario[1]] === firstSqVal &&
        newGrid[winScenario[2]] === firstSqVal
      ) {
        setDidAnyOneWin(true);
        let playerScoreCopy = [...playerScores];
        if (nextIsCircleFlag) {
          playerScoreCopy[1] += 1;
        } else {
          playerScoreCopy[0] += 1;
        }
        setPlayerScores(playerScoreCopy);
        resetTheGame();
        break;
      }
    }
  };
  return (
    <>
      <Info
        firstPlayerName={firstPlayerName}
        secondPlayerName={secondPlayerName}
        playerScores={playerScores}
      />

      <div id="grid">
        {grid.map((sq, idx) => (
          <Square
            value={grid[idx]}
            key={idx}
            idx={idx}
            handleSquareClick={handleSquareClick}
          />
        ))}
      </div>
      <Instructions
        hasGameStarted={hasGameStarted}
        mountModal={mountModal}
        didAnyoneWin={didAnyoneWin}
        firstPlayerName={firstPlayerName}
        secondPlayerName={secondPlayerName}
        nextIsCircle={nextIsCircle}
        moves={moves}
      />
    </>
  );
}
