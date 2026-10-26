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

let score = 0
let good = 0
const length = questions.length 
const question_title = document.querySelector(".question")
const box_answers = document.querySelector(".box-answers")
const numbers_view = document.querySelector('.numbers')
const score_view = document.querySelector(".score")
const line_view = document.querySelector(".line")

line_view.style.gridTemplateColumns = `repeat(${length},1fr)`

const handleSecond = (view) => {
    if(view) {
        second_content.style.display = "flex"
        for (let i = 0; i < length; i++) {
            line_view.innerHTML += `<div class='box' id='box${i}'></div>`
        }
        handleQuestion(0)
        return 0
    }
    second_content.style.display = "none"
}


const handleQuestion = (value) => {
    question_title.textContent = questions[value]
    numbers_view.textContent = "Quiestion : " + (value + 1) + " of " + length
    score_view.textContent = "Score : " + score
    box_answers.innerHTML = 
        `
            <div class="answer" onclick="handleCheck('${options[value][0]}','${value}','${0}')">${options[value][0]}</div>
            <div class="answer" onclick="handleCheck('${options[value][1]}','${value}','${1}')">${options[value][1]}</div>
            <div class="answer" onclick="handleCheck('${options[value][2]}','${value}','${2}')">${options[value][2]}</div>
            <div class="answer" onclick="handleCheck('${options[value][3]}','${value}','${3}')">${options[value][3]}</div>
        `
}

const handleCheck = (value,number,index) => {
    let count = number
    const answersList = document.querySelectorAll(".answer")
    const boxDiv = document.querySelector(`#box${number}`)
    if( answer[number] == value ) {
        score++
        good++
        answersList[index].style.backgroundColor = "#10b981"
        boxDiv.style.backgroundColor = "#10b981"
    }
    else {
        answersList[index].style.backgroundColor = "#ef4444"
        boxDiv.style.backgroundColor = "#ef4444"
    }
    setTimeout(() => {
        count++
        answersList[index].style.backgroundColor = "#334155"
        if(count < questions.length) {
            handleQuestion(count)
        }
        else {
            handleSecond(false)
            handleResult(true)
        }
    },2000)
}

const third_content = document.querySelector(".third-content")
const result_view = document.querySelector(".result-view")
const titleResult = document.querySelector(".title-result")

const handleResult = (view) => {
    if(view) {
        third_content.style.display = "flex"
        result_view.textContent = "you scored " + score + " of " + length
        if(score < 3) {
            titleResult.textContent = "Not your day, but you'll get 'em next time!"
        }
        else if ( score >= 3 && score < 5){
            titleResult.textContent = "Not bad! Passing territory. Keep it up!"
        }
        else {
            titleResult.textContent = "Okay Einstein, save some answers for the rest of us!"
        }
        return 0
    }
    third_content.style.display = "none"
    score = 0
    good = 0
    line_view.innerHTML = ""
    handleSecond(true)
}