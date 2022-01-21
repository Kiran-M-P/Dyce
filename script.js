// DOM query
const player1 = document.querySelector(".p1");
const player2 = document.querySelector(".p2");
const rollBtn = document.querySelector("#btn");
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const result = document.querySelector("#result");
const score1 = document.querySelector("#player1Points");
const score2 = document.querySelector("#player2Points");
const totalRolls = document.getElementsByClassName("total-rolls");3
let dice = document.querySelectorAll("img");

let totalDiceRolls = 0;
let player1Score = 0;
let player2Score = 0;

// Name => Input
let p1 = prompt("First-Player Name :");
let p2 = prompt("Second-Player Name :");

// Input check & name update

// player1
const player1Name = p1 === null || p1.length === 0 ? "Player 1" : p1;
player1.innerText = player1Name;

// player2
const player2Name = p2 === null || p2.length === 0 ? "Player 2" : p2;
player2.innerText = player2Name;

function roll() {
  // Disable mutiple click
  rollBtn.disabled = true;

  // dice shake
  dice.forEach(function (die) {
    die.classList.add("shake");
  });

  setTimeout(function () {
    dice.forEach(function (die) {
      die.classList.remove("shake");
    });

    // total rolls
    totalDiceRolls++;
    for (let i = 0; i < totalRolls.length; i++) {
      totalRolls[i].innerText = totalDiceRolls;
    }

    // dice1
    const randomNumber1 = Math.floor(Math.random() * 6 + 1);
    const randomImageSource1 = "images/" + "dice" + randomNumber1 + ".svg";
    image1.setAttribute("src", randomImageSource1);

    // dice2
    const randomNumber2 = Math.floor(Math.random() * 6 + 1);
    const randomImageSource2 = "images/" + "dice" + randomNumber2 + ".svg";
    image2.setAttribute("src", randomImageSource2);

    // score & result update
    if (randomNumber1 > randomNumber2) {
      player1Score++;
      score1.innerText = player1Score;
      result.innerText = player1Name + " won!";
    } else if (randomNumber1 === randomNumber2) {
      result.innerText = "draw!";
    } else {
      player2Score++;
      score2.innerText = player2Score;
      result.innerText = player2Name + " won!";
    }
  }, 1000);

  setTimeout(function () {
    result.innerText = "Press roll to start";
    rollBtn.disabled = false;
  }, 2000);
}

rollBtn.addEventListener("click", roll);
