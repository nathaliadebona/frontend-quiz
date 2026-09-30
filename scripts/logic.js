const screens = document.querySelectorAll('main section');

function showScreen(screenId) {
    screens.forEach(function(section) {
        section.classList.remove('active');
    });

    const screen = document.getElementById(screenId);
    screen.classList.add('active');
}

showScreen('level');
