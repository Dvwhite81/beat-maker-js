import buildElement, {
  INITIAL_SETTINGS,
  getAvailableInstruments,
} from '../helpers';
import { addInstrument } from '../main';
import { openModal } from './modal';

// Toggle Functions
const toggleInstrumentSelectOpen = () => {
  const select = document.querySelector('#add-instrument-select');
  const addIcon = document.querySelector('#add-icon');
  const minusIcon = document.querySelector('#minus-icon');

  if (select.classList.contains('hidden')) {
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
    className: 'btn',
    type: 'button',
  });

  const icon = buildElement('img', {
    className: 'icon settings-icon',
  });
  icon.src = '/gear-icon.png';
  icon.alt = 'gear icon';

  btn.append(icon);

  btn.addEventListener('click', openModal);
  return btn;
};

const buildAddInstrumentBtn = () => {
  const btn = buildElement('btn', {
    id: 'add-instrument-btn',
    className: 'btn',
    type: 'button',
  });

  const addIcon = buildElement('img', {
    id: 'add-icon',
    className: 'icon add-icon',
  });
  addIcon.src = '/add-icon.png';
  addIcon.alt = 'add icon';

  const minusIcon = buildElement('img', {
    id: 'minus-icon',
    className: 'hidden icon minus-icon',
  });
  minusIcon.src = '/minus-icon.png';
  minusIcon.alt = 'minus icon';

  btn.append(addIcon, minusIcon);

  btn.addEventListener('click', toggleInstrumentSelectOpen);
  return btn;
};

// Dropdown select
const buildAddInstrumentSelect = () => {
  const select = buildElement('ul', {
    id: 'add-instrument-select',
    className: 'hidden select add-instrument-select',
  });

  const availableInstruments = getAvailableInstruments();
  console.log('available:', availableInstruments);
  for (const instrument of availableInstruments) {
    const { type, displayName } = instrument;
    const optionElement = buildElement('li', {
      className: 'select-option',
      textContent: displayName,
    });

    optionElement.addEventListener('click', () => {
      toggleInstrumentSelectOpen();
      addInstrument(type);
      optionElement.remove();
    });

    select.append(optionElement);
  }

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
