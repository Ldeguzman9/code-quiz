// DEFINE VARIABLES
//var timeLeft = 120;
//var playerScore = 100
// wrongAnswer = -5
// correctAnswer = +10

// CONSOLE LOG NAMES AND SCORES
// console.log(playerName);
// console.log(playerScore);

// Function to start quiz - prompt name
var startQuiz = function () {
  var playerName = window.prompt(
    "Welcome to the coding quiz! Please enter your name below."
  );

  var confirmStart = window.confirm(
    "Hi " + playerName + ", are you ready to begin?"
  );
  console.log(playerName);
};

// Build quiz function here

// Get references to the #quiz-start element
var quizBtn = document.querySelector("#quiz-start");

//Timer function
var startTime = function () {
  var seconds_left = 120;
  var interval = setInterval(function () {
    document.getElementById("timer_span").innerHTML = --seconds_left;

    if (seconds_left <= 0) {
      document.getElementById("timer_span").innerHTML = "Time is up!";
      clearInterval(interval);
    }
  }, 1000);
};

// Event listener to start quiz
quizBtn.addEventListener("click", startQuiz);

//Event listener to start timer
quizBtn.addEventListener("click", startTime);
