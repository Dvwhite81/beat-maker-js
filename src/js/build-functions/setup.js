import { buildMainContainer } from './boards';
import { buildSettingsModal, updateSettingsModal } from './modal';
import { buildSettingsContainer, updateSettingsContainer } from './settings';

const container = document.querySelector('#container');

const resetHtml = () => {
  container.innerHTML = '';
};

const initialSetup = (...args) => {
  resetHtml();
  const modal = buildSettingsModal();
  const settingsContainer = buildSettingsContainer();
  const mainContainer = buildMainContainer();
  container.append(modal, settingsContainer, mainContainer);
  updateSettingsModal(...args);
  updateSettingsContainer(...args);
};

export default initialSetup;
