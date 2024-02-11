import buildElement, { handleOtherBoardOnMinimize } from '../helpers';
import { removeInstrument } from '../music-functions/functions';
import buildTrack from './tracks';

// Toggle Functions
const toggleOtherSections = (type, isSelecting) => {
  const mainContainer = document.querySelector('#main-container');
  const otherSections = Array.from(
    document.querySelectorAll('.instrument-section'),
  ).filter((section) => section.id !== `${type}-section`);

  if (isSelecting) {
    mainContainer.classList.add('single-view');
    otherSections.forEach((section) => section.classList.add('hidden'));
  } else {
    mainContainer.classList.remove('single-view');
    otherSections.forEach((section) => section.classList.remove('hidden'));
  }
};

const toggleExpandIcon = (type) => {
  const instrumentSection = document.querySelector(`#${type}-section`);
  const expandIcon = document.querySelector(`#${type}-expand-icon`);
  const collapseIcon = document.querySelector(`#${type}-collapse-icon`);

  if (expandIcon.classList.contains('hidden')) {
    expandIcon.classList.remove('hidden');
    collapseIcon.classList.add('hidden');
    instrumentSection.classList.remove('selected');
    // false for not selecting
    toggleOtherSections(type, false);
  } else if (collapseIcon.classList.contains('hidden')) {
    collapseIcon.classList.remove('hidden');
    expandIcon.classList.add('hidden');
    instrumentSection.classList.add('selected');
    // true for selecting
    toggleOtherSections(type, true);
  }
};

const toggleSectionMinimized = (type, btn) => {
  const board = document.querySelector(`#${type}-board`);

  if (board.classList.contains('hidden')) {
    board.classList.remove('hidden');
  } else {
    board.classList.add('hidden');
  }

  // Handle other board - make bigger
  handleOtherBoardOnMinimize(type, btn);
};

const toggleMinimizeIcon = (type, btn) => {
  const addIcon = document.querySelector(`#${type}-title-add-icon`);
  const minusIcon = document.querySelector(`#${type}-title-minus-icon`);

  if (addIcon.classList.contains('hidden')) {
    addIcon.classList.remove('hidden');
    minusIcon.classList.add('hidden');
  } else if (minusIcon.classList.contains('hidden')) {
    minusIcon.classList.remove('hidden');
    addIcon.classList.add('hidden');
  }

  toggleSectionMinimized(type, btn);
};

// Buttons
const buildRemoveBtn = (type) => {
  const btn = buildElement('button', {
    className: 'btn',
    type: 'button',
  });

  const removeIcon = buildElement('img', {
    id: `${type}-remove-icon`,
    className: 'icon remove-icon',
  });
  removeIcon.src = '/remove-icon.png';
  removeIcon.alt = 'remove icon';

  btn.append(removeIcon);
  btn.addEventListener('click', () => removeInstrument(type));

  return btn;
};

const buildMinimizeBtn = (type) => {
  const btn = buildElement('button', {
    className: 'btn',
    type: 'button',
  });

  const addIcon = buildElement('img', {
    id: `${type}-title-add-icon`,
    className: 'hidden icon add-icon',
  });
  addIcon.src = '/add-icon.png';
  addIcon.alt = 'add icon';

  const minusIcon = buildElement('img', {
    id: `${type}-title-minus-icon`,
    className: 'icon minus-icon',
  });
  minusIcon.src = '/minus-icon.png';
  minusIcon.alt = 'minus icon';

  btn.append(addIcon, minusIcon);
  btn.addEventListener('click', () => toggleMinimizeIcon(type, btn));

  return btn;
};

const buildExpandCollapseBtn = (type) => {
  const btn = buildElement('button', {
    className: 'btn',
    type: 'button',
  });

  const expandIcon = buildElement('img', {
    id: `${type}-expand-icon`,
    className: 'icon expand-collapse-icon',
  });
  expandIcon.src = '/expand-icon.png';
  expandIcon.alt = 'expand icon';

  const collapseIcon = buildElement('img', {
    id: `${type}-collapse-icon`,
    className: 'hidden icon collapse-icon',
  });
  collapseIcon.src = '/collapse-icon.png';
  collapseIcon.alt = 'collapse icon';

  btn.append(expandIcon, collapseIcon);
  btn.addEventListener('click', () => toggleExpandIcon(type));
  return btn;
};

// Board Title
const buildLeftIconDiv = (type) => {
  const iconDiv = buildElement('div', {
    className: 'left-title-icon-div',
  });

  const removeBtn = buildRemoveBtn(type);

  const minimizeBtn = buildMinimizeBtn(type);

  iconDiv.append(removeBtn, minimizeBtn);
  return iconDiv;
};

const buildRightIconDiv = (type) => {
  const iconDiv = buildElement('div', {
    className: 'right-title-icon-div',
  });

  const btn = buildExpandCollapseBtn(type);

  iconDiv.append(btn);
  return iconDiv;
};

const buildBoardTitle = (instrument) => {
  const { type, displayName } = instrument;

  const title = buildElement('div', {
    className: 'instrument-title',
  });

  const text = buildElement('h3', {
    className: 'title-text',
    textContent: displayName,
  });

  const leftIconDiv = buildLeftIconDiv(type);
  const rightIconDiv = buildRightIconDiv(type);

  title.append(leftIconDiv, text, rightIconDiv);
  return title;
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
