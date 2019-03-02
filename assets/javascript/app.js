var displayQuestion = $('#displayQuestion');
var quizTimer = 15;

$(document).on('click', '#reset', function (e) {
  game.reset();
});

$(document).on('click', '.answer-button', function (e) {
  game.clicked(e);
});

$(document).on('click', '#start', function (e) {
  $('#subwrapper').prepend('<h2>Time Remaining: <span id="quizTimer">15</span> Seconds</h2>');
  game.showQuestion();
  $(this).fadeOut()
});
//  creating an array of questions for the quiz with answers
 var questions = [ {

  question: "This player set the record of most made three pointers in a game ?",
    answers: ['Klay Thompson', 'Reggie Miller', 'Steph Curry', 'Kobe Bryant'],
    correctAnswer: 'Klay Thompson',
    image:"./assets/images/headbandklay.jpg"
},
{
    question: "What team currently defends the NBA Championship ?",
    answers: ['Los Angeles Lakers', 'Golden State Warriors', 'Chicago Bulls', 'Boston Celtics'],
    correctAnswer: "Golden State Warriors",
    image:"./assets/images/dubs.jpg"
},
{   question: "Oklahoma City Thunder franchise was formerly known as  ?",
    answers: ['Minneapolis Lakers', 'St. Louis Hawks', 'San Francisco Warriors', 'Seattle SuperSonics'],
    correctAnswer: "Seattle SuperSonics",
    image:"./assets/images/supersonics.jpg"
},
{   question: "This player received all 131 first-place votes to become the first unanimous winner of the NBA's Most Valuable Player Award ?",
    answers: ['Michael Jordan','Steph Curry', 'Kobe Bryant', "Lebron James"],
   correctAnswer: "Steph Curry",
   image:"./assets/images/curry.jpg"
},
{
   question: "How many NBA titles did Michael Jordan win with the Chicago Bulls ?",
   answers: ['Seven','Five', 'Eleven', "Six"],
   correctAnswer: "Six",
   image:"./assets/images/sixrings.jpg"
},
{  question: "This player cries all the time ?",
   answers: ['Michael Jordan','Steph Curry', 'Kobe Bryant', "Lebron James"],
   correctAnswer: "Lebron James",
   image:"./assets/images/james.jpg"
},
{
    question: "This player is the youngest to received the NBA's Most Valuable Player Award  ?",
    answers: ['Derrick Rose', 'Michael Jordan', 'Kobe Bryant', "Lebron James"],
    correctAnswer: "Derrick Rose",
    image:"./assets/images/Rose.jpg"
},
{
  question: "Which player is the only player to have won an Oscar  ?",
   answers: ['Michael Jordan','Steph Curry', 'Kobe Bryant', "Lebron James"],
  correctAnswer: "Kobe Bryant",
  image:"./assets/images/kobe-bryant.jpg"
},
 ];


var game = {
  questions:questions,
  currentQuestion:0,
  counter:quizTimer,
  correct:0,
  incorrect:0,
  countdown: function(){
    game.counter--;
    $('#quizTimer').html(game.counter);

    if (game.counter === 0){
      console.log('shot clock violation');
      game.timesUp();
    }

  },
  showQuestion: function(){
    timer = setInterval(game.countdown, 600);
    displayQuestion.html('<h2>' + questions[this.currentQuestion].question + '</h2>' );
    for (var i = 0; i<questions[this.currentQuestion].answers.length; i++){
      displayQuestion.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
    }
  },
  nextQuestion: function(){
    game.counter = quizTimer;
    $('#quizTimer').html(game.counter);
    game.currentQuestion++;
    game.showQuestion();
  },
  timeUp: function (){
    clearInterval(timer);
    $('#quizTimer').html(game.counter);

    displayQuestion.html('<h2>Back Court Violation</h2>');
    displayQuestion.append('<h3>Nice try the correct answer is : ' + questions[this.currentQuestion].correctAnswer);
    displayQuestion.append('<img src="' + questions[this.currentQuestion].image + '" />');

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 3 * 600);
    } else {
      setTimeout(game.nextQuestion, 3 * 600);
    }
  },
  results: function() {
    clearInterval(timer);

    displayQuestion.html('<h2>Quiz Results</h2>');
    $('#quizTimer').html(game.counter);
    displayQuestion.append('<h3>Correct Answers: ' + game.correct + '</h3>');
    displayQuestion.append('<h3>Incorrect Answers: ' + game.incorrect + '</h3>');
    displayQuestion.append('<h3>Unanswered: ' + (questions.length - (game.incorrect + game.correct)) + '</h3>');
    displayQuestion.append('<br><button id="reset">Run it Back?</button>');
  },
  clicked: function(e) {
    clearInterval(timer);

    if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer){
      this.answeredCorrectly();
    } else {
      this.answeredIncorrectly();
    }
  },
  answeredIncorrectly: function() {
    game.incorrect++;
    clearInterval(timer);
    displayQuestion.html('<h2>Foul!</h2>');
    displayQuestion.append('<h3>Nice try the correct answer is: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
    displayQuestion.append('<img src="' + questions[game.currentQuestion].image + '" />');

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 3 * 600);
    } else {
      setTimeout(game.nextQuestion, 3 * 600);
    }
  },
  answeredCorrectly: function(){
    clearInterval(timer);
    game.correct++;
    displayQuestion.html('<h2>Correct!</h2>');
    displayQuestion.append('<img src="' + questions[game.currentQuestion].image + '" />');

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 3 * 600);
    } else {
      setTimeout(game.nextQuestion, 3 * 600);
    }
  },
  reset: function(){
    this.currentQuestion = 0;
    this.counter = quizTimer;
    this.correct = 0;
    this.incorrect = 0;
    this.showQuestion();
  }
};





