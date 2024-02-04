const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.message');
const restart = document.querySelector('.restart');

let turn0 = true;
let playerturn = 0;

function clickEvent() {
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (turn0) {
        cell.innerText = "X";
        turn0 = false;
      } else {
        cell.innerText = "O";
        turn0 = true;
      }
      cell.disabled = true;
      checkWin();
      playerturn += 1;
    });
  });
}

function checkWin() {
  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  winPatterns.forEach((pattern) => {
    if ((cells[pattern[0]].innerText !== "")
      &&
      (cells[pattern[0]].innerText) === (cells[pattern[1]].innerText)
      &&
      (cells[pattern[0]].innerText) === (cells[pattern[2]].innerText)) {
      message.innerText = cells[pattern[0]].innerText + " won the match";
    }
  });
  checkDraw();
}

function checkDraw() {
  if (playerturn == 8) {
    message.innerText = "The match ended in a draw";
    message.style.color = "red";
  }
}

function reset() {
  restart.addEventListener("click", () => {
    location.reload();
  })
};

function startgame() {
  clickEvent();
  reset();
}

startgame();