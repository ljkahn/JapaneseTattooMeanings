// window object
//alert --> when we want to inform the user of some information
//prompt --> when we want actual user input {typiing in information}
//confirm --> yes or no : true or false



alert('Do you want to play Rock, Paper, Scissors?');
// alert("You Lose!")

var userChoice = prompt ("enter r, p, s");
var computerChoice = Math.random()

if (computerChoice <= 0.33) {
    computerChoice = "rock";
  } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  var choice1 = userChoice
  var choice2 = computerChoice
function compare (choice1, choice2){
  if (choice1 === choice2){
    alert("A tie!");
  }
else if (choice1 === "rock"){
  if (choice2 === "paper"){
    alert("Computer chose PAPER, you LOSE!");
  } else
      alert("Computer chose SCISSORS, you WIN!");
  }
else if (choice1 === "paper"){
  if (choice2 === "scissors"){
    alert("Computer chose SCISSORS, you LOSE!");
  } else
      alert("Computer chose ROCK, you WIN!");
  }
else if (choice1 === "scissors"){
  if (choice2 === "rock"){
    alert ("Computer chose ROCK, you lose!");
  } else
      alert("Computer chose PAPER, you WIN!");
  }
}
compare (userChoice, computerChoice);
console.log("You chose:", choice1, "||", "Computer chose:", choice2);






// how do i access the values in an array?? index position
// r = 0 index 
//p = 1 index
// s= 2 index






// construct a random number of 0, 1, 2