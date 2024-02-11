import { INSTRUMENTS, handleMainGrid } from '../helpers';
import { buildInstrumentSection } from '../build-functions/boards';
import { openConfirmModal } from '../build-functions/modal';

export const addInstrument = (instrumentType) => {
  const newInstrument = INSTRUMENTS.find((i) => i.type === instrumentType);
  const section = buildInstrumentSection(newInstrument);
  document.querySelector('#main-container').append(section);
  handleMainGrid();
};

export const removeInstrument = (instrumentType) => {
  const instrumentSection = document.querySelector(
    `#${instrumentType}-section`,
  );

  openConfirmModal(instrumentSection);
};
