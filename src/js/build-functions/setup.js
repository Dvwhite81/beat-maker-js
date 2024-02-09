import { buildModal, updateModal } from './modal';
import { buildSettingsContainer, updateSettingsContainer } from './settings';

const container = document.querySelector('#container');

const resetHtml = () => {
  container.innerHTML = '';
};

const initialSetup = (...args) => {
  resetHtml();
  const modal = buildModal();
  const settingsContainer = buildSettingsContainer();
  container.append(modal, settingsContainer);
  updateModal(...args);
  updateSettingsContainer(...args);
};

export default initialSetup;
