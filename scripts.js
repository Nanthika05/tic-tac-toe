let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function makeMove(cell) {
  const index = Array.from(cell.parentNode.children).indexOf(cell);

  if (gameBoard[index] === "" && !checkWinner()) {
    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.style.pointerEvents = "none";

    if (checkWinner()) {
      alert(`Player ${currentPlayer} wins!`);
    } else if (!gameBoard.includes("")) {
      alert("It's a draw!");
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6] // Diagonals
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      gameBoard[a] !== "" &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      highlightWinningCells(pattern);
      return true;
    }
  }

  return false;
}

function highlightWinningCells(cells) {
  for (const cellIndex of cells) {
    document.querySelector(
      `.board .cell:nth-child(${cellIndex + 1})`
    ).style.backgroundColor = "#4caf50";
  }
}
