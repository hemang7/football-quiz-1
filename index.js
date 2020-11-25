var readlineSync = require('readline-sync');
const chalk = require('chalk');
console.log("Welcome to the"+chalk.bold(" Football Quiz"))
var username = readlineSync.question("Hey! What's your name ?");
console.log("Hey,"+chalk.blue(username)+" so lets get started\nThere are 6 questions in this quiz and you need to answer them all correctly to win.");
var score = 0;

function play(question,answer){

 var userAns = readlineSync.question(question);

 if(userAns.toLowerCase() === answer.toLowerCase()){
   console.log(chalk.green("You're right !!!"))
   score = score + 2;
   console.log(chalk.blue("Your current score is ",score))
   console.log("-----------")
 } else {
   console.log(chalk.red("You're wrong !!!"))
   score = score - 1;
   console.log(chalk.green("The correct answer is",answer))
   console.log(chalk.blue("Your current score is ",score))
   console.log("-----------")
 }
}
 console.log(chalk.blue("Your score is ",score))
  console.log("-------------")


var quest = [{
  question : "Who is the manager of Real Madrid ? ",
  answer : "Zinedine Zidane"
}, {
  question : "Who's the G.O.A.T. ? ",
  answer : "Cristiano Ronaldo"
},{
  question : "Which club has the maximum no. of UCL titles ? ",
  answer : "Real Madrid"
}
];

for(i=0; i < quest.length;i++){
  var currentQuestion = quest[i];
  play(currentQuestion.question,currentQuestion.answer)
};

var mcqset = [
  {
   array : ["Germany","France","Croatia","Brazil"],
  question : "Who won the FIFA world cup 2018 ? ",
  answer : "France"
}, {
  array : ["C.Ronaldo","Lionel Messi","Suniel Chhetri","Neymar"],
  question : "Who is the 2nd highest active top scorer in international football ?",
  answer : "Suniel Chhetri"
}, {
  array: ["Barcelona","Bayern Munich","Liverpool","Ajax FC"],
  question : "Which club won the UCL 2020 ?",
  answer : "Bayern Munich",
}
];

function quizMcq(question,array,answer){
  var userans = readlineSync.keyInSelect(array,question);
  console.log('\n')
  if(array[userans] === answer){
    console.log(chalk.green("You are right !!"));
    score = score + 2;
    console.log(chalk.blue("Your current score is ",score))
    console.log("-----------")
  }else{
    console.log(chalk.blue("You are wrong !!"))
    console.log(chalk.green("The correct answer is : ",answer))
    score = score - 1
    console.log(chalk.blue("Your current score is ",score))
    console.log("-----------")
  }
};

for(i=0;i<mcqset.length;i++){
currque = mcqset[i]
quizMcq(currque.question,currque.array,currque.answer)
}


var highscore = [{
  name : 'Sam',
  score: '10',
}, {
  name : 'Rahul',
  score: '8'
}, {
  name : 'Aman',
  score: '7'
}, {
  name: 'Kartik',
  score: '4'
}];


for(i in highscore){
    if(score > highscore[i].score){
      highscore[i].name = username;
      highscore[i].score = score
      console.log(highscore)
      break;
    }
}                          
