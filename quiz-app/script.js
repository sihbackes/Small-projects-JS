const quizData = [
  {
    question: 'How old is Simone?',
    a: '26',
    b: '22',
    c: '31',
    d: '28',
    correct: 'c'
  }, {
    question: 'Where does Simone live?',
    a: 'London',
    b: 'Cambridge',
    c: 'Ely',
    d: 'St. Ives',
    correct: 'd'
  }, {
    question: 'How many cats does Simone have?',
    a: '2',
    b: '5',
    c: '1',
    d: '3',
    correct: 'a'
  }, {
    question: 'What is her favorite food?',
    a: 'Gnocchi',
    b: 'Vegan sushi',
    c: 'Beyond burguer',
    d: 'All of the above',
    correct: 'd'
  },{
    question: 'What is her favorite color?',
    a: 'Blue',
    b: 'Grey',
    c: 'Red',
    d: 'Black',
    correct: 'd'
  }
];



const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
 
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if(answerEl.checked) {
      answer = answerEl.id;
    }
  }); 

  return answer;

}

function deselectAnswers(){
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}


submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
      if (answer === quizData[currentQuiz].correct) {
          score++;
      }

      currentQuiz++;
      if (currentQuiz < quizData.length) {
          loadQuiz();
      } else {
          quiz.innerHTML = `
              <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
              
              <button onclick="location.reload()">Reload</button>
          `;
      }
  }
});