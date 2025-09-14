const startBtn = document.getElementById('startBtn');
const timeSelect = document.getElementById('timeSelect');
const testArea = document.getElementById('testArea');
const inputArea = document.getElementById('inputArea');
const quoteEl = document.getElementById('quote');
const timerEl = document.getElementById('timer');
const results = document.getElementById('results');
const wpmEl = document.getElementById('wpm');
const accuracyEl = document.getElementById('accuracy');

let timeLeft, timer, currentQuote, totalTyped, correctTyped;

const quotes = [
    "The quick brown fox jumps over the lazy dog.",
    "Practice makes perfect when it comes to typing speed.",
    "Typing tests are a fun way to improve your skills.",
    "Focus on accuracy first and speed will follow.",
    "Learning to type faster can save you a lot of time.",
    "Typing is an essential skill in the digital world we live in today.",
    "Consistency is the key to improving your typing performance.",
    "Many professionals take typing tests to assess their speed and accuracy.",
    "Typing faster can make you more productive at work or school.",
    "Even a few minutes of practice daily can improve your typing ability.",
    "Accuracy matters more than speed in the beginning stages of learning.",
    "Challenge yourself with longer paragraphs to build stamina.",
    "Typing skills can make writing essays and emails much quicker.",
    "A comfortable keyboard setup can improve your speed dramatically.",
    "Using all ten fingers helps distribute the workload evenly.",
    "Look at the screen, not the keyboard, to avoid slowing down.",
    "Mistakes happen—focus on maintaining a steady rhythm.",
    "Typing is a life skill that pays off in almost every profession.",
    "Games and typing races can make practice more enjoyable.",
    "Over time, your typing speed will improve naturally with patience.",
    "Technology evolves rapidly, and typing efficiently can help you stay ahead in your studies or career.",
    "Rainy afternoons are perfect for reading books or practicing your typing with challenging texts.",
    "The importance of clear communication cannot be overstated, especially in professional emails and reports.",
    "Developing good typing habits early on can save you hours of frustration later.",
    "Many job applications now include a typing speed assessment as part of the interview process.",
    "In competitive typing races, maintaining accuracy often beats raw speed.",
    "Your typing speed can influence how productive you are when writing essays or coding.",
    "Practicing with different kinds of paragraphs prevents you from memorizing specific sentences.",
    "Online typing platforms often provide leaderboards to motivate participants to improve.",
    "Switching between devices like laptops and tablets may affect your typing accuracy.",
    "Typing without looking at the keyboard is called touch typing, and it is a valuable skill.",
    "A steady rhythm while typing will help reduce errors and improve your words per minute.",
    "Even professional writers sometimes practice typing to maintain their skills.",
    "Proper posture and wrist positioning can prevent strain during long typing sessions.",
    "Typing practice is more effective when you focus on both speed and correctness.",
    "Some people find that listening to music helps them type faster and stay relaxed.",
    "Short practice sessions every day are better than occasional long practice sessions.",
    "Typing accurately on a mechanical keyboard can feel satisfying and improve performance.",
    "The ability to type quickly is especially useful for programmers and data entry specialists.",
    "Typing competitions can be a fun way to challenge your friends or coworkers.",
    "Overcoming typing mistakes requires patience, focus, and consistent effort.",
    "Good keyboard lighting can make it easier to type in low-light environments.",
    "Many schools now include typing lessons as part of their curriculum.",
    "Focusing on the screen instead of your hands helps build muscle memory.",
    "Typing different styles of text—like stories or technical documents—improves versatility.",
    "High-speed internet has made online typing games popular worldwide.",
    "Typing faster can give you a competitive edge in timed exams or work tasks.",
    "Practicing with random paragraphs simulates real-world typing scenarios better.",
    "Typing well is a foundational skill for digital communication in any field.",
    "Consistency and practice are the real keys to mastering typing speed."
];

function startTest() {
  // Reset values
  timeLeft = parseInt(timeSelect.value);
  totalTyped = 0;
  correctTyped = 0;
  results.classList.add('hidden');
  inputArea.value = "";
  inputArea.disabled = false;
  inputArea.focus();
  currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = currentQuote;
  testArea.classList.remove('hidden');
  timerEl.textContent = `Time Left: ${timeLeft}s`;
  if (timer) clearInterval(timer);

  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time Left: ${timeLeft}s`;
    if (timeLeft <= 0) endTest();
  }, 1000);
}

function endTest() {
  clearInterval(timer);
  inputArea.disabled = true;
  const typedText = inputArea.value.trim();
  const typedWords = typedText.split(/\s+/).filter(w => w).length;
  const quoteWords = currentQuote.split(/\s+/).length;
  const accuracy = Math.min(100, Math.round((typedWords / quoteWords) * 100));
  wpmEl.textContent = Math.round(typedWords / (parseInt(timeSelect.value) / 60));
  accuracyEl.textContent = accuracy;
  results.classList.remove('hidden');
}

startBtn.addEventListener('click', startTest);