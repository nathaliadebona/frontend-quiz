# Frontend Quiz 🧠

A timed quiz about HTML, CSS, and JavaScript, with three difficulty levels, a progress bar, light/dark mode, and a results screen that explains every mistake. The idea comes from a Frontend Mentor challenge.

Built as a front-end learning project, with a focus on fundamentals: plain HTML, CSS, and JavaScript (no frameworks).

https://nathaliadebona.github.io/frontend-quiz/

## Features

### Quiz
- Choose a topic (HTML, CSS, or JavaScript) and a difficulty level (easy, medium, or hard)
- 90 multiple-choice questions: 10 for each topic and level, with 4 options each
- Questions shuffled on every game
- 5-second countdown before the quiz starts
- Timer per question (20s easy, 30s medium, 40s hard) that turns red in the last 5 seconds
- Unanswered questions count as wrong
- Question counter and progress bar

### Results
- Final score
- List of the questions you got wrong, each with a "View answer" button that shows the correct answer and an explanation
- Congratulations message when you get everything right
- "Play again" button

### Other
- Light and dark mode, with a smooth transition
- Responsive layout: stacked on mobile, two columns on desktop

## Tech stack

- HTML5, CSS3 (custom properties, Flexbox, Grid, and media queries), and JavaScript, no frameworks
- [Font Awesome](https://fontawesome.com/) (icons)
- [Google Fonts](https://fonts.google.com/) (Inter and JetBrains Mono)

## Project structure

- `index.html`: the five screens (topic, level, countdown, quiz, and result)
- `style/style.css`: layout, themes, and responsive styles
- `scripts/logic.js`: quiz logic (screens, timer, score, and mistakes)
- `scripts/questions.js`: the questions, grouped by topic and level

## Running locally

1. Clone the repository.
2. Open `index.html` in your browser.

There is no build step and no dependencies to install.

## Roadmap

Planned features, not yet implemented:

- Custom badge for a perfect score
- Custom focus styles for keyboard navigation

## Screenshots

<img width="1822" height="1076" alt="nathaliadebona github io_frontend-quiz_1" src="https://github.com/user-attachments/assets/b2fe534d-adf2-4328-a9be-fe99041edbf9" />
<img width="1826" height="1080" alt="nathaliadebona github io_frontend-quiz_2" src="https://github.com/user-attachments/assets/f0d4ea5b-1a19-4142-9d1e-5b6a7102f0c2" />
<img width="1828" height="1078" alt="nathaliadebona github io_frontend-quiz_3" src="https://github.com/user-attachments/assets/b12e8eb7-87d8-4e4a-80c6-e5763b0be55b" />

---

Personal learning project, built by [Nathalia](https://github.com/nathaliadebona).
