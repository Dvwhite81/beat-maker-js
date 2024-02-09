import buildElement, { INITIAL_SETTINGS } from '../helpers';
import { openModal } from './modal';

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

const buildSettingsContainer = () => {
  const settingsContainer = buildElement('div', {
    id: 'settings-container',
  });

  for (const setting of INITIAL_SETTINGS) {
    const div = buildSettingsDiv(setting);
    settingsContainer.append(div);
  }

  const btn = buildSettingsBtn();
  settingsContainer.append(btn);

  return settingsContainer;
};

const updateSettingsContainer = (...args) => {
  const displays = document.querySelectorAll('.settings-display');

  for (let i = 0; i < displays.length; i++) {
    displays[i].textContent = args[i].value;
  }
};

export { buildSettingsContainer, updateSettingsContainer };
