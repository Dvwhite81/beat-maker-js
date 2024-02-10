import 'the-new-css-reset/css/reset.css';
import '../styles/main.css';
import initialSetup from './build-functions/setup';
import { INITIAL_SETTINGS } from './helpers';
import { updateSettingsContainer } from './build-functions/settings';
import { updateTracksAfterSettingsChange } from './build-functions/tracks';
// import * as Tone from 'tone';
let [tempo, beatDivision, numBeats, numMeasures] = INITIAL_SETTINGS;

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
