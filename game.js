const quizData = [{
        question: "What is html ?",

        a: "text",
        b: "hyper text markup language ",
        c: "mark language",
        d: "programming language",
        correct: "b",
    },
    {
        question: "What is css ?",
        a: "cascading stylesheet",
        b: " programming language",
        c: "A scripting language",
        d: "An editor language",
        correct: "a",

    },
    {
        question: "Where is the link to the stylesheet placed ?",
        a: "in the footer",
        b: "inside the body of the html ",
        c: "at the header section near the title",
        d: "inside a class",
        correct: "c",

    },

    {
        question: "Where is the link to the stylesheet placed ?",
        a: "in the footer",
        b: "inside the body of the html ",
        c: "at the header section near the title",
        d: "inside a class",
        correct: "c",

    }

];


const quiz = document.getElementById('quiz')
const answerEl = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a-text')
const b_text = document.getElementById('b-text')
const c_text = document.getElementById('c-text')
const d_text = document.getElementById('d-text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0;
let score = 0;

loadQuiz()


function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEl.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEl.forEach(answerEl => {

        if (answerEl.checked) {
            answer = answerEl.id
        }

    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++

        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly!</h2>


                    <button onClick ="location.reload()"> Reload </button>`

        }
    }
})