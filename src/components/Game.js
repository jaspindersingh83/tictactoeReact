import { useState } from "react";
import Instructions from "./Instructions";
import Info from "./Info";
import Modal from "./Modal";
import Grid from "./Grid";

const Game = () => {
  let [modalView, setModalView] = useState(false);
  let [hasGameStarted, setHasGameStarted] = useState(false);
  let [players, setPlayers] = useState([
    { name: "Player1", score: 0 },
    { name: "Player2", score: 0 },
  ]);
  const [matrix, setMatrix] = useState(Array(9).fill(null));
  const [isCircleNext, setIsCircleNext] = useState(true);
  const [hasAnyoneWon, setHasAnyoneWon] = useState(false);
  const [countOfMoves, setCountOfMoves] = useState(0);
  const handleAddPlayerNames = (firstName, secondName) => {
    let newPlayers = [...players];
    newPlayers[0].name = firstName;
    newPlayers[1].name = secondName;
    setPlayers(newPlayers);
    setModalView(false);
    setHasGameStarted(true);
  };
  const handleSquareClick = (e, idx) => {
    e.preventDefault();
    if (!hasAnyoneWon && hasGameStarted && matrix[idx] == null) {
      let newMatrix = [...matrix];
      if (isCircleNext) {
        newMatrix[idx] = 0;
      } else {
        newMatrix[idx] = 1;
      }
      checkForWin(newMatrix, isCircleNext);
      setCountOfMoves(countOfMoves + 1);
      setIsCircleNext(!isCircleNext);
      setMatrix(newMatrix);
    }
  };
  const resetTheGame = () => {
    setTimeout(() => {
      setMatrix(Array(9).fill(null));
      setCountOfMoves(0);
      setHasAnyoneWon(false);
      setIsCircleNext(true);
    }, 2000);
  };
  const checkForWin = (newGrid, nextIsCircleFlag) => {
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
        setHasAnyoneWon(true);
        //set the score of player
        let newPlayers = [...players];
        if (nextIsCircleFlag) {
          newPlayers[0].score = newPlayers[0].score + 1;
        } else {
          newPlayers[1].score = newPlayers[1].score + 1;
        }

        setPlayers(newPlayers);
        resetTheGame();
        break;
      }
    }
  };
  return (
    <>
      {modalView ? (
        <Modal
          handleAddPlayerNames={handleAddPlayerNames}
          setModalView={setModalView}
        />
      ) : (
        <></>
      )}
      <>
        <Info players={players} />
        <Grid
          matrix={matrix}
          handleSquareClick={handleSquareClick}
          isCircleNext={isCircleNext}
          hasGameStarted={hasGameStarted}
        />
        <Instructions
          setModalView={setModalView}
          hasGameStarted={hasGameStarted}
          isCircleNext={isCircleNext}
          players={players}
          countOfMoves={countOfMoves}
          hasAnyoneWon={hasAnyoneWon}
        />
      </>
    </>
  );
};

export default Game;
