// var quizques=document.getElementById('quiz')
// var sumbmit=document.getElementById('submit')
// var result=document.getElementById('result')


// var myQuestions = [
//     {
//       question: "Who invented JavaScript?",
//       answers: {
//         a: "Douglas Crockford",
//         b: "Sheryl Sandberg",
//         c: "Brendan Eich"
//       },
//       correctAnswer: "c"
//     },
//     {
//       question: "Which one of these is a JavaScript package manager?",
//       answers: {
//         a: "Node.js",
//         b: "TypeScript",
//         c: "npm"
//       },
//       correctAnswer: "c"
//     },
//     {
//       question: "Which tool can you use to ensure code quality?",
//       answers: {
//         a: "Angular",
//         b: "jQuery",
//         c: "RequireJS",
//         d: "ESLint"
//       },
//       correctAnswer: "d"
//     }
//   ];
// ]

function check()
{
  var score=0;
  var rightAnswer1=document.getElementById('ques1-a3')
  var Q1Answer1=document.getElementById('ques1-a1')
  var Q1Answer2=document.getElementById('ques1-a2')
  var Q1Answer3=document.getElementById('ques1-a4')
  if(rightAnswer1.checked==true)

  {
    score++
    alert(' Question1 is right answer')
  }
  else
  {
    alert('Question1 is Wrong Answer')
  }



  var rightAnswer2=document.getElementById('ques2-a3')
  var Q1Answer1=document.getElementById('ques2-a1')
  var Q1Answer2=document.getElementById('ques2-a2')
  var Q1Answer3=document.getElementById('ques2-a4')
  if(rightAnswer2.checked==true)

  {
    score++
    alert(' Question2 is right answer')
  }
  else
  {
    alert('question2 is Wrong Answer')
  }


  var rightAnswer3=document.getElementById('ques3-a3')
  var Q3Answer1=document.getElementById('ques3-a1')
  var Q3Answer2=document.getElementById('ques3-a2')
  var Q3Answer3=document.getElementById('ques3-a4')
  if(rightAnswer3.checked==true)

  {
    score++
    alert('Question3 is right answer')
  }
  else
  {
    alert('Question3 is Wrong Answer')
  }


  
  var rightAnswer4=document.getElementById('ques4-a1')
  var Q3Answer1=document.getElementById('ques4-a2')
  var Q3Answer2=document.getElementById('ques4-a3')
  var Q3Answer3=document.getElementById('ques4-a4')
  if(rightAnswer4.checked==true)

  {
    score++
    alert('Question4 is right answer')
  }
  else
  {
    alert('Question4 is Wrong Answer')
  }

  var rightAnswer5=document.getElementById('ques5-a2')
  var Q3Answer1=document.getElementById('ques4-a1')
  var Q3Answer2=document.getElementById('ques4-a3')
  var Q3Answer3=document.getElementById('ques4-a4')
  if(rightAnswer5.checked==true)

  {
    score++
    alert('Question5 is right answer')
  }
  else
  {
    alert('Question5 is Wrong Answer')
  }


  alert('Your total score is'+" "+score++)

  
}





