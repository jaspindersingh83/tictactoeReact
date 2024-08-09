import "./Style.css";

export default function Square({ value, idx, handleSquareClick }) {
  const renderSwitch = (value) => {
    switch (value) {
      case 1:
        return <div id="grid_square-1" className="grid_square cross"></div>;
      case 2:
        return <div id="grid_square-1" className="grid_square circle"></div>;
      default:
        return (
          <div
            id="grid_square-1"
            className="grid_square"
            onClick={(e) => handleSquareClick(e, idx)}
          ></div>
        );
    }
  };
  return <>{renderSwitch(value)}</>;
}
