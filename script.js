var buttons = document.getElementsByClassName("buttons");
first();
var count = 0;
console.log(buttons);
function first() {
  for (i = 0; i < 9; i++) {
    buttons[i].clicked = false;
    console.log(buttons[i].clicked);
  }
  main();
}
function judge() {
  if (
    (buttons[0].innerHTML == "X" &&
      buttons[1].innerHTML == "X" &&
      buttons[2].innerHTML == "X") ||
    (buttons[3].innerHTML == "X" &&
      buttons[4].innerHTML == "X" &&
      buttons[5].innerHTML == "X") ||
    (buttons[6].innerHTML == "X" &&
      buttons[7].innerHTML == "X" &&
      buttons[8].innerHTML == "X")
  ) {
    alert("X Won!");
  } else if (
    (buttons[0].innerHTML == "X" &&
      buttons[3].innerHTML == "X" &&
      buttons[6].innerHTML == "X") ||
    (buttons[1].innerHTML == "X" &&
      buttons[4].innerHTML == "X" &&
      buttons[7].innerHTML == "X") ||
    (buttons[2].innerHTML == "X" &&
      buttons[5].innerHTML == "X" &&
      buttons[8].innerHTML == "X")
  ) {
    alert("X Won!");
  } else if (
    (buttons[0].innerHTML == "X" &&
      buttons[4].innerHTML == "X" &&
      buttons[8].innerHTML == "X") ||
    (buttons[2].innerHTML == "X" &&
      buttons[4].innerHTML == "X" &&
      buttons[6].innerHTML == "X")
  ) {
    alert("X Won!");
  } else if (
    (buttons[0].innerHTML == "O" &&
      buttons[3].innerHTML == "O" &&
      buttons[6].innerHTML == "O") ||
    (buttons[1].innerHTML == "O" &&
      buttons[4].innerHTML == "O" &&
      buttons[7].innerHTML == "O") ||
    (buttons[2].innerHTML == "O" &&
      buttons[5].innerHTML == "O" &&
      buttons[8].innerHTML == "O")
  ) {
    alert("O Won!");
  } else if (
    (buttons[0].innerHTML == "O" &&
      buttons[1].innerHTML == "O" &&
      buttons[2].innerHTML == "O") ||
    (buttons[3].innerHTML == "O" &&
      buttons[4].innerHTML == "O" &&
      buttons[5].innerHTML == "O") ||
    (buttons[6].innerHTML == "O" &&
      buttons[6].innerHTML == "O" &&
      buttons[8].innerHTML == "O")
  ) {
    alert("O Won!");
  } else if (
    (buttons[0].innerHTML == "O" &&
      buttons[4].innerHTML == "O" &&
      buttons[8].innerHTML == "O") ||
    (buttons[2].innerHTML == "O" &&
      buttons[4].innerHTML == "O" &&
      buttons[6].innerHTML == "O")
  ) {
    alert("O Won!");
  } else if (count==8){
    alert("It's a Tie!");
  }
}

function somefunc(x) {
  if (buttons[x].clicked == false) {
    if (count % 2 == 0 && count < 8) {
      buttons[x].innerHTML = "X";
      count += 1;
      buttons[x].clicked = true;
    } else if (count % 2 == 1 && count < 8) {
      buttons[x].innerHTML = "O";
      count += 1;
      buttons[x].clicked = true;
    } else if (count == 8) {
      buttons[x].innerHTML = "X";
      count += 1;
      buttons[x].clicked = true;
    } else if (count > 8) {
      window.alert("Game Over!");
      console.log("ok");
    }
    judge();
    console.log(count);
  } else {
    alert("Move Invalid!");
  }
}

var clicked = [];
function main() {
  buttons[0].onclick = () => {
    somefunc(0);
  };
  buttons[1].onclick = () => {
    somefunc(1);
  };
  buttons[2].onclick = () => {
    somefunc(2);
  };
  buttons[3].onclick = () => {
    somefunc(3);
  };
  buttons[4].onclick = () => {
    somefunc(4);
  };
  buttons[5].onclick = () => {
    somefunc(5);
  };
  buttons[6].onclick = () => {
    somefunc(6);
  };
  buttons[7].onclick = () => {
    somefunc(7);
  };
  buttons[8].onclick = () => {
    somefunc(8);
  };
}
