import buildElement from '../helpers';
import { getAllSettings } from '../main';

const toggleSquareSelected = (square) => {
  if (square.classList.contains('play')) {
    square.classList.remove('play');
  } else {
    square.classList.add('play');
  }
};

const buildSquare = (name, measureIndex, beatIndex, divisionIndex) => {
  const square = buildElement('div', {
    className: `square ${name}-square`,
  });

  square.setAttribute('data-measure', measureIndex);
  square.setAttribute('data-beat', beatIndex);
  square.setAttribute('data-division', divisionIndex);

  square.addEventListener('click', () => {
    toggleSquareSelected(square);
  });

  return square;
};

const buildBeatSection = (name, measureIndex, beatIndex, beatDivision) => {
  const beatSection = buildElement('div', {
    className: 'beat-section',
  });

  for (let divisionIndex = 1; divisionIndex <= beatDivision; divisionIndex++) {
    const square = buildSquare(name, measureIndex, beatIndex, divisionIndex);
    beatSection.append(square);
  }

  return beatSection;
};

const buildMeasureSection = (name, measureIndex, numBeats, beatDivision) => {
  const measureSection = buildElement('div', {
    className: 'measure-section',
  });

  for (let beatIndex = 1; beatIndex <= numBeats; beatIndex++) {
    const beat = buildBeatSection(name, measureIndex, beatIndex, beatDivision);
    measureSection.append(beat);
  }

  return measureSection;
};

const buildTrackSquares = (name) => {
  const [beatDivision, numBeats, numMeasures] = getAllSettings();
  const measures = [];

  for (let measureIndex = 1; measureIndex <= numMeasures; measureIndex++) {
    const measure = buildMeasureSection(
      name,
      measureIndex,
      numBeats,
      beatDivision,
    );
    measures.push(measure);
  }

  return measures;
};

export default buildTrackSquares;
