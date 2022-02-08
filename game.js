const baseURL = 'https://opentdb.com/api.php?amount=5';

// added a url to generate our questions
const container1 = document.querrySelector('.contianer');
const form = document.querrySelector('.contianer');
const form = document.querrySelector('#quiz-form')
const question = document.querrySelector('.quiz')
const option = document.querrySelector('.all-options');
const buttonEl = document.querySelector('.button');
const scoreEl = document.querySelector('.scoreBoard .score-num ')
const answerEl = document.querySelector('.scoreBoard .answered-num')

// grabbing of our elements for the from above

let question, answer;
let options = []
let score = 0;
let answeredQues = 0;

window.addEventListener('DOMContentLoaded', quizApp);


// creating of quiz function

function quizApp() {
    const data = fetchQuiz();
    question = data



}

async function fetchQuiz() {
    const response = await fetch(baseURL);
    const data = await response.json();

    return data.results;


}