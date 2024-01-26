import 'the-new-css-reset/css/reset.css';
import '../styles/style.css';

const tomSound = document.getElementById('drum-tom-audio');
const tomBtn = document.querySelector('.tom-btn');

const clapSound = document.getElementById('drum-clap-audio');
const clapBtn = document.querySelector('.clap-btn');

const kickSound = document.getElementById('drum-kick-audio');
const kickBtn = document.querySelector('.kick-btn');

const closedhatSound = document.getElementById('drum-closedhat-audio');
const closedhatBtn = document.querySelector('.closedhat-btn');

const openhatSound = document.getElementById('drum-openhat-audio');
const openhatBtn = document.querySelector('.openhat-btn');

const boomSound = document.getElementById('drum-boom-audio');
const boomBtn = document.querySelector('.boom-btn');

const rideSound = document.getElementById('drum-ride-audio');
const rideBtn = document.querySelector('.ride-btn');

const snareSound = document.getElementById('drum-snare-audio');
const snareBtn = document.querySelector('.snare-btn');

const toms = document.querySelectorAll('.drum-tom');
const claps = document.querySelectorAll('.drum-clap');
const kicks = document.querySelectorAll('.drum-kick');
const openhats = document.querySelectorAll('.drum-openhat');
const closedhats = document.querySelectorAll('.drum-closedhat');
const booms = document.querySelectorAll('.drum-boom');
const rides = document.querySelectorAll('.drum-ride');
const snares = document.querySelectorAll('.drum-snare');

const playBtn = document.querySelector('.play');
const stopBtn = document.querySelector('.stop');

const toggleBtns = (list) => {
  list.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.target.classList.contains('play')) {
        e.target.classList.remove('play');
      } else {
        e.target.classList.add('play');
      }
    });
  });
};

const btnLists = [
  toms,
  claps,
  kicks,
  closedhats,
  openhats,
  booms,
  rides,
  snares,
];

btnLists.forEach((list) => toggleBtns(list));

const tempo = 200;

const interate = (list, timing, sound) => {
  list.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('active-btn');
      if (el.classList.contains('play')) {
        sound();
      }
      setTimeout(() => {
        el.classList.remove('active-btn');
      }, timing);
    }, i * timing);
  });
};

const playTom = () => {
  tomSound.currentTime = 0;
  tomSound.play();
};

const playClap = () => {
  clapSound.currentTime = 0;
  clapSound.play();
};

const playKick = () => {
  kickSound.currentTime = 0;
  kickSound.play();
};

const playClosedhat = () => {
  closedhatSound.currentTime = 0;
  closedhatSound.play();
};

const playOpenhat = () => {
  openhatSound.currentTime = 0;
  openhatSound.play();
};

const playBoom = () => {
  boomSound.currentTime = 0;
  boomSound.play();
};

const playRide = () => {
  rideSound.currentTime = 0;
  rideSound.play();
};

const playSnare = () => {
  snareSound.currentTime = 0;
  snareSound.play();
};

tomBtn.addEventListener('click', () => playTom());
clapBtn.addEventListener('click', () => playClap());
kickBtn.addEventListener('click', () => playKick());
closedhatBtn.addEventListener('click', () => playClosedhat());
openhatBtn.addEventListener('click', () => playOpenhat());
boomBtn.addEventListener('click', () => playBoom());
rideBtn.addEventListener('click', () => playRide());
snareBtn.addEventListener('click', () => playSnare());

const playSounds = () => {
  interate(toms, tempo, playTom);
  interate(claps, tempo, playClap);
  interate(kicks, tempo, playKick);
  interate(closedhats, tempo, playClosedhat);
  interate(openhats, tempo, playOpenhat);
  interate(booms, tempo, playBoom);
  interate(rides, tempo, playRide);
  interate(snares, tempo, playSnare);
};

let musicPlaying;

const play = () => {
  musicPlaying = setInterval(playSounds, tempo * 8);
  playBtn.style.display = 'none';
  stopBtn.style.display = 'block';
};

const stop = () => {
  clearInterval(musicPlaying);
  stopBtn.style.display = 'none';
  playBtn.style.display = 'block';
};

console.log('playBtn:', playBtn);
playBtn.addEventListener('click', () => play());
stopBtn.addEventListener('click', () => stop());
