const readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

var userName = readlineSync.question("May I have your name ? ");
console.log(chalk.cyanBright("\nWelcome to the quiz ",userName));
console.log(chalk.yellowBright("\nThis quiz is about the famous American web series GAME OF THRONES.Feel free to play thiz quiz and have some fun!"));
console.log(chalk.red("\nlet's begin dracarys ",userName));

function play(question,answer,wrongSuggestion){
  var userAnswer = readlineSync.question(question);
  console.log(chalk.bgBlackBright("\nYou selected option ",userAnswer));
  if(userAnswer.toLowerCase() === answer || userAnswer === answer){
    console.log(chalk.green("\nYou are right!\n"));
    score = score + 1;
  }
  else{
    console.log(chalk.bgRed('\nOops!,You are wrong!\n'));
    console.log(chalk.bgRed(`${wrongSuggestion}\n`));

  }
  console.log('Your score : ' + chalk.green.underline.bold(score));
    console.log('_________________');
}
var questions = [{
    question: `
   What's the name of the author of Game Of Thrones?\n
    a: Charles K.C. Hilberg
    b: George R.R. Martin
    c: John R.J. Marrin\n`,
    answer: 'b',
    wrongSuggestion: 'You guessed it wrong',
  }, {
    question: `
   How many dragons does Daenerys possess\n
    a: 2
    b: 1
    c: 3\n`,
    answer: 'c',
    wrongSuggestion: 'You guessed it wrong',
  },
  {
    question: `
    What are the words of the house Stark?\n
    a: "Winter Is Coming"
    b: "The Wind Is Howling"
    c: "The Wolf Is Running" \n`,
    answer: 'a',
    wrongSuggestion: 'You guessed it wrong',
  },
  {
    question: `
    What is Arya Stark's sword known as?\n
    a: Needle
    b: Sword
    c:a Slash
    \n`,
    answer: 'a',
    wrongSuggestion: 'You guessed it wrong',
  },
  {
    question: `
    Which of the following is NOT one of Daenerys's dragons?\n
    a: Viserion
    b: Drogon
    c: Rhaegal
    \n`,
    answer: 'c',
    wrongSuggestion: 'You guessed it wrong',
  }];
  for(var i = 0; i<questions.length; i++){
    play(questions[i].question,questions[i].answer,questions[i].wrongSuggestion);
  }
let highScorers = [
  {
  name: "Jack",
  score: "5",
  },
  {
  name: "Russell",
  score: "4",
  }
];
console.log("\nYour overall score is : " + chalk.greenBright.bold(score));
console.log(chalk.cyanBright.bold(`\nThanks ${userName} for playing the quiz.`));

if(score >= 2){
  let newPlayer = {
    name: userName,
    score: score, 
  }
  highScorers.push(newPlayer);
};

console.log(chalk.greenBright('\nHIGHSCORERS'));
console.log('_________________\n');
highScorers.forEach(player => 
    console.log(`${player.name} scored ${player.score}`)
); 
