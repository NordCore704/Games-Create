const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const countdownBoard = document.querySelector('.countdown');
const startButton = document.querySelector('.startButton');

let lastHole;
let timeUp = false;
let timeLimit = 30000;
let score = 0;
let countdown;

let pickRandomHole = (holes) => {
  const randomHole = Math.floor(Math.random() * holes.length);
  const hole = holes[randomHole];
  if (hole === lastHole) {
    return pickRandomHole(holes);
  }
  lastHole = hole;
  return hole;
};

let popOut = () => {
  const time = Math.random() * 1800 + 400;
  const hole = pickRandomHole(holes);
  hole.classList.add('up');
  setTimeout(function() {
    hole.classList.remove('up');
    if (!timeUp) popOut();
  },
    time);
};

let startGame = () => {
  countdown = timeLimit/1000;
  scoreBoard.textContent = 0;
  scoreBoard.style.display = 'block';
  countdownBoard.textContent = countdown;
  timeUp = false;
  score = 0;
  popOut();
  setTimeout(function() {
    timeUp = true;
  },
    timeLimit);

  let startCountdown = setInterval(function() {
    countdown -= 1;
    countdownBoard.textContent = countdown;
    if (countdown < 0) {
      countdown = 0;
      clearInterval(startCountdown);
      countdownBoard.textContent = `There goes your time sucker! Thank you for protecting our planet bitch! ${"Ain't"} this a motherfucker`;
    }
  },
    1000);
};

startButton.addEventListener('click', startGame);

function whack(e){
  score++;
  this.style.backgroundImage = 'url("./yoda2.png")';
  this.style.pointerEvents = 'none';
  setTimeout(() => {
    this.style.backgroundImage = 'url("./yoda1.png")';
    this.style.pointerEvents = 'all';
  }, 800);
  scoreBoard.textContent = score;
};
moles.forEach(mole => mole.addEventListener('click', whack));
