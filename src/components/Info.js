import "./Style.css";

const Info = ({ players }) => {
  return (
    <div id="info">
      <div id="info-title">Tic Tac Toe</div>
      <div className="info-player">
        <img
          className="info-player-icon"
          src={require("../images/cross.png")}
        ></img>
        <h1>{players[0].name}</h1>
        <h1>:</h1>
        <h1>{players[0].score}</h1>
      </div>
      <div className="info-player">
        <img
          className="info-player-icon"
          src={require("../images/circle.png")}
        ></img>
        <h1>{players[1].name}</h1>
        <h1>:</h1>
        <h1>{players[1].score}</h1>
      </div>
    </div>
  );
};

export default Info;
