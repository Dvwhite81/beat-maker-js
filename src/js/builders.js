import { getInstrumentSounds } from './instrument-helpers';

const buildElement = (type, args) => {
  const element = document.createElement(type);
  for (const key in args) element[key] = args[key];
  return element;
};

const buildSoundButton = (type, name, soundSrc) => {
  const soundButton = buildElement('div', {
    className: `audio ${type} ${name}-btn`,
  });

  const label = buildElement('p', {
    className: 'sound-btn-label',
    textContent: name,
  });

  const audio = buildElement('audio', {
    id: `${type}-${name}-audio`,
  });

  const source = buildElement('source', {
    src: soundSrc,
  });

  audio.append(source);
  soundButton.append(label, audio);
  return soundButton;
};

const buildButtonSection = (type, choices) => {
  const section = buildElement('div', {
    className: 'instrument-button-section',
    id: `${type}-btns`,
  });

  for (const choice of choices) {
    console.log('typeof choice:', typeof choice);
    const { choiceName, options } = choice;
    // Maybe make an option section
    console.log('choiceName:', choiceName);

    if (options.length > 1) {
      console.log('MORE THAN 1 - CHOICE:', choice);
    }
    for (const option of options) {
      const { soundName, soundSrc } = option;
      const soundBtn = buildSoundButton(type, soundName, soundSrc);
      section.append(soundBtn);
    }
  }

  return section;
};

const buildBoardSquare = (type, name, index) => {
  return buildElement('div', {
    className: `square ${type}-${name} ${name}-${index}`,
  });
};

const buildBoardRow = (type, name, numBeats) => {
  const row = buildElement('div', {
    className: `${type}-${name}-row row`,
  });

  for (let i = 1; i <= numBeats; i++) {
    const square = buildBoardSquare(type, name, i);
    row.append(square);
  }

  return row;
};

const toggleIcons = (element) => {
  const expandIcon = element.querySelector('.expand-icon');
  const collapseIcon = element.querySelector('.collapse-icon');

  if (expandIcon.classList.contains('hidden')) {
    expandIcon.classList.remove('hidden');
    collapseIcon.classList.add('hidden');
  } else {
    expandIcon.classList.add('hidden');
    collapseIcon.classList.remove('hidden');
  }
};

const maximizeDiv = (element) => {
  element.classList.add('selected');
  element.classList.remove('collapsed');
};

const collapseDiv = (element) => {
  element.classList.add('collapsed');
  element.classList.remove('selected');
};

const buildIconDiv = (type) => {
  const iconDiv = buildElement('div', {
    className: 'board-title-icon-div',
  });

  const expandIcon = buildElement('img', {
    className: `expand-icon ${type}-expand`,
    src: '/expand-icon.png',
  });

  const collapseIcon = buildElement('img', {
    className: `collapse-icon ${type}-collapse hidden`,
    src: '/collapse-icon.png',
  });

  expandIcon.addEventListener('click', (e) => {
    const element = e.target.parentElement.parentElement.parentElement;
    maximizeDiv(element);
    toggleIcons(element);
  });

  collapseIcon.addEventListener('click', (e) => {
    const element = e.target.parentElement.parentElement.parentElement;
    collapseDiv(element);
    toggleIcons(element);
  });

  iconDiv.append(expandIcon, collapseIcon);

  return iconDiv;
};

const buildBoardTitle = (type) => {
  const name = type.charAt(0).toUpperCase() + type.slice(1);

  const titleDiv = buildElement('div', {
    className: 'board-title',
  });

  const titleText = buildElement('h3', {
    className: 'board-title-text',
    textContent: name,
  });

  const iconDiv = buildIconDiv(type, name);

  titleDiv.append(titleText, iconDiv);
  return titleDiv;
};

const buildBoardPlayButton = () => {
  const div = buildElement('div', {
    className: 'play-btn',
  });

  const play = buildElement('div', {
    className: 'btn play',
  });

  const stop = buildElement('div', {
    className: 'btn stop',
  });

  div.append(play, stop);

  return div;
};

const buildSoundBoard = (type, choices, numBeats) => {
  const board = buildElement('div', {
    className: `board ${type}-board`,
  });

  for (const choice of choices) {
    console.log('buildSoundBoard choice:', choice);
    const { choiceName, options } = choice;
    console.log('buildSoundBoard name:', choiceName);

    for (const option of options) {
      const { soundName } = option;
      const row = buildBoardRow(type, soundName, numBeats);
      board.append(row);
    }
  }

  const playBtn = buildBoardPlayButton();

  board.append(playBtn);

  return board;
};

const buildInfoBeat = (index) => {
  return buildElement('div', {
    className: 'info-beat',
    textContent: `${index}`,
  });
};

const buildInfoMeasure = (index) => {
  const infoMeasure = buildElement('div', {
    className: 'info-measure',
  });

  const measureLabel = buildElement('p', {
    className: 'info-measure-label',
    textContent: index,
  });

  infoMeasure.append(measureLabel);

  return infoMeasure;
};

const buildInfoBeatRow = (numBeats, numMeasures) => {
  const beatRow = buildElement('div', {
    className: 'info-beat-row',
  });

  const beatLabelDiv = buildElement('div', {
    className: `audio info info-btn`,
  });

  const beatLabel = buildElement('p', {
    className: 'sound-btn-label',
    textContent: 'Beats:',
  });

  beatLabelDiv.append(beatLabel);
  beatRow.append(beatLabelDiv);

  const beatDisplay = buildElement('div', {
    className: 'info-beat-display',
  });

  for (let i = 1; i <= numMeasures; i++) {
    const beatMeasureDisplay = buildElement('div', {
      className: 'info-beat-measure-display',
    });

    for (let j = 1; j <= numBeats; j++) {
      const infoBeat = buildInfoBeat(j);
      beatMeasureDisplay.append(infoBeat);
    }
    beatDisplay.append(beatMeasureDisplay);
  }

  beatRow.append(beatDisplay);

  return beatRow;
};

const buildInfoMeasureRow = (numMeasures) => {
  const measureRow = buildElement('div', {
    className: 'info-measure-row',
  });

  const measureLabelDiv = buildElement('div', {
    className: `audio info info-btn`,
  });

  const measureLabel = buildElement('p', {
    className: 'sound-btn-label',
    textContent: 'Measures:',
  });

  measureLabelDiv.append(measureLabel);
  measureRow.append(measureLabelDiv);

  const measureDisplay = buildElement('div', {
    className: 'info-measure-display',
  });

  measureDisplay.style.display = 'grid';
  measureDisplay.style.gridTemplateColumns = `repeat(${numMeasures}, 1fr)`;

  for (let i = 1; i <= numMeasures; i++) {
    const infoMeasure = buildInfoMeasure(i);
    measureDisplay.append(infoMeasure);
  }

  measureRow.append(measureDisplay);

  return measureRow;
};

const buildInfoSection = (numBeats, numMeasures) => {
  console.log('buildInfoSection numBeats:', numBeats);
  console.log('buildInfoSection numMeasures:', numMeasures);
  const infoSection = buildElement('div', {
    className: 'info-section',
  });

  const infoMeasureRow = buildInfoMeasureRow(numMeasures);
  infoSection.append(infoMeasureRow);

  const infoBeatRow = buildInfoBeatRow(numBeats, numMeasures);
  infoSection.append(infoBeatRow);

  return infoSection;
};

const buildInstrumentSection = (type, beatDivision, numBeats, numMeasures) => {
  console.log('buildInstrumentSection beatDivision:', beatDivision);
  console.log('buildInstrumentSection numBeats:', numBeats);
  console.log('buildInstrumentSection numMeasures:', numMeasures);
  const typeName = type.type;
  const wholeSection = buildElement('div', {
    className: `instrument ${typeName}-instrument collapsed`,
  });

  const section = buildElement('div', {
    className: `${typeName}-section instrument-section`,
  });

  const titleDiv = buildBoardTitle(typeName);
  wholeSection.append(titleDiv);

  const bottomDiv = buildElement('div', {
    className: 'outer-info-section',
  });

  const infoSection = buildInfoSection(numBeats, numMeasures);
  bottomDiv.append(infoSection);

  const choices = getInstrumentSounds(typeName);
  console.log('choices:', choices);

  const btnSection = buildButtonSection(typeName, choices);

  const totalBeats = numBeats * numMeasures;
  const board = buildSoundBoard(typeName, choices, totalBeats);

  section.append(btnSection, board);
  bottomDiv.append(section);

  wholeSection.append(bottomDiv);
  return wholeSection;
};

const buildSetupInput = (labelText, value, func) => {
  console.log('INPUT value:', value);
  const inputDiv = buildElement('div', {
    className: 'setup-input-div',
  });

  const label = buildElement('label', {
    className: 'setup-input-label',
    textContent: labelText,
  });

  const input = buildElement('input', {
    type: 'number',
    className: 'setup-input',
    value,
  });

  input.addEventListener('change', ({ target }) => func(target.value));

  inputDiv.append(label, input);
  return inputDiv;
};

const buildSetupSection = (
  tempo,
  setTempo,
  beatDivision,
  setBeatDivision,
  numBeats,
  setNumBeats,
  numMeasures,
  setNumMeasures,
) => {
  const setupSection = document.querySelector('#setup-container');

  const tempoInput = buildSetupInput('Tempo: ', tempo, setTempo);
  const beatDivisionInput = buildSetupInput(
    'Beat Division: ',
    beatDivision,
    setBeatDivision,
  );
  const beatsInput = buildSetupInput(
    'Beats Per Measure: ',
    numBeats,
    setNumBeats,
  );
  const measuresInput = buildSetupInput(
    'Total Measures: ',
    numMeasures,
    setNumMeasures,
  );

  setupSection.append(tempoInput, beatDivisionInput, beatsInput, measuresInput);
};

export { buildInstrumentSection, buildSetupSection };
