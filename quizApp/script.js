
// alert("This works");
const quizData = [
  {
    question: 'How old is Florin?',
    a: '10',
    b: '17',
    c: '26',
    d: '110',
    correct: 'c'
  }, 

  {
    question: 'What is the most popular programming language in 2024?',
    a: 'javaScript',
    b: 'python',
    c: 'C',
    d: 'Ruby',
    correct: 'a'
  }, 

  {
    question: 'Who is the President of US?',
    a: 'Taylor Swift',
    b: 'Donald Trump',
    c: 'Ivan Saldano',
    d: 'Joe Biden',
    correct: 'd'
  }, 

  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'How To Make Love',
    c: 'Cascading Style Sheet',
    d: 'Jason Object Notation',
    correct: 'a'
  },

  {
    question: 'What year was Javascript lanched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'None of above',
    correct: 'b'
  }
]

const questionEl = document.getElementById('question');

const a_text = document.getElementsById("a_text");
const b_text = document.getElementsById("b_text");
const c_text = document.getElementsById("c_text");
const d_text = document.getElementsById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
loadQuiz();

function loadQuiz(){
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question; 
  a_text.innerText = currentQuizData.a; 
  b_text.innerText = currentQuizData.b; 
  c_text.innerText = currentQuizData.c; 
  d_text.innerText = currentQuizData.d; 

}

submitBtn.addEventListener("click", ()=>{
  currentQuiz++;

  if(currentQuiz < quizData.length){
    loadQuiz();
  } else {
    alert("You've finished, get yourself a lemonade");
  }
})