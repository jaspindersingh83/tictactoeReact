import "./Style.css";

export default function Instructions({
  hasGameStarted,
  didAnyoneWin,
  mountModal,
  firstPlayerName,
  secondPlayerName,
  nextIsCircle,
  moves,
}) {
  return (
    <div id="instructions">
      {!hasGameStarted ? (
        <>
          <h2 id="instructions-text">Click the Button to Start</h2>
          <button id="instructions-btn" onClick={mountModal}>
            Start Game
          </button>
        </>
      ) : (
        <>
          {didAnyoneWin && !nextIsCircle && (
            <h2 id="instructions-text">{`${firstPlayerName} won`}</h2>
          )}
          {didAnyoneWin && nextIsCircle && (
            <h2 id="instructions-text">{`${secondPlayerName} won`}</h2>
          )}
          {!didAnyoneWin && nextIsCircle && moves != 9 && (
            <h2 id="instructions-text">{`${firstPlayerName}'s turn`}</h2>
          )}
          {!didAnyoneWin && !nextIsCircle && moves != 9 && (
            <h2 id="instructions-text">{`${secondPlayerName}'s turn`}</h2>
          )}

          {!didAnyoneWin && moves == 9 && (
            <h2 id="instructions-text">Its a draw!</h2>
          )}
          <button id="instructions-btn" onClick={mountModal}>
            Restart Game
          </button>
        </>
      )}
    </div>
  );
}
