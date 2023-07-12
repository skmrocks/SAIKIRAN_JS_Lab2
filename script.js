const questions = [

    {
        question: "All key Words in C are in?",
        answers: [
            { text: "Lower case", correct: true },
            { text: "Upper case", correct: false },
            { text: "Camel Case", correct: false },
            { text: "None of the mentioned", correct: false },
        ]
    },
    {
        question: "which of the of the following is not avalid C variable name?",
        answers: [
            { text: "None of the bolow", correct: false },
            { text: "Camel Case", correct: false },
            { text: "Upper Case", correct: false },
            { text: "Lower case", correct: true },
        ]
    },
    {
        question: "Which is valid C xpression?",
        answers: [
            { text: "100,000", correct: false },
            { text: "100000", correct: true },
            { text: "1000", correct: false },
            { text: "10000", correct: false },
        ]
    },
    {
        question: "which of the following is not variable in C?",
        answers: [
            { text: "Volatile", correct: true },
            { text: "import", correct: false },
            { text: "friend", correct: false },
            { text: "export", correct: false },
        ]
    },
    {
        question: "what is short int in c Programming",
        answers: [
            { text: "The Basic Data type of C", correct: false },
            { text: "Qualifier", correct: false },
            { text: "Short is the qualifier and int is the basic data type", correct: true },
            { text: "All of the Above", correct: false },
        ]
    },
    {
        question: "what is an example of iteration in C?",
        answers: [
            { text: "for", correct: false },
            { text: "while", correct: false },
            { text: "do-while", correct: false },
            { text: "all of the above", correct: true },
        ]
    },
    {
        question: "in C language, FILE is of which data type?",
        answers: [
            { text: "int", correct: false },
            { text: "char", correct: false },
            { text: "struct", correct: true },
            { text: "None of the Above", correct: false },
        ]
    },
    {
        question: "Which of the following return-type cannot be used for a function in C ?",
        answers: [
            { text: "Char *", correct: false },
            { text: "struct", correct: false },
            { text: "void", correct: false },
            { text: "none of the Above", correct: true },
        ]
    },
    {
        question: "which of the following is not possible statically in Clanguage?",
        answers: [
            { text: "jagged Arry", correct: true },
            { text: "Rectangular Arry", correct: false },
            { text: "Cuboidal Arry", correct: false },
            { text: "Multidimentional Arry", correct: false },
        ]
    },
    {
        question: "Which of the following are C preprocessors?",
        answers: [
            { text: "#ifdef", correct: false },
            { text: "#define", correct: false },
            { text: "#endif", correct: true },
            { text: "all of the Above", correct: false },
        ]
    }

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
startQuiz();