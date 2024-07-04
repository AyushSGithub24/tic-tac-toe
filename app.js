const par = document.querySelector(".parent");
const grid = document.createElement("div");
const sc = document.createElement("div");

const yes = document.createElement("button");
const no = document.createElement("button");

const choice = document.createElement("div");
const cc = document.createElement("div"); //player
const cc1 = document.createElement("div"); //bot

let board = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
];
let free = 9;
let turn = false;
function Check(board) {
  if (free == 0) {
    return "Draw";
  }
  for (let i = 0; i < 3; i++) {
    if (board[i][0] == "X" && board[i][1] == "X" && board[i][2] == "X") {
      return "X wins!!!";
    } else if (board[i][0] == "O" && board[i][1] == "O" && board[i][2] == "O") {
      return "O wins!!!";
    } else if (board[0][i] == "X" && board[1][i] == "X" && board[2][i] == "X") {
      return "X wins!!!";
    } else if (board[0][i] == "O" && board[1][i] == "O" && board[2][i] == "O") {
      return "O wins!!!";
    }
  }
  if (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") {
    return "X wins!!!";
  }
  if (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") {
    return "O wins!!!";
  }
  if (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
    return "X wins!!!";
  }
  if (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O") {
    return "O wins!!!";
  }
  return "next";
}
const heading = document.createElement("h1");
heading.textContent = "O's turn";
function CreateGameBoard() {
  grid.className = "grid";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const d = document.createElement("div");
      d.className = "child";
      d.id = `${i} ${j}`;
      let sol = () => {
        let idx = d.id.split(" ");
        if (turn) {
          const _x = document.createElement("img");
          _x.src = "./assets/close.png";
          _x.width = 150;
          d.appendChild(_x);
          board[idx[0]][idx[1]] = "X";
        } else {
          const _O = document.createElement("img");
          _O.src = "./assets/o.png";
          _O.width = 150;
          d.appendChild(_O);
          board[idx[0]][idx[1]] = "O";
        }
        free--;
        let str = Check(board);
        if (str == "next") {
          if (!turn) {
            heading.textContent = "X's turn";
          } else {
            heading.textContent = "O's turn";
          }
        }
        else if (str == "X wins!!!") {
          Xwins();
          return;
        }
        else if (str == "O wins!!!") {
          Owins();
          return;
        }
        else if (str == "Draw") {
          draw();
          return;
        }
        turn = !turn;
        d.removeEventListener("click", sol);
      };
      d.addEventListener("click", sol);
      grid.appendChild(d);
    }
  }
  sc.appendChild(grid);
}
function replay() {
  const h2 = document.createElement("h2");
  h2.textContent = "Congoratulation";
  sc.appendChild(h2);
  const div = document.createElement("div");
  const imges2 = document.createElement("img");
  imges2.src = "./assets/party.png";
  imges2.height = 300;
  div.appendChild(imges2);
  const imges = document.createElement("img");
  const dd = document.createElement("div");
  imges.src = "./assets/replay.png";
  imges.height = 250;
  dd.appendChild(imges);
  div.appendChild(dd);
  dd.addEventListener("click", () => {
    location.reload();
  });
  sc.appendChild(div);
}
function Xwins() {
  ClearScreen();
  const h1 = document.createElement("h1");
  h1.style = "font-size: xx-large;";
  h1.textContent = "X wins!!!";
  sc.appendChild(h1);
  replay();
}
function Owins() {
  ClearScreen();
  const h1 = document.createElement("h1");
  h1.style = "font-size: xx-large;";
  h1.textContent = "O wins!!!";
  sc.appendChild(h1);
  replay();
}
function draw() {
  ClearScreen();
  const h1 = document.createElement("h1");
  h1.style = "font-size: xx-large;";
  h1.textContent = "Draw";
  sc.appendChild(h1);
  replay();
}
function CreateWelcomeScreen() {
  sc.className = "Screen";
  sc.style.cssText =
    "background-color: rgba(214, 186, 86, 0.92);height: 80%;width: 60%;color: black;border-radius: 25px;padding: 50px; display: flex;flex-direction: column;align-items: center; justify-content: center;";

  const h1 = document.createElement("h1");
  h1.textContent = "Welcome Everyone";
  sc.appendChild(h1);
  sc.appendChild(document.createElement("br"));

  const h2 = document.createElement("h2");
  h2.textContent = "Would you like to play tic-tac-toe";
  sc.appendChild(h2);
  sc.appendChild(document.createElement("br"));

  const d = document.createElement("div");

  yes.textContent = "Yes";
  yes.id = "Yes";
  yes.style.cssText =
    "padding: 10px 30px; font-size: x-large; border-radius: 5px; border: none; cursor: pointer;margin: 2px;";
  d.appendChild(yes);

  no.textContent = "No";
  no.id = "No";
  no.style.cssText =
    "padding: 10px 30px; font-size: x-large; border-radius: 5px; border: none; cursor: pointer;margin: 2px;";
  d.appendChild(no);

  sc.appendChild(d);
  par.appendChild(sc);
}

function ClearScreen() {
  while (sc.firstChild) {
    sc.removeChild(sc.firstChild);
  }
}

function choose() {
  choice.className = "Choice";
  cc.className = "ChoiceChild";
  cc.id = "player";
  const img1 = document.createElement("img");
  img1.src = "./assets/two-players.png";
  img1.width = 300;
  cc.appendChild(img1);
  choice.appendChild(cc);
  const img2 = document.createElement("img");
  img2.src = "./assets/choice.png";
  img2.height = 200;
  img2.width = 200;
  choice.appendChild(img2);
  const cc1 = document.createElement("div");
  cc1.className = "ChoiceChild";
  cc1.id = "Bot";
  const img3 = document.createElement("img");
  img3.src = "./assets/bot.png";
  img3.width = 300;
  cc1.appendChild(img3);
  choice.appendChild(cc1);
  sc.appendChild(choice);
}
CreateWelcomeScreen();
yes.addEventListener("click", () => {
  ClearScreen();
  choose();
});
cc.addEventListener("click", () => {
  ClearScreen();
  sc.appendChild(heading);
  CreateGameBoard();
});
