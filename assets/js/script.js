var startQuiz = function () {
  window.prompt("Welcome to the coding quiz! Please enter your name below.");
};

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
