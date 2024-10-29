export default function Square({ handleSquareClick, idx, sq }) {
  return (
    <>
      {sq === null ? (
        <div
          className="grid_square"
          onClick={(e) => handleSquareClick(e, idx)}
        ></div>
      ) : (
        <>
          {sq === 0 ? (
            <div className="grid_square cross"></div>
          ) : (
            <div className="grid_square circle"></div>
          )}
        </>
      )}
    </>
  );
}
