import { buildMainContainer } from './boards';
import { buildSettingsModal, updateSettingsModal } from './modal';
import buildPlayBtn from './play-btn';
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
  const playBtn = buildPlayBtn();
  container.append(modal, settingsContainer, mainContainer, playBtn);
  updateSettingsModal(...args);
  updateSettingsContainer(...args);
};

export default initialSetup;
