import { buildMainContainer } from './boards';
import { buildSettingsModal, updateSettingsModal } from './modal';
import buildNavbar from './navbar';
import { updateSettingsContainer } from './settings';

const container = document.querySelector('#container');

const resetHtml = () => {
  container.innerHTML = '';
};

const initialSetup = (...args) => {
  resetHtml();
  const modal = buildSettingsModal();
  const navbar = buildNavbar();
  const mainContainer = buildMainContainer();
  container.append(modal, navbar, mainContainer);
  updateSettingsModal(...args);
  updateSettingsContainer(...args);
};

export default initialSetup;
