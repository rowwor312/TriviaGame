var myQuestions = [
    {
        questions: "How many consecutive Gold Gloves did Ozzie Smith win?",
        answers: {
            a: '3',
            b: '13',
            c: '11'
        },
        correctAnswer: 'b'
    },
    {
        questions: "Which Cardinal first baseman was known as Big Mac?",
        answers: {
            a: 'Bob Gibson',
            b: 'Babe Ruth',
            c: 'Mark McGwire'
        },
        correctAnswer: 'c'
    },
    {
        questions: "In which year did the Cardinals win their first World Series?",
        answers: {
            a: '1926',
            b: '1942',
            c: '1958'
        },
        correctAnswer: 'a'
    },
    {
        questions: "Who wore the number 5 in 2009?",
        answers: {
            a: 'Keith Hernandez',
            b: 'Albert Pujols',
            c: 'Ray Lankford'
        },
        correctAnswer: 'b'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // store output and answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // reset answer list
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter] + ' '
                    + '</label>'
                );
            }

            // add question and answer to output
            output.push(
                '<div class="question">' + questions[i].questions + '</div>'
                + '<div class="answers">' + answers.join('   ') + '</div>'
            );
        }

        // generate output list
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // track user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'green';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // display correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + ' correct';
    }

    // display questions
    showQuestions(questions, quizContainer);
    
    // show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}

// push to start timer
   
  var seconds;
  var temp;
 
  function countdown() {
    seconds = document.getElementById('countdown').innerHTML;
    seconds = parseInt(seconds, 10);
 
    if (seconds == 1) {
      temp = document.getElementById('countdown');
      temp.innerHTML = "Quiz Over!";
      return;
    }
 
    seconds--;
    temp = document.getElementById('countdown');
    temp.innerHTML = seconds;
    timeoutMyOswego = setTimeout(countdown, 1000);
  } 
 
//   countdown();
