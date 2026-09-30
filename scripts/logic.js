const screens = document.querySelectorAll('main section');
const topicButtons = document.querySelectorAll('#topic button');
const levelButtons = document.querySelectorAll('#level button');

let selectedTopic = '';
let selectedLevel = '';
let currentQuestions = [];

function showScreen(screenId) {
    screens.forEach((section) => {
        section.classList.remove('active');
    });

    const screen = document.getElementById(screenId);
    screen.classList.add('active');
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

                const quizQuestion = document.getElementById('quiz-question');
                quizQuestion.textContent = currentQuestions[0].pergunta;

                const quizAlternatives = document.querySelectorAll('.quiz-alternatives button');

                quizAlternatives.forEach((alternative, index) => {
                    alternative.textContent = currentQuestions[0].alternativas[index];
                });

                showScreen('quiz');
            }
        }, 1000);    
    });
});

