const Cell = document.querySelectorAll('.cell');

turn0 = true;


Cell.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (turn0) {
      cell.innerText = "X";
      turn0 = false;
    } else {
      cell.innerText = "O";
      turn0 = true;
    }
  })
})
