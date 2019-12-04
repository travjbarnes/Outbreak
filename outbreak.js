
var inquirer = require("inquirer");
var userHP = 100;
var Virus = 15;

// Function to Determine winner or loser
function checkRound() {

  console.log("");
  console.log("");

  // If the user has less than 1 HP then ...
  if (userHP <= 1) {

    console.log("###############################################");
    console.log("Game Over");
    console.log("###############################################");
    process.exit();
  }

  // If the virus has less than 1 point.... 
  if (Virus <= 1) {

    console.log("###############################################");
    console.log("Victory! You have survived the Outbreak");
    console.log("###############################################");
    process.exit();
  }

  playRound();

}


// This function holds the game logic
function playRound() {

  // We create a list prompt. Specifying that the user must pick a random number between 1 and 5.
  inquirer.prompt([
    {
      type: "list",
      name: "userGuess",
      message: "A virus is sweeping the world. Try to stay alive! Guess a number between [1-5]",
      choices: ["1", "2", "3", "4", "5"]
    }

  ]).then(function(guess) {

    // If the user is still alive or the virus is still alive
    if (userHealth > 0 || Virus > 0) {

      // Assign a random damage value for the round.
      var damage = Math.floor(Math.random() * 5) + 1;

      // The virus should choose a random number.
      var virusNum = Math.floor((Math.random() * 5)) + 1;
      console.log("");
      console.log("");
      console.log("virus rolled " + virusNum);

      // If the user's guess matches the number then...
      if (virusNum === parseInt(guess.userGuess)) {

        // Subtract the damage amount from the virus
        virusHealth -= damage;
        console.log("YOU REDUCED THE VIRUS BY " + damage + "DEGREES ");
        console.log("You have " + userHealth + " health left. The virus has " + virusHealth + " strength");
        checkRound();
      }

      else {.
        userHealth -= damage;
        console.log("OH NO! The virus has weakined you by " + damage + " health");
        console.log("You have " + userHealth + " health left. The virus has " + virusHealth + " health left.");
        checkRound();

      }
    }
  });
}

playRound();