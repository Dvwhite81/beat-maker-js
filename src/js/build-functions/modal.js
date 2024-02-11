import buildElement, { INITIAL_SETTINGS } from '../helpers';
import { setAllSettings } from '../main';
import { buildAddInstrumentSelect } from './settings';

const openSettingsModal = () =>
  (document.querySelector('#settings-modal').style.display = 'flex');

const closeSettingsModal = () =>
  (document.querySelector('#settings-modal').style.display = 'none');

const getSettingsFromModal = () => {
  const settings = [];

  const inputs = document.querySelectorAll('.modal-input');
  for (const input of inputs) {
    const { value } = input;
    settings.push(value);
  }

  return settings;
};

const buildModalInput = (setting) => {
  const { name, labelText } = setting;

  const div = buildElement('div', {
    className: 'modal-input-div',
  });
  const label = buildElement('p', {
    textContent: `${labelText}:`,
  });
  const input = buildElement('input', {
    type: 'number',
    id: `modal-${name}-input`,
    className: 'modal-input',
  });

  div.append(label, input);
  return div;
};

const buildSettingsModal = () => {
  const modal = buildElement('div', {
    id: 'settings-modal',
    className: 'modal',
  });

  const closeBtn = buildElement('button', {
    id: 'settings-modal-close',
    className: 'modal-close',
    type: 'button',
    textContent: 'x',
  });

  closeBtn.addEventListener('click', closeSettingsModal);

  const modalContent = buildElement('div', {
    className: 'modal-content',
  });

  for (const setting of INITIAL_SETTINGS) {
    const div = buildModalInput(setting);
    modalContent.append(div);
  }

  const submitBtn = buildElement('button', {
    id: 'settings-modal-submit',
    className: 'btn modal-submit',
    type: 'button',
    textContent: 'Looks Good',
  });

  submitBtn.addEventListener('click', () => {
    const newSettings = getSettingsFromModal();
    setAllSettings(...newSettings);
    closeSettingsModal();
  });

  modal.append(closeBtn, modalContent, submitBtn);
  return modal;
};

const updateSettingsModal = (...args) => {
  const modalInputs = document.querySelectorAll('.modal-input');

  for (let i = 0; i < modalInputs.length; i++) {
    modalInputs[i].value = args[i].value;
  }
};

const openConfirmModal = (instrumentSection) => {
  const modal = buildElement('div', {
    id: 'confirm-modal',
    className: 'modal',
  });

  const closeBtn = buildElement('button', {
    id: 'confirm-modal-close',
    className: 'modal-close',
    type: 'button',
    textContent: 'x',
  });

  closeBtn.addEventListener('click', () => modal.remove());

  const modalContent = buildElement('div', {
    className: 'modal-content',
  });

  const confirmContent = buildElement('p', {
    textContent: 'Remove this instrument?',
  });

  modalContent.append(confirmContent);

  const submitBtn = buildElement('button', {
    id: 'confirm-modal-submit',
    className: 'btn modal-submit',
    type: 'button',
    textContent: 'Remove',
  });

  submitBtn.addEventListener('click', () => {
    // remove instrument
    instrumentSection.remove();
    buildAddInstrumentSelect();
    modal.remove();
  });

  modal.append(closeBtn, modalContent, submitBtn);
  document.querySelector('#container').append(modal);
};

export {
  buildSettingsModal,
  closeSettingsModal,
  openConfirmModal,
  openSettingsModal,
  updateSettingsModal,
};
