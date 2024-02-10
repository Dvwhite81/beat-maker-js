import buildElement from '../helpers';

// Toggle Functions
const toggleExpandIcon = (name) => {
  const expandIcon = document.querySelector(`#${name}-expand-icon`);
  const collapseIcon = document.querySelector(`#${name}-collapse-icon`);

  if (expandIcon.classList.contains('hidden')) {
    expandIcon.classList.remove('hidden');
    collapseIcon.classList.add('hidden');
  } else if (collapseIcon.classList.contains('hidden')) {
    collapseIcon.classList.remove('hidden');
    expandIcon.classList.add('hidden');
  }
};

const toggleMuteBtn = (name) => {
  const volumeIcon = document.querySelector(`#${name}-volume-icon`);
  const muteIcon = document.querySelector(`#${name}-mute-icon`);

  if (volumeIcon.classList.contains('hidden')) {
    volumeIcon.classList.remove('hidden');
    muteIcon.classList.add('hidden');
  } else if (muteIcon.classList.contains('hidden')) {
    muteIcon.classList.remove('hidden');
    volumeIcon.classList.add('hidden');
  }
};

const toggleSelectOpen = (name) => {
  const select = document.querySelector(`#${name}-track-select`);

  if (select.classList.contains('hidden')) {
    select.classList.remove('hidden');
  } else {
    select.classList.add('hidden');
  }
};

// Buttons
const buildExpandCollapseBtn = (name) => {
  const btn = buildElement('button', {
    className: 'btn',
    type: 'button',
  });

  const expandIcon = buildElement('img', {
    id: `${name}-expand-icon`,
    className: 'icon expand-collapse-icon',
  });
  expandIcon.src = '/expand-icon.png';
  expandIcon.alt = 'expand icon';

  const collapseIcon = buildElement('img', {
    id: `${name}-collapse-icon`,
    className: 'hidden icon collapse-icon',
  });
  collapseIcon.src = '/collapse-icon.png';
  collapseIcon.alt = 'collapse icon';

  btn.append(expandIcon, collapseIcon);
  btn.addEventListener('click', () => toggleExpandIcon(name));
  return btn;
};

const buildMuteBtn = (name) => {
  const btn = buildElement('button', {
    id: `${name}-mute-btn`,
    className: 'btn mute-btn',
  });

  const volumeIcon = buildElement('img', {
    id: `${name}-volume-icon`,
    className: 'icon volume-icon',
  });
  volumeIcon.src = '/volume-icon.png';
  volumeIcon.alt = 'volume icon';

  const muteIcon = buildElement('img', {
    id: `${name}-mute-icon`,
    className: 'hidden icon mute-icon',
  });
  muteIcon.src = '/mute-icon.png';
  muteIcon.alt = 'mute icon';

  btn.append(volumeIcon, muteIcon);
  btn.addEventListener('click', () => toggleMuteBtn(name));
  return btn;
};

const buildSelectOpenBtn = (name) => {
  const btn = buildElement('button', {
    className: 'btn select-open-btn',
  });

  const icon = buildElement('img', {
    className: 'icon select-icon',
  });
  icon.src = '/dropdown-icon.png';
  icon.alt = 'dropdown icon';

  btn.append(icon);
  btn.addEventListener('click', () => toggleSelectOpen(name));
  return btn;
};

// Board Title
const buildIconDiv = (name) => {
  const iconDiv = buildElement('div', {
    className: 'title-icon-div',
  });

  const btn = buildExpandCollapseBtn(name);

  iconDiv.append(btn);
  return iconDiv;
};

const buildBoardTitle = (instrument) => {
  const { name, displayName } = instrument;

  const title = buildElement('div', {
    className: 'instrument-title',
  });

  const text = buildElement('h3', {
    className: 'title-text',
    textContent: displayName,
  });

  const iconDiv = buildIconDiv(name);

  title.append(text, iconDiv);
  return title;
};

// Track Controls
const buildTrackLabel = (displayName) => {
  const label = buildElement('p', {
    className: 'track-label',
    textContent: displayName,
  });

  return label;
};

const buildOptionSelect = (choice) => {
  const { name, options } = choice;

  const select = buildElement('ul', {
    id: `${name}-track-select`,
    className: 'hidden select track-select',
  });

  for (const option of options) {
    const { soundName, soundSrc } = option;
    const optionElement = buildElement('li', {
      className: 'select-option',
      textContent: soundName,
    });
    optionElement.value = soundSrc;
    optionElement.addEventListener('click', () => {
      toggleSelectOpen(name);
    });

    select.append(optionElement);
  }

  return select;
};

const buildTrackControl = (choice) => {
  const { name, displayName } = choice;

  const control = buildElement('div', {
    id: `${name}-track-control`,
    className: 'track-control',
  });

  const muteBtn = buildMuteBtn(name);
  const label = buildTrackLabel(displayName);
  const openBtn = buildSelectOpenBtn(name);
  const optionSelect = buildOptionSelect(choice);

  control.append(muteBtn, label, openBtn, optionSelect);
  return control;
};

// Track Beats Section
const buildTrackBeatContainer = (name) => {
  const beatContainer = buildElement('div', {
    id: `${name}-track-squares`,
    className: 'track-squares',
  });

  return beatContainer;
};

// Track
const buildTrack = (choice) => {
  const { name } = choice;

  const track = buildElement('div', {
    id: `${name}-track`,
    className: 'track',
  });

  const control = buildTrackControl(choice);
  const beatContainer = buildTrackBeatContainer(name);

  track.append(control, beatContainer);
  return track;
};

// Board
const buildBoard = (instrument) => {
  const { type, choices } = instrument;

  const board = buildElement('div', {
    id: `${type}-board`,
    className: 'board',
  });

  for (const choice of choices) {
    const track = buildTrack(choice);
    board.append(track);
  }

  return board;
};

// Whole Instrument Section
const buildInstrumentSection = (instrument) => {
  const { type } = instrument;
  console.log('instrument:', instrument);
  console.log('type:', type);

  const section = buildElement('div', {
    id: `${type}-section`,
    className: 'instrument-section',
  });

  const title = buildBoardTitle(instrument);
  const board = buildBoard(instrument);

  section.append(title, board);
  return section;
};

// Container For All Instrument Sections
const buildMainContainer = () => {
  const main = buildElement('div', {
    id: 'main-container',
  });

  return main;
};

export { buildInstrumentSection, buildMainContainer };
