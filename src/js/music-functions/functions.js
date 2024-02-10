import { INSTRUMENTS, handleMainGrid } from '../helpers';
import { buildInstrumentSection } from '../build-functions/boards';
import { buildAddInstrumentSelect } from '../build-functions/settings';

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

  // eslint-disable-next-line no-alert
  //
  // CHANGE TO MODAL ?
  if (window.confirm('Remove this instrument?')) {
    instrumentSection.remove();
    buildAddInstrumentSelect();
  }
};
