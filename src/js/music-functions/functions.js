import { INSTRUMENTS, handleMainGrid } from '../helpers';
import { buildInstrumentSection } from '../build-functions/boards';
import { openConfirmModal } from '../build-functions/modal';
import { handleMakeTone, playDrum } from './tones';

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

const playTrackSound = (square) => {
  const name = square.classList[1].split('-')[0];
  const drumSection = document.querySelector('#drums-section');
  if (!drumSection || (drumSection && !drumSection.contains(square))) {
    handleMakeTone(name);
  } else {
    playDrum(name);
  }
};

export const playSounds = (currentIndex) => {
  const { measure, beat, division } = currentIndex;
  const allSquares = Array.from(document.querySelectorAll('.square'));
  const squares = Array.from(
    document.querySelectorAll(
      `[data-measure="${measure}"][data-beat="${beat}"][data-division="${division}"]`,
    ),
  );

  allSquares.forEach((square) => square.classList.remove('active'));
  squares.forEach((square) => {
    square.classList.add('active');
    if (square.classList.contains('play')) {
      playTrackSound(square);
    }
  });
};
