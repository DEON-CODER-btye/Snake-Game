let direction = "Right";
let snake = [50];

const board = document.querySelector(".board");

function runBoard() {
  for (let i = 0; i < 144; i++) {
    const div = document.createElement("div");
    div.classList.add("cells");
    board.append(div);
  }

  const cells = document.querySelectorAll(".cells");

  let food = Math.floor(Math.random() * 144);
  cells[food].classList.add("food");

  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowRight":
        direction = "Right";
        break;
      case "ArrowLeft":
        direction = "Left";
        break;
      case "ArrowUp":
        direction = "Up";
        break;
      case "ArrowDown":
        direction = "Down";
        break;
    }
  });

  setInterval(() => {



    snake.forEach((pos) => {
      cells[pos].classList.remove("snake");
    });

    let newHead;

    if (direction === "Right") {
      newHead = snake[0] + 1;
    } else if (direction === "Left") {
      newHead = snake[0] - 1;
    } else if (direction === "Up") {
      newHead = snake[0] - 12;
    } else if (direction === "Down") {
      newHead = snake[0] + 12;
    }

    if (newHead < 0 || newHead > 143) {
      return;
    }

    if (snake.includes(newHead)) {
      window.location.reload()
    }

    if (newHead % 12 === 11 && direction === 'Right') {
      alert('Game Over')
      window.location.reload()
    } else if (newHead % 12 === 0 && direction === 'Left') {
      alert('Game Over')
      window.location.reload()
    }


    snake.unshift(newHead);

    if (snake[0] === food) {
      cells[food].classList.remove("food");

      food = Math.floor(Math.random() * 144);

      cells[food].classList.add("food");


    } else {
      snake.pop();
    }

    // Snake draw karo
    snake.forEach((pos) => {
      cells[pos].classList.add("snake");
    });

    console.log(snake);
  }, 500);
}

// runBoard();