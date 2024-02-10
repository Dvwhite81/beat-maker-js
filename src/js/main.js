import 'the-new-css-reset/css/reset.css';
import '../styles/style.css';
import initialSetup from './build-functions/setup';
import { INITIAL_SETTINGS, INSTRUMENTS, handleMainGrid } from './helpers';
import { buildInstrumentSection } from './build-functions/boards';
// import * as Tone from 'tone';
let [tempo, beatDivision, numBeats, numMeasures] = INITIAL_SETTINGS;
const allInstruments = INSTRUMENTS;

export const addInstrument = (instrumentType) => {
  const newInstrument = INSTRUMENTS.find((i) => i.type === instrumentType);
  console.log('newInstrument:', newInstrument);
  const section = buildInstrumentSection(newInstrument);
  console.log('section:', section);
  document.querySelector('#main-container').append(section);
  handleMainGrid();
};

export const removeInstrument = (instrumentType) => {
  const instrumentSection = document.querySelector(
    `#${instrumentType}-section`,
  );
  instrumentSection.remove();
};

const setTempo = (num) => (tempo = num);
const setBeatDivision = (num) => (beatDivision = num);
const setNumBeats = (num) => (numBeats = num);
const setNumMeasures = (num) => (numMeasures = num);

if (beatDivision === 99) {
  setTempo(0);
  setBeatDivision(0);
  setNumBeats(0);
  setNumMeasures(0);
}

initialSetup(tempo, beatDivision, numBeats, numMeasures, allInstruments);
console.log('allInstruments:', allInstruments);
