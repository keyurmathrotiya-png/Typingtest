const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "Practice makes perfect when it comes to typing speed.",
  "Typing tests are a fun way to improve your skills.",
  "Focus on accuracy first and speed will follow.",
  "Learning to type faster can save you a lot of time.",
  "Typing is an essential skill in the digital world we live in today."
];
const timeSelect = document.getElementById('timeSelect');
const startBtn = document.getElementById('startBtn');
const testArea = document.getElementById('testArea');
const quoteDisplay = document.getElementById('quote');
const inputArea = document.getElementById('inputArea');
const timerDisplay = document.getElementById('timer');
const results = document.getElementById('results');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
let timer, timeLeft, currentQuote, totalTyped = 0, correctChars = 0;
let lastQuote = "";
function getRandomQuote() {
  let newQuote;
  do {
    newQuote = quotes[Math.floor(Math.random() * quotes.length)];
  } while (newQuote === lastQuote && quotes.length > 1);
  lastQuote = newQuote;
  return newQuote;
}
function startTest() {
  clearInterval(timer);
  totalTyped = 0;
  correctChars = 0;
  results.classList.add('hidden');
  inputArea.value = '';
  inputArea.disabled = false;
  timeLeft = parseInt(timeSelect.value, 10);
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;
  testArea.classList.remove('hidden');
  currentQuote = getRandomQuote();
  quoteDisplay.textContent = currentQuote;
  timer = setInterval(updateTimer, 1000);
  inputArea.focus();
}
function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;
  if (timeLeft <= 0) endTest();
}
function endTest() {
  clearInterval(timer);
  inputArea.disabled = true;
  const typedText = inputArea.value.trim();
  totalTyped = typedText.split(/\s+/).filter(word => word.length > 0).length;
  const originalChars = currentQuote.trim();
  const typedChars = typedText;
  const len = Math.min(originalChars.length, typedChars.length);
  for (let i = 0; i < len; i++) {
    if (typedChars[i] === originalChars[i]) correctChars++;
  }
  const accuracy = originalChars.length > 0 ? Math.round((correctChars / originalChars.length) * 100) : 0;
  const minutes = parseInt(timeSelect.value) / 60;
  const wpm = Math.round(totalTyped / minutes);
  wpmDisplay.textContent = wpm;
  accuracyDisplay.textContent = accuracy;
  results.classList.remove('hidden');
}
startBtn.addEventListener('click', startTest);