import buildElement from '../helpers';
import { getAllSettings } from '../main';

const toggleSquareSelected = (square) => {
  if (square.classList.contains('play')) {
    square.classList.remove('play');
  } else {
    square.classList.add('play');
  }
};

const buildSquare = (measureIndex, beatIndex, divisionIndex) => {
  const square = buildElement('div', {
    className: 'square',
  });

  square.setAttribute('data-measure', measureIndex);
  square.setAttribute('data-beat', beatIndex);
  square.setAttribute('data-division', divisionIndex);

  square.addEventListener('click', () => {
    toggleSquareSelected(square);
  });

  return square;
};

const buildBeatSection = (measureIndex, beatIndex, beatDivision) => {
  const beatSection = buildElement('div', {
    className: 'beat-section',
  });

  for (let divisionIndex = 1; divisionIndex <= beatDivision; divisionIndex++) {
    const square = buildSquare(measureIndex, beatIndex, divisionIndex);
    beatSection.append(square);
  }

  return beatSection;
};

const buildMeasureSection = (measureIndex, numBeats, beatDivision) => {
  const measureSection = buildElement('div', {
    className: 'measure-section',
  });

  for (let beatIndex = 1; beatIndex <= numBeats; beatIndex++) {
    const beat = buildBeatSection(measureIndex, beatIndex, beatDivision);
    measureSection.append(beat);
  }

  return measureSection;
};

const buildTrackSquares = () => {
  const [beatDivision, numBeats, numMeasures] = getAllSettings();
  console.log(
    'buildSquares beatDivision, numBeats, numMeasures:',
    beatDivision,
    numBeats,
    numMeasures,
  );
  const measures = [];

  for (let measureIndex = 1; measureIndex <= numMeasures; measureIndex++) {
    const measure = buildMeasureSection(measureIndex, numBeats, beatDivision);
    measures.push(measure);
  }

  return measures;
};

export default buildTrackSquares;
