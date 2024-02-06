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
};

const collapseDiv = (element) => {
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

const buildInfoMeasure = (numBeats) => {
  const infoMeasure = buildElement('div', {
    className: 'info-measure',
  });

  for (let i = 1; i <= numBeats; i++) {
    const infoBeat = buildInfoBeat(i);
    infoMeasure.append(infoBeat);
  }

  return infoMeasure;
};

const buildInfoRow = (numBeats, numMeasures) => {
  const row = buildElement('div', {
    className: 'info-row row',
  });

  for (let i = 1; i <= numMeasures; i++) {
    const infoMeasure = buildInfoMeasure(numBeats);
    row.append(infoMeasure);
  }

  return row;
};

const buildInfoSection = (numBeats, numMeasures) => {
  const infoSection = buildElement('div', {
    className: 'info-section',
  });

  const infoLabel = buildElement('div', {
    className: `audio info info-btn`,
  });

  const label = buildElement('p', {
    className: 'sound-btn-label',
    textContent: 'Measures:',
  });

  infoLabel.append(label);
  infoSection.append(infoLabel);

  const infoRow = buildInfoRow(numBeats, numMeasures);
  infoSection.append(infoRow);

  return infoSection;
};

const buildInstrumentSection = (type, numBeats, numMeasures) => {
  console.log('buildInstrumentSection numBeats:', numBeats);
  console.log('buildInstrumentSection numMeasures:', numMeasures);
  const typeName = type.type;
  const wholeSection = buildElement('div', {
    className: `instrument ${typeName}-instrument`,
  });

  const section = buildElement('div', {
    className: `${typeName}-section instrument-section`,
  });

  const titleDiv = buildBoardTitle(typeName);
  wholeSection.append(titleDiv);

  const infoSection = buildInfoSection(numBeats, numMeasures);
  wholeSection.append(infoSection);

  const choices = getInstrumentSounds(typeName);
  console.log('choices:', choices);

  const btnSection = buildButtonSection(typeName, choices);

  const totalBeats = numBeats * numMeasures;
  const board = buildSoundBoard(typeName, choices, totalBeats);

  section.append(btnSection, board);
  wholeSection.append(section);
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
  numBeats,
  setNumBeats,
  numMeasures,
  setNumMeasures,
) => {
  const setupSection = document.querySelector('#setup-container');

  const tempoInput = buildSetupInput('Tempo: ', tempo, setTempo);
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

  setupSection.append(tempoInput, beatsInput, measuresInput);
};

export { buildInstrumentSection, buildSetupSection };
