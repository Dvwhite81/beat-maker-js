import { INSTRUMENTS, handleMainGrid } from '../helpers';
import { buildInstrumentSection } from '../build-functions/boards';
import { openConfirmModal } from '../build-functions/modal';

export const addInstrument = (instrumentType) => {
  const mainContainer = document.querySelector('#main-container');
  const newInstrument = INSTRUMENTS.find((i) => i.type === instrumentType);
  const section = buildInstrumentSection(newInstrument);

  if (mainContainer.classList.contains('single-view')) {
    section.classList.add('hidden');
  }

  mainContainer.append(section);
  handleMainGrid();
};

export const removeInstrument = (instrumentType) => {
  const instrumentSection = document.querySelector(
    `#${instrumentType}-section`,
  );

  openConfirmModal(instrumentSection);
};
