import 'the-new-css-reset/css/reset.css';
import '../styles/main.css';
import initialSetup from './build-functions/setup';
import { INITIAL_SETTINGS } from './helpers';
import { updateSettingsContainer } from './build-functions/settings';
import { updateTracksAfterSettingsChange } from './build-functions/tracks';
// import * as Tone from 'tone';
let [tempo, beatDivision, numBeats, numMeasures] = INITIAL_SETTINGS;
const timing = (60000 / tempo.value) * (1 / beatDivision.value);
const currentIndex = { measure: 1, beat: 1, division: 1 };
let isPlaying = false;
let loopInterval;

const increaseDivision = () => {
  currentIndex.division++;
};

const increaseBeat = () => {
  currentIndex.beat++;
  currentIndex.division = 1;
};

const increaseMeasure = () => {
  currentIndex.measure++;
  currentIndex.beat = 1;
  currentIndex.division = 1;
};

const resetIndex = () => {
  currentIndex.measure = 1;
  currentIndex.beat = 1;
  currentIndex.division = 1;
};

const iterateBeats = () => {
  const bd = beatDivision.value;
  const nb = numBeats.value;
  const nm = numMeasures.value;

  if (currentIndex.division + 1 > bd) {
    if (currentIndex.beat + 1 > nb) {
      if (currentIndex.measure + 1 <= nm) {
        console.log('increase measure');
        console.log('currentIndex:', currentIndex);
        increaseMeasure();
      } else {
        console.log('restart loop');
        console.log('currentIndex:', currentIndex);
      }
    } else {
      console.log('increase beat');
      console.log('currentIndex:', currentIndex);
      increaseBeat();
    }
  } else {
    console.log('increase division');
    console.log('currentIndex:', currentIndex);
    increaseDivision();
  }
};

const iterate = () => {
  console.log('iterate');
  const totalBeats = beatDivision.value * numBeats.value * numMeasures.value;
  resetIndex();
  console.log('totalBeats:', totalBeats);
  for (let i = 1; i <= totalBeats; i++) {
    // eslint-disable-next-line no-loop-func
    setTimeout(() => {
      if (isPlaying) {
        iterateBeats();
      }
    }, timing * i);
  }
};

export const play = () => {
  console.log('play');
  isPlaying = true;
  console.log('isPlaying:', isPlaying);
  iterate();
  const totalBeats = beatDivision.value * numBeats.value * numMeasures.value;
  loopInterval = setInterval(iterate, timing * totalBeats);
};

export const stop = () => {
  isPlaying = false;
  clearInterval(loopInterval);
};

export const getAllSettings = () => {
  const settings = [beatDivision, numBeats, numMeasures];
  return settings.map((s) => s.value);
};

const tracksNeedUpdated = (newT, newBD, newNB, newNM) => {
  console.log('checking');
  return (
    beatDivision.value !== newBD ||
    numBeats.value !== newNB ||
    numMeasures.value !== newNM
  );
};

export const setAllSettings = (newT, newBD, newNB, newNM) => {
  const needUpdate = tracksNeedUpdated(newT, newBD, newNB, newNM);

  tempo = { ...tempo, value: newT };
  beatDivision = { ...beatDivision, value: newBD };
  numBeats = { ...numBeats, value: newNB };
  numMeasures = { ...numMeasures, value: newNM };

  updateSettingsContainer(tempo, beatDivision, numBeats, numMeasures);

  if (needUpdate) {
    updateTracksAfterSettingsChange();
  }
};

initialSetup(tempo, beatDivision, numBeats, numMeasures);
