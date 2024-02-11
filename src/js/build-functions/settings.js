import buildElement, {
  INITIAL_SETTINGS,
  updateInstrumentSelect,
} from '../helpers';
import { openSettingsModal } from './modal';

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

// Dropdown select
export const buildAddInstrumentSelect = () => {
  const select = buildElement('ul', {
    id: 'add-instrument-select',
    className: 'hidden select add-instrument-select',
  });

  updateInstrumentSelect(select);

  return select;
};

// Settings
const buildSettingsDiv = (setting) => {
  const { name, labelText } = setting;

  const div = buildElement('div', {
    className: 'settings-div',
  });

  const label = buildElement('p', {
    className: 'settings-text',
    textContent: labelText,
  });

  const display = buildElement('p', {
    id: `${name}-display`,
    className: 'settings-display',
  });

  div.append(label, display);
  return div;
};

// Whole container
const buildSettingsContainer = () => {
  const settingsContainer = buildElement('div', {
    id: 'settings-container',
  });

  const settingsBtn = buildSettingsBtn();
  settingsContainer.append(settingsBtn);

  for (const setting of INITIAL_SETTINGS) {
    const div = buildSettingsDiv(setting);
    settingsContainer.append(div);
  }

  const addInstrumentBtn = buildAddInstrumentBtn();
  const instrumentSelect = buildAddInstrumentSelect();

  settingsContainer.append(addInstrumentBtn, instrumentSelect);

  return settingsContainer;
};

const updateSettingsContainer = (...args) => {
  const displays = document.querySelectorAll('.settings-display');

  for (let i = 0; i < displays.length; i++) {
    displays[i].textContent = args[i].value;
  }
};

export { buildSettingsContainer, updateSettingsContainer };
