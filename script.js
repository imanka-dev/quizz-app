const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers:[
            {Text: "shark", correct: false},
            {Text: "Blue whale", correct: true},
            {Text: "elephant", correct: false},
            {Text: "Giraffe", correct: false},
        ]
    },
    {
        question: "What is the capital of the australia",
        answers:[
            {Text: "Sydney", correct: false},
            {Text: "Melbourne", correct: false},
            {Text: "Canberra", correct: true},
            {Text: "Perth", correct: false},
        ]
    },
    {
        question: "Which planet is the hottest in the solar system",
        answers:[
            {Text: "Earth", correct: false},
            {Text: "Venus", correct: true},
            {Text: "Mars", correct: false},
            {Text: "Murcury", correct: false},
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answers:[
            {Text: "shark", correct: false},
            {Text: "Blue whale", correct: true},
            {Text: "elephant", correct: false},
            {Text: "Giraffe", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion. question;

    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();