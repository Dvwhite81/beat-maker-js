import 'the-new-css-reset/css/reset.css';
import '../styles/style.css';
// import * as Tone from 'tone';
import { INSTRUMENTS } from './instrument-helpers';
import { buildSetupSection, buildInstrumentSection } from './builders';

let tempo = 130;
console.log('TEMPO START:', tempo);
const setTempo = (newTempo) => {
  console.log('setTempo');
  tempo = newTempo;
  console.log('TEMPO MIDDLE:', tempo);
};
let numBeats = 4;
const setNumBeats = (newNumBeats) => (numBeats = newNumBeats);
let numMeasures = 8;
const setNumMeasures = (newNumMeasures) => (numMeasures = newNumMeasures);

const typeRows = [];
const allSounds = [];

buildSetupSection(
  tempo,
  setTempo,
  numBeats,
  setNumBeats,
  numMeasures,
  setNumMeasures,
);

const musicSection = document.querySelector('#all-instrument-sections');

for (const type of INSTRUMENTS) {
  const instrumentSection = buildInstrumentSection(type, numBeats, numMeasures);
  musicSection.append(instrumentSection);

  for (const choice of type.choices) {
    const typeName = type.type;
    const { options } = choice;

    const choiceRow = [];

    for (const option of options) {
      const sound = document.querySelector(
        `#${typeName}-${option.soundName}-audio`,
      );
      const btn = document.querySelector(`.${option.soundName}-btn`);

      const playChoiceSound = () => {
        sound.currentTime = 0;
        sound.play();
      };

      allSounds.push(playChoiceSound);
      btn.addEventListener('click', () => playChoiceSound());
      choiceRow.push(btn);
    }
    typeRows.push(choiceRow);
  }
}

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

const allSquares = document.querySelectorAll('.square');
toggleBtns(allSquares);

const interate = (row, timing, sound) => {
  console.log('iterate');
  const { children } = row;
  const squares = Array.from(children);
  squares.forEach((el, i) => {
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

const allRows = document.querySelectorAll('.board .row');

const playSounds = () => {
  console.log('TEMPO playSounds:', tempo);
  for (let i = 0; i < allRows.length; i++) {
    interate(allRows[i], tempo, allSounds[i]);
  }
};

let musicPlaying;

const play = () => {
  console.log('play');
  playSounds();
  musicPlaying = setInterval(playSounds, tempo * 32);
  playBtn.style.display = 'none';
  stopBtn.style.display = 'block';
};

const stop = () => {
  clearInterval(musicPlaying);
  stopBtn.style.display = 'none';
  playBtn.style.display = 'block';
};

playBtn.addEventListener('click', () => play());
stopBtn.addEventListener('click', () => stop());

/*
const synthBtn = document.getElementById('synth');
const synth = new Tone.AMSynth().toDestination();

const playC = () => {
  console.log('C');
  synth.triggerAttackRelease('G2', '2n');
};

synthBtn.addEventListener('click', playC);
*/
