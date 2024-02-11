import buildElement, { updateInstrumentSelect } from '../helpers';
import { buildAddInstrumentSelect, buildSettingsContainer } from './settings';
import { openSettingsModal } from './modal';
import buildPlayBtn from './play-btn';

// Toggle Functions
export const toggleInstrumentSelectOpen = () => {
  const select = document.querySelector('#add-instrument-select');
  const addIcon = document.querySelector('#settings-add-icon');
  const minusIcon = document.querySelector('#settings-minus-icon');

  if (select.classList.contains('hidden')) {
    updateInstrumentSelect(select);
    select.classList.remove('hidden');
    minusIcon.classList.remove('hidden');
    addIcon.classList.add('hidden');
  } else {
    select.classList.add('hidden');
    minusIcon.classList.add('hidden');
    addIcon.classList.remove('hidden');
  }
};

const toggleNavDisplay = () => {
  const settingsContainer = document.querySelector('#settings-container');

  if (settingsContainer.classList.contains('hidden')) {
    settingsContainer.classList.remove('hidden');
  } else {
    settingsContainer.classList.add('hidden');
  }
};

// Buttons
const buildSettingsBtn = () => {
  const btn = buildElement('btn', {
    id: 'edit-settings-btn',
    className: 'btn tooltip',
    type: 'button',
  });

  const tooltiptext = buildElement('span', {
    className: 'tooltiptext',
    textContent: 'Edit Settings',
  });

  const icon = buildElement('img', {
    className: 'icon settings-icon',
  });
  icon.src = '/gear-icon.png';
  icon.alt = 'gear icon';

  btn.append(tooltiptext, icon);

  btn.addEventListener('mouseenter', toggleNavDisplay);
  btn.addEventListener('mouseleave', toggleNavDisplay);
  btn.addEventListener('click', openSettingsModal);
  return btn;
};

const buildAddInstrumentBtn = () => {
  const btn = buildElement('btn', {
    id: 'add-instrument-btn',
    className: 'btn tooltip',
    type: 'button',
  });

  const tooltiptext = buildElement('span', {
    className: 'tooltiptext',
    textContent: 'Add Instrument',
  });

  const addIcon = buildElement('img', {
    id: 'settings-add-icon',
    className: 'icon add-icon',
  });
  addIcon.src = '/add-icon.png';
  addIcon.alt = 'add icon';

  const minusIcon = buildElement('img', {
    id: 'settings-minus-icon',
    className: 'hidden icon minus-icon',
  });
  minusIcon.src = '/minus-icon.png';
  minusIcon.alt = 'minus icon';

  btn.append(tooltiptext, addIcon, minusIcon);

  btn.addEventListener('click', toggleInstrumentSelectOpen);
  return btn;
};

const buildNavButtonsContainer = () => {
  const btnContainer = buildElement('div', {
    id: 'nav-buttons-container',
  });

  const settingsBtn = buildSettingsBtn();
  const playBtn = buildPlayBtn();
  const addInstrumentBtn = buildAddInstrumentBtn();
  const instrumentSelect = buildAddInstrumentSelect();

  btnContainer.append(settingsBtn, playBtn, addInstrumentBtn, instrumentSelect);
  return btnContainer;
};

const buildNavbar = () => {
  const navbar = buildElement('div', {
    id: 'navbar',
  });

  const navButtonsContainer = buildNavButtonsContainer();
  const settingsContainer = buildSettingsContainer();

  navbar.append(navButtonsContainer, settingsContainer);
  return navbar;
};

export default buildNavbar;
