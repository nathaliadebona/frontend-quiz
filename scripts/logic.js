const screens = document.querySelectorAll('main section');
const topicButtons = document.querySelectorAll('#topic button');

function showScreen(screenId) {
    screens.forEach((section) => {
        section.classList.remove('active');
    });

    const screen = document.getElementById(screenId);
    screen.classList.add('active');
}

topicButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.dataset.topic);
    });
});


showScreen('topic');
