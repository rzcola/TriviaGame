$(document).ready(function (){  
  var correct = 0;
  var incorrect = 0;
  var userGuess = 0;
  var timer = 0;
  var intervalId;
  var question = [];
  var index;
  var pick;



  // creating an array of questions for the quiz with answers
//  var questions = [ 

// {   question: "This player set the record of most made three pointers in a game ?",
//     answers: ['klay Thompson', 'Reggie Miller', 'Steph Curry', 'Kobe Bryant'],
//     correct: 0
// },
// {
//     question: "What team currently defends the NBA Championship question?",
//     answers: ['Los Angeles Lakers', 'Golden State Warriors', 'Chicago Bulls', 'Boston Celtics'],
//     correct: 1
// },
// {   question: "Oklahoma City Thunder franchise was formerly known as  ?",
//     answers: ['Minneapolis Lakers', 'St. Louis Hawks', 'San Francisco Warriors', 'Seattle SuperSonics'],
//     correct: 3
// },
// {   question: "This player received all 131 first-place votes to become the first unanimous winner of the NBA's Most Valuable Player Award  ?",
//     answers: ['Michael Jordan','Steph Curry', 'Kobe Bryant', "Lebron James"],
//    correct: 1
// },
// {
//    question: "How many NBA titles did Michael Jordan win with the Chicago Bulls ?",
//    answers: ['Seven','Five', 'Eleven', "Six"],
//    correct: 3
// },
// {  question: "This player received all 131 first-place votes to become the first unanimous winner of the NBA's Most Valuable Player Award  ?",
//    answers: ['Michael Jordan','Steph Curry', 'Kobe Bryant', "Lebron James"],
//    correct: 1
// },
// {
//     question: "This player is the youngest to received the NBA's Most Valuable Player Award  ?",
//     answers: ['Derrick Rose', 'Michael Jordan', 'Kobe Bryant', "Lebron James"],
//     correct: 0
// },
// {
//   question: "Which player is the only player to have won an Oscar  ?",
//    answers: ['Michael Jordan','Steph Curry', 'Kobe Bryant', "Lebron James"],
//   correct: 2
// },];



$("#startQuiz").on("click", function(){

  console.log("Good Luck")
  startQuiz();
  run();

});

// start quiz
function startQuiz(){

    //  Set our number timer to 60.
    timer = 60;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    //  When the startQuiz button gets clicked, execute the run function.
    
}

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 600);
}

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  timer--;

  //  Show the number in the #show-number tag.
  $("#timeleft").html("<h2>" + timer + "</h2>");


  //  Once number hits zero...
  if (timer === 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that timer is up.
    alert("Times Up!");
  }

  





  
 


  







};