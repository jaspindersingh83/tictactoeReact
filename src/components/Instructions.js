const Instructions = ({
  hasGameStarted,
  isCircleNext,
  players,
  countOfMoves,
  hasAnyoneWon,
  setModalView,
}) => {
  const firstPlayerName = players[0].name;
  const secondPlayerName = players[1].name;
  return (
    <div id="instructions">
      {!hasGameStarted ? (
        <>
          <div id="instructions-text">Click here to Start</div>
          <button id="instructions-btn" onClick={() => setModalView(true)}>
            Start Game
          </button>
        </>
      ) : (
        <>
          {hasAnyoneWon && !isCircleNext && (
            <h2 id="instructions-text">{`${firstPlayerName} won`}</h2>
          )}
          {hasAnyoneWon && isCircleNext && (
            <h2 id="instructions-text">{`${secondPlayerName} won`}</h2>
          )}
          {!hasAnyoneWon && isCircleNext && countOfMoves !== 9 && (
            <h2 id="instructions-text">{`${firstPlayerName}'s turn`}</h2>
          )}
          {!hasAnyoneWon && !isCircleNext && countOfMoves !== 9 && (
            <h2 id="instructions-text">{`${secondPlayerName}'s turn`}</h2>
          )}
          {!hasAnyoneWon && countOfMoves === 9 && (
            <h2 id="instructions-text">Its a draw!</h2>
          )}
          <button onClick={() => setModalView(true)} id="instructions-btn">
            Restart Game
          </button>
        </>
      )}
    </div>
  );
};

export default Instructions;
