import buildElement, { INITIAL_SETTINGS } from '../helpers';
import { setAllSettings } from '../main';

const openModal = () =>
  (document.querySelector('#modal').style.display = 'flex');

const closeModal = () =>
  (document.querySelector('#modal').style.display = 'none');

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

const buildModal = () => {
  const modal = buildElement('div', {
    id: 'modal',
  });

  const closeBtn = buildElement('button', {
    id: 'modal-close',
    type: 'button',
    textContent: 'x',
  });

  closeBtn.addEventListener('click', closeModal);

  const modalContent = buildElement('div', {
    id: 'modal-content',
  });

  for (const setting of INITIAL_SETTINGS) {
    const div = buildModalInput(setting);
    modalContent.append(div);
  }

  const submitBtn = buildElement('button', {
    id: 'modal-submit',
    className: 'btn',
    type: 'button',
    textContent: 'Looks Good',
  });

  submitBtn.addEventListener('click', () => {
    const newSettings = getSettingsFromModal();
    setAllSettings(...newSettings);
    closeModal();
  });

  modal.append(closeBtn, modalContent, submitBtn);
  return modal;
};

const updateModal = (...args) => {
  const modalInputs = document.querySelectorAll('.modal-input');

  for (let i = 0; i < modalInputs.length; i++) {
    modalInputs[i].value = args[i].value;
  }
};

export { buildModal, closeModal, openModal, updateModal };
