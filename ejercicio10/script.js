const quizData = [
    {
        question: "¿Cuál es la capital de España?",
        options: ["Londres", "Madrid", "París", "Roma"],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        options: ["Atlántico", "Pacífico", "Índico", "Ártico"],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es el elemento químico más abundante en la Tierra?",
        options: ["Oxígeno", "Carbono", "Hierro", "Aluminio"],
        correctAnswer: 0
    },
    {
        question: "¿Quién escribió 'Romeo y Julieta'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
        correctAnswer: 0
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
        correctAnswer: 0
    },
    {
        question: "¿Cuál es la montaña más alta del mundo?",
        options: ["Monte Everest", "Monte Kilimanjaro", "Monte McKinley", "Monte Vinson"],
        correctAnswer: 0
    },
    {
        question: "¿Qué planeta es conocido como 'el planeta rojo'?",
        options: ["Tierra", "Venus", "Marte", "Júpiter"],
        correctAnswer: 2
    },
    {
        question: "¿Cuál es el hueso más largo del cuerpo humano?",
        options: ["Fémur", "Radio", "Húmero", "Tibia"],
        correctAnswer: 0
    },
    {
        question: "¿Quién pintó 'La última cena'?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: 2
    },
    {
        question: "¿En qué año comenzó la Primera Guerra Mundial?",
        options: ["1914", "1915", "1916", "1917"],
        correctAnswer: 0
    }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add("hide");
    showQuestion(quizData[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    optionsElement.innerHTML = "";
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = quizData[currentQuestionIndex].correctAnswer;
    if (selectedButton.innerText === quizData[currentQuestionIndex].options[correct]) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(quizData[currentQuestionIndex]);
    } else {
        endGame();
    }
}

function endGame() {
    questionElement.innerText = "¡Juego terminado!";
    optionsElement.innerHTML = "";
    nextButton.classList.add("hide");
    scoreElement.innerText = `Tu puntuación: ${score} de ${quizData.length}`;
}

startGame();
