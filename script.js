const first_content = document.querySelector(".first-content")

const handleStart = () => {
    first_content.style.display = "none"
    handleSecond(true)
}

const second_content = document.querySelector(".second-content")
const questions = [ 
    "What is the capital of France?" , 
    "Which programming language is known as the language of the web?" , 
    "What is the largest planet in our Solar System?" , 
    "Which HTML tag is used to define an internal style sheet?" , 
    "How many sides does a hexagon have?"
]
const options = [
    ["London", "Berlin", "Paris", "Madrid"],
    ["Python", "JavaScript", "C++", "Java"],   
    ["Earth", "Mars", "Jupiter", "Saturn"],
    ["&lt;css&gt;", "&lt;script&gt;", "&lt;style&gt;", "&lt;link&gt;"],
    ["5", "6", "7", "8"]
]
const answer = [
    "Paris",
    "JavaScript",
    "Jupiter",
    "<style>",
    "6"
]

const handleSecond = (view) => {
    if(view) {
        second_content.style.display = "flex"
        handleQuestion(0)
        return 0
    }
    second_content.style.display = "none"
}

let score = 0
let good = 0
const length = questions.length 
const question_title = document.querySelector(".question")
const box_answers = document.querySelector(".box-answers")
const numbers_view = document.querySelector('.numbers')
const score_view = document.querySelector(".score")
const line_view = document.querySelector(".line")
/* line.style.gridTemplateRows = `repeat(${length+1},1fr)` */

const handleQuestion = (value) => {
    question_title.textContent = questions[value]
    numbers_view.textContent = "Quiestion : " + (value + 1) + " of " + length
    score_view.textContent = "Score : " + score
    box_answers.innerHTML = 
        `
            <div class="answer" onclick="handleCheck('${options[value][0]}','${value}')">${options[value][0]}</div>
            <div class="answer" onclick="handleCheck('${options[value][1]}','${value}')">${options[value][1]}</div>
            <div class="answer" onclick="handleCheck('${options[value][2]}','${value}')">${options[value][2]}</div>
            <div class="answer" onclick="handleCheck('${options[value][3]}','${value}')">${options[value][3]}</div>
        `
}

const handleCheck = (value,number) => {
    let count = number
    if( answer[number] == value ) {
        score++
        good++
        console.log(score)
    }
    count++
    if(count < questions.length) {
        handleQuestion(count)
    }
    else {
        handleSecond(false)
        handleResult(true)
    }
}

const third_content = document.querySelector(".third-content")
const result_view = document.querySelector(".result-view")

const handleResult = (view) => {
    if(view) {
        third_content.style.display = "flex"
        result_view.textContent = "you scored " + score + " of " + length
        return 0
    }
    third_content.style.display = "none"
    score = 0
    good = 0
    handleSecond(true)
}