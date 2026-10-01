const screens = document.querySelectorAll('main section');
const topicButtons = document.querySelectorAll('#topic button');
const levelButtons = document.querySelectorAll('#level button');
const quizAlternatives = document.querySelectorAll('.quiz-alternatives button');

let selectedTopic = '';
let selectedLevel = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function showScreen(screenId) {
    screens.forEach((section) => {
        section.classList.remove('active');
    });

    const screen = document.getElementById(screenId);
    screen.classList.add('active');
}

function showQuestion() {
    const quizQuestion = document.getElementById('quiz-question');
    quizQuestion.textContent = currentQuestions[currentQuestionIndex].pergunta;

    const progressCounter = document.getElementById('progress-counter');
    progressCounter.textContent = 'Pergunta ' + (currentQuestionIndex + 1) + '/' + currentQuestions.length;

    quizAlternatives.forEach((alternative, index) => {
        alternative.textContent = currentQuestions[currentQuestionIndex].alternativas[index];
    });
}

topicButtons.forEach((button) => {
    button.addEventListener('click', () => {
        selectedTopic = button.dataset.topic;
        showScreen('level');
    });
});

levelButtons.forEach((button) => {
    button.addEventListener('click', () => {
        selectedLevel = button.dataset.level;

        currentQuestions = questions[selectedTopic][selectedLevel];

        console.log(currentQuestions)

        showScreen('countdown');

        const countdownNumber = document.getElementById('countdown-number');
        let number = 5;
        countdownNumber.textContent = number;

        const countdown = setInterval(() => {
            number = number - 1;
            countdownNumber.textContent = number;

            if (number === 0) {
                clearInterval(countdown);
                showQuestion();
                showScreen('quiz');
            }
        }, 1000);    
    });
});

quizAlternatives.forEach((button) => {
    button.addEventListener('click', () => {
        const chosen = Number(button.dataset.alternative);
        const correct = currentQuestions[currentQuestionIndex].respostaCerta;

        if (chosen === correct) {
            score = score + 1;
            console.log(score);
        } else {
            console.log('errou');
        }

       currentQuestionIndex = currentQuestionIndex + 1;
       
       if (currentQuestionIndex === currentQuestions.length) {
        const correctAnswerCounter = document.getElementById('correct-answer-counter');
        correctAnswerCounter.textContent = score + '/' + currentQuestions.length;   
        showScreen('result');
       } else {
        showQuestion();
       }
    });
});

