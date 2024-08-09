import "./Style.css";

export default function Info({
  playerScores,
  firstPlayerName,
  secondPlayerName,
}) {
  return (
    <div id="info">
      <h2 id="info-title">Tic Tac Toe</h2>
      <div className="info-player">
        <img
          src={require("../images/cross.png")}
          alt="Player 1 Icon"
          className="info-player-icon"
        />
        <h1 id="info-player-name1">{firstPlayerName}</h1>
        <h1>:</h1>
        <h1 id="info-player-score1">{playerScores[0]}</h1>
      </div>
      <div className="info-player">
        <img
          src={require("../images/circle.png")}
          alt="Player 2 Icon"
          className="info-player-icon"
        />
        <h1 id="info-player-name2">{secondPlayerName}</h1>
        <h1>:</h1>
        <h1 id="info-player-score2">{playerScores[1]}</h1>
      </div>
    </div>
  );
}
