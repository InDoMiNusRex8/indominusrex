let quizData = [];
let currentIndex = 0;
let streak = 0; // Streak counter

// Load CSV data
async function loadQuizData() {
    const response = await fetch('your-doushi-list.csv'); // Replace with your file's path
    const text = await response.text();
    quizData = text.split('\n').map(row => row.split(','));

    // Shuffle the quiz data
    shuffleArray(quizData);

    startQuiz();
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    if (quizData.length === 0) {
        document.getElementById('question').textContent = 'No data available.';
        return;
    }
    showQuestion();
}

function showQuestion() {
    const [doushi, yomikata, translation] = quizData[currentIndex];
    document.getElementById('question').textContent = ` ${doushi} (${translation})`;
    document.getElementById('feedback').textContent = '';
    document.getElementById('answer').value = '';
}

function updateStreakCounter() {
    document.getElementById('streak-counter').textContent = `Streak: ${streak}`;
}

document.getElementById('submit').addEventListener('click', () => {
    const userAnswer = document.getElementById('answer').value.trim();
    const correctAnswer = quizData[currentIndex][1]; // Yomikata
    if (userAnswer === correctAnswer) {
        streak++;
        document.getElementById('feedback').textContent = 'yak benar!';
    } else {
        streak = 0; // Reset streak on wrong answer
        document.getElementById('feedback').textContent = `eh tholol... yang bener ${correctAnswer} cuy`;
    }
    updateStreakCounter(); // Update streak display
    currentIndex = (currentIndex + 1) % quizData.length;
    setTimeout(showQuestion, 2000);
});

loadQuizData();
