const themeToggle = document.getElementById('theme-toggle');
const playAgainBtn = document.getElementById('play-again-btn');
const themeIcon = document.querySelector('#theme-toggle i');
const screens = document.querySelectorAll('main section');
const topicButtons = document.querySelectorAll('#topic button');
const levelButtons = document.querySelectorAll('#level button');
const quizAlternatives = document.querySelectorAll('.quiz-alternatives button');
const levelsTimer = {
    facil: 20,
    medio: 30,
    dificil: 40
};

let selectedTopic = '';
let selectedLevel = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeRemaining = 20;
let timeLeft = 0;
let timerInterval;
let mistakes = [];

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

    const progressBar = document.getElementById('progress-bar');
    const percentage = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressBar.style.width = percentage + '%';

    const progressTimer = document.getElementById('progress-timer');

    clearInterval(timerInterval);

    timeLeft = levelsTimer[selectedLevel];
    progressTimer.classList.remove('timer-alert');
    progressTimer.textContent = timeLeft + 's';

    timerInterval = setInterval(() => {
        timeLeft = timeLeft - 1;
        progressTimer.textContent = timeLeft + 's';

        if (timeLeft <= 5) {
            progressTimer.classList.add('timer-alert');
        }

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            mistakes.push(currentQuestions[currentQuestionIndex]);
            goToNextQuestion();
        }
    }, 1000);

    quizAlternatives.forEach((alternative, index) => {
        alternative.textContent = currentQuestions[currentQuestionIndex].alternativas[index];
    });
}

function goToNextQuestion() {
    currentQuestionIndex = currentQuestionIndex + 1;

    if (currentQuestionIndex === currentQuestions.length) {
        clearInterval(timerInterval);
        const correctAnswerCounter = document.getElementById('correct-answer-counter');
        correctAnswerCounter.textContent = score + '/' + currentQuestions.length;   
        
        const congratsMessage = document.querySelector('.congrats-message');

        const mistakesList = document.querySelector('.mistakes-list');

        mistakesList.querySelectorAll('.mistake-item').forEach((oldItem) => {
            oldItem.remove();
        });

        if (mistakes.length === 0) {
            congratsMessage.hidden = false;
        } else {
            congratsMessage.hidden = true;
            const mistakesList = document.querySelector('.mistakes-list');

            mistakes.forEach((mistake) => {
                const item = document.createElement('div');
                item.classList.add('mistake-item');

                const text = document.createElement('p');
                text.classList.add('mistake-question');
                text.textContent = mistake.pergunta;

                const viewAnswerBtn = document.createElement('button');
                viewAnswerBtn.type = 'button';
                viewAnswerBtn.classList.add('view-answer');
                viewAnswerBtn.textContent = 'Ver resposta';

                const answer = document.createElement('p');
                answer.classList.add('mistake-question-answer');
                answer.textContent = 'Resposta certa: ' + mistake.alternativas[mistake.respostaCerta] + '. ' + mistake.explicacao;
                answer.hidden = true;

                viewAnswerBtn.addEventListener('click', () => {
                    answer.hidden = !answer.hidden;
                });

                item.appendChild(text);
                item.appendChild(viewAnswerBtn);
                item.appendChild(answer);
                mistakesList.appendChild(item);
            });
        }

        showScreen('result');
    } else {
        showQuestion();
    }
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

        currentQuestions = questions[selectedTopic][selectedLevel].slice().sort(() => Math.random() - 0.5);

        console.log(currentQuestions);

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
        } else {
            mistakes.push(currentQuestions[currentQuestionIndex]);
            console.log(mistakes);
        }
       
       goToNextQuestion();
    });
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    themeIcon.classList.toggle('fa-sun');
    themeIcon.classList.toggle('fa-moon');
});

playAgainBtn.addEventListener('click', () => {
    score = 0;
    currentQuestionIndex = 0;
    mistakes = [];
    showScreen('topic');
});