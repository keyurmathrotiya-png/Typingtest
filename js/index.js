const typingGround = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const showSentence = document.querySelector('#showSentence');

let startTime, endTime;

const sentences = [
  'The quick brown fox jumps over the lazy dog.',
  'JavaScript makes web pages interactive and dynamic.',
  'Practice typing daily to improve your speed and accuracy.'
];

function calculateTypingSpeed(timeTaken) {
  const textEntered = typingGround.value.trim();
  const words = textEntered === '' ? [] : textEntered.split(/\s+/);
  const wordCount = words.length;
  const wpm = wordCount ? Math.round((wordCount / timeTaken) * 60) : 0;
  score.textContent = `Your typing speed is ${wpm} WPM. You typed ${wordCount} words in ${timeTaken} seconds.`;
}

function endTypingTest() {
  endTime = new Date().getTime();
  const totalTime = (endTime - startTime) / 1000;
  typingGround.disabled = true;
  btn.textContent = 'Start';
  calculateTypingSpeed(totalTime);
  showSentence.textContent = '';
  typingGround.value = '';
}

function startTypingTest() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  showSentence.textContent = sentences[randomIndex];
  typingGround.disabled = false;
  typingGround.value = '';
  typingGround.focus();
  startTime = new Date().getTime();
  btn.textContent = 'Done';
}

btn.addEventListener('click', () => {
  if (btn.textContent.toLowerCase() === 'start') {
    startTypingTest();
  } else {
    endTypingTest();
  }
});