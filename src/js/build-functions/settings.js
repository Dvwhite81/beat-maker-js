import buildElement, {
  INITIAL_SETTINGS,
  updateInstrumentSelect,
} from '../helpers';

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
    className: 'hidden',
  });

  for (const setting of INITIAL_SETTINGS) {
    const div = buildSettingsDiv(setting);
    settingsContainer.append(div);
  }

  return settingsContainer;
};

const updateSettingsContainer = (...args) => {
  const displays = document.querySelectorAll('.settings-display');

  for (let i = 0; i < displays.length; i++) {
    displays[i].textContent = args[i].value;
  }
};

export { buildSettingsContainer, updateSettingsContainer };
