import { toggleInstrumentSelectOpen } from './build-functions/navbar';
import { addInstrument } from './music-functions/functions';

const buildElement = (type, args) => {
  const element = document.createElement(type);
  for (const key in args) element[key] = args[key];
  return element;
};

export const INSTRUMENTS = [
  {
    type: 'drums',
    displayName: 'Drums',
    choices: [
      {
        name: 'kick',
        displayName: 'Kick',
        options: [
          {
            soundName: 'kick-1',
            soundSrc: '/kick-1.mp3',
          },
          {
            soundName: 'kick-2',
            soundSrc: '/kick-2.mp3',
          },
          {
            soundName: 'kick-3',
            soundSrc: '/kick-3.mp3',
          },
          {
            soundName: 'kick-4',
            soundSrc: '/kick-4.mp3',
          },
          {
            soundName: 'kick-acoustic-1',
            soundSrc: '/kick-acoustic-1.wav',
          },
          {
            soundName: 'kick-acoustic-2',
            soundSrc: '/kick-acoustic-2.wav',
          },
          {
            soundName: 'kick-big',
            soundSrc: '/kick-big.wav',
          },
          {
            soundName: 'kick-classic',
            soundSrc: '/kick-classic.wav',
          },
          {
            soundName: 'kick-cultivator',
            soundSrc: '/kick-cultivator.wav',
          },
          {
            soundName: 'kick-deep',
            soundSrc: '/kick-deep.wav',
          },
          {
            soundName: 'kick-dry',
            soundSrc: '/kick-dry.wav',
          },
          {
            soundName: 'kick-electro-1',
            soundSrc: '/kick-electro-1.wav',
          },
          {
            soundName: 'kick-electro-2',
            soundSrc: '/kick-electro-2.wav',
          },
          {
            soundName: 'kick-floppy',
            soundSrc: '/kick-floppy.wav',
          },
          {
            soundName: 'kick-gritty',
            soundSrc: '/kick-gritty.wav',
          },
          {
            soundName: 'kick-heavy',
            soundSrc: '/kick-heavy.wav',
          },
          {
            soundName: 'kick-newwave',
            soundSrc: '/kick-newwave.wav',
          },
          {
            soundName: 'kick-oldschool',
            soundSrc: '/kick-oldschool.wav',
          },
          {
            soundName: 'kick-plain',
            soundSrc: '/kick-plain.wav',
          },
          {
            soundName: 'kick-slapback',
            soundSrc: '/kick-slapback.wav',
          },
          {
            soundName: 'kick-softy',
            soundSrc: '/kick-softy.wav',
          },
          {
            soundName: 'kick-stomp',
            soundSrc: '/kick-stomp.wav',
          },
          {
            soundName: 'kick-tape',
            soundSrc: '/kick-tape.wav',
          },
          {
            soundName: 'kick-thump',
            soundSrc: '/kick-thump.wav',
          },
          {
            soundName: 'kick-tight',
            soundSrc: '/kick-tight.wav',
          },
          {
            soundName: 'kick-tron',
            soundSrc: '/kick-tron.wav',
          },
          {
            soundName: 'kick-vinyl-1',
            soundSrc: '/kick-vinyl-1.wav',
          },
          {
            soundName: 'kick-vinyl-2',
            soundSrc: '/kick-vinyl-2.wav',
          },
          {
            soundName: 'kick-zapper',
            soundSrc: '/kick-zapper.wav',
          },
        ],
      },
      {
        name: 'snare',
        displayName: 'Snare',
        options: [
          {
            soundName: 'snare-1',
            soundSrc: '/snare-1.mp3',
          },
          {
            soundName: 'snare-2',
            soundSrc: '/snare-2.mp3',
          },
          {
            soundName: 'snare-3',
            soundSrc: '/snare-3.mp3',
          },
          {
            soundName: 'snare-808',
            soundSrc: '/snare-808.wav',
          },
          {
            soundName: 'snare-acoustic-1',
            soundSrc: '/snare-acoustic-1.wav',
          },
          {
            soundName: 'snare-acoustic-2',
            soundSrc: '/snare-acoustic-2.wav',
          },
          {
            soundName: 'snare-analog',
            soundSrc: '/snare-analog.wav',
          },
          {
            soundName: 'snare-big',
            soundSrc: '/snare-big.wav',
          },
          {
            soundName: 'snare-block',
            soundSrc: '/snare-block.wav',
          },
          {
            soundName: 'snare-brute',
            soundSrc: '/snare-brute.wav',
          },
          {
            soundName: 'snare-dist-1',
            soundSrc: '/snare-dist-1.wav',
          },
          {
            soundName: 'snare-dist-2',
            soundSrc: '/snare-dist-2.wav',
          },
          {
            soundName: 'snare-dist-3',
            soundSrc: '/snare-dist-3.wav',
          },
          {
            soundName: 'snare-electro',
            soundSrc: '/snare-electro.wav',
          },
          {
            soundName: 'snare-floppy',
            soundSrc: '/snare-floppy.wav',
          },
          {
            soundName: 'snare-lofi-1',
            soundSrc: '/snare-lofi-1.wav',
          },
          {
            soundName: 'snare-lofi-2',
            soundSrc: '/snare-lofi-2.wav',
          },
          {
            soundName: 'snare-modular',
            soundSrc: '/snare-modular.wav',
          },
          {
            soundName: 'snare-noise',
            soundSrc: '/snare-noise.wav',
          },
          {
            soundName: 'snare-pinch',
            soundSrc: '/snare-pinch.wav',
          },
          {
            soundName: 'snare-punch',
            soundSrc: '/snare-punch.wav',
          },
          {
            soundName: 'snare-smasher',
            soundSrc: '/snare-smasher.wav',
          },
          {
            soundName: 'snare-sumo',
            soundSrc: '/snare-sumo.wav',
          },
          {
            soundName: 'snare-tape',
            soundSrc: '/snare-tape.wav',
          },
          {
            soundName: 'snare-vinyl-1',
            soundSrc: '/snare-vinyl-1.wav',
          },
          {
            soundName: 'snare-vinyl-2',
            soundSrc: '/snare-vinyl-2.wav',
          },
        ],
      },
      {
        name: 'closedhat',
        displayName: 'Closed Hi-Hat',
        options: [
          {
            soundName: 'hihat-808',
            soundSrc: '/hihat-808.wav',
          },
          {
            soundName: 'hihat-acoustic-1',
            soundSrc: '/hihat-acoustic-1.wav',
          },
          {
            soundName: 'hihat-acoustic-2',
            soundSrc: '/hihat-acoustic-2.wav',
          },
          {
            soundName: 'hihat-analog',
            soundSrc: '/hihat-analog.wav',
          },
          {
            soundName: 'hihat-digital',
            soundSrc: '/hihat-digital.wav',
          },
          {
            soundName: 'hihat-dist-1',
            soundSrc: '/hihat-dist-1.wav',
          },
          {
            soundName: 'hihat-dist-2',
            soundSrc: '/hihat-dist-2.wav',
          },
          {
            soundName: 'hihat-electro',
            soundSrc: '/hihat-electro.wav',
          },
          {
            soundName: 'hihat-plain',
            soundSrc: '/hihat-plain.wav',
          },
          {
            soundName: 'hihat-reso',
            soundSrc: '/hihat-reso.wav',
          },
          {
            soundName: 'hihat-ring',
            soundSrc: '/hihat-ring.wav',
          },
        ],
      },
      {
        name: 'openhat',
        displayName: 'Open Hi-Hat',
        options: [
          {
            soundName: 'openhat-1',
            soundSrc: '/openhat-1.mp3',
          },
          {
            soundName: 'openhat-808',
            soundSrc: '/openhat-808.wav',
          },
          {
            soundName: 'openhat-acoustic-1',
            soundSrc: '/openhat-acoustic-1.wav',
          },
          {
            soundName: 'openhat-slick',
            soundSrc: '/openhat-slick.wav',
          },
          {
            soundName: 'openhat-tight',
            soundSrc: '/openhat-tight.wav',
          },
        ],
      },
      {
        name: 'ride',
        displayName: 'Ride',
        options: [
          {
            soundName: 'ride-acoustic-1',
            soundSrc: '/ride-acoustic-1.wav',
          },
          {
            soundName: 'ride-acoustic-2',
            soundSrc: '/ride-acoustic-2.wav',
          },
        ],
      },
      {
        name: 'clap',
        displayName: 'Clap',
        options: [
          {
            soundName: 'clap-808',
            soundSrc: '/clap-808.wav',
          },
          {
            soundName: 'clap-analog',
            soundSrc: '/clap-analog.wav',
          },
          {
            soundName: 'clap-crushed',
            soundSrc: '/clap-crushed.wav',
          },
          {
            soundName: 'clap-fat',
            soundSrc: '/clap-fat.wav',
          },
          {
            soundName: 'clap-slapper',
            soundSrc: '/clap-slapper.wav',
          },
          {
            soundName: 'clap-tape',
            soundSrc: '/clap-tape.wav',
          },
        ],
      },
      {
        name: 'crash',
        displayName: 'Crash',
        options: [
          {
            soundName: 'crash-808',
            soundSrc: '/crash-808.wav',
          },
          {
            soundName: 'crash-acoustic',
            soundSrc: '/crash-acoustic.wav',
          },
          {
            soundName: 'crash-noise',
            soundSrc: '/crash-noise.wav',
          },
          {
            soundName: 'crash-tape',
            soundSrc: '/crash-tape.wav',
          },
        ],
      },
      {
        name: 'tom',
        displayName: 'Tom',
        options: [
          {
            soundName: 'tom-808',
            soundSrc: '/tom-808.wav',
          },
          {
            soundName: 'tom-acoustic-1',
            soundSrc: '/tom-acoustic-1.wav',
          },
          {
            soundName: 'tom-acoustic-2',
            soundSrc: '/tom-acoustic-2.wav',
          },
          {
            soundName: 'tom-analog',
            soundSrc: '/tom-analog.wav',
          },
          {
            soundName: 'tom-chiptune',
            soundSrc: '/tom-chiptune.wav',
          },
          {
            soundName: 'tom-fm',
            soundSrc: '/tom-fm.wav',
          },
          {
            soundName: 'tom-lofi',
            soundSrc: '/tom-lofi.wav',
          },
          {
            soundName: 'tom-rototom',
            soundSrc: '/tom-rototom.wav',
          },
          {
            soundName: 'tom-short',
            soundSrc: '/tom-short.wav',
          },
        ],
      },
    ],
  },
  {
    type: 'bass',
    displayName: 'Bass',
    choices: [
      {
        name: 'electric-bass',
        displayName: 'Electric Bass',
        options: [
          {
            soundName: 'A',
            soundSrc: '',
          },
          {
            soundName: 'B',
            soundSrc: '',
          },
        ],
      },
    ],
  },
];

export const BEAT_DIVISIONS = [
  {
    labelText: 'Sixteenth Notes',
    value: 4,
  },
  {
    labelText: 'Eighth Notes',
    value: 1,
  },
  {
    labelText: 'Quarter Notes',
    value: 1,
  },
];

export const INITIAL_SETTINGS = [
  {
    name: 'tempo',
    labelText: 'Tempo',
    value: 120,
  },
  {
    name: 'division',
    labelText: 'Division',
    value: BEAT_DIVISIONS[0].value,
  },
  {
    name: 'beats',
    labelText: 'Beats',
    value: 4,
  },
  {
    name: 'measures',
    labelText: 'Measures',
    value: 4,
  },
];

export const getInstrumentSounds = (type) => {
  // switch to get sound names and sources
  return INSTRUMENTS.find((i) => i.type === type).choices;
};

const getInstrumentFromSection = (id) => {
  const name = id.split('-')[0];
  return INSTRUMENTS.find((i) => i.type === name);
};

export const getUsedInstruments = () => {
  const allBoards = document.querySelectorAll('.instrument-section');
  if (allBoards.length === 0) return [];
  const used = [];

  for (const board of allBoards) {
    const { id } = board;
    const instrument = getInstrumentFromSection(id);
    used.push(instrument);
  }

  return used;
};

export const getAvailableInstruments = () => {
  console.log('getAvailableInstruments');
  const usedInstruments = getUsedInstruments();
  return INSTRUMENTS.filter((i) => !usedInstruments.includes(i));
};

export const handleMainGrid = () => {
  const mainContainer = document.querySelector('#main-container');
  const { length } = getUsedInstruments();

  mainContainer.style.gridTemplateColumns =
    length > 2 ? 'repeat(2, 1fr)' : '1fr';
  mainContainer.style.gridTemplateRows =
    length === 1
      ? '1fr'
      : length === 2
        ? 'repeat(2, 1fr)'
        : `repeat(${Math.ceil(length / 2)}, 1fr)`;
};

export const updateInstrumentSelect = (select) => {
  select.innerHTML = '';

  const availableInstruments = getAvailableInstruments();
  for (const instrument of availableInstruments) {
    const { type, displayName } = instrument;
    const optionElement = buildElement('li', {
      className: 'select-option',
      textContent: displayName,
    });

    optionElement.addEventListener('click', () => {
      toggleInstrumentSelectOpen();
      addInstrument(type);
      optionElement.remove();
    });

    select.append(optionElement);
  }
};

export const handleOtherBoardOnMinimize = (type) => {
  const allBoards = Array.from(document.querySelectorAll('.board'));
  if (allBoards.length !== 2) {
    return;
  }

  const mainContainer = document.querySelector('#main-container');
  const allSections = Array.from(
    document.querySelectorAll('.instrument-section'),
  );
  const otherBoard = allBoards.find((s) => s.id !== `${type}-board`);

  mainContainer.classList.add('main-flex');
  allSections.forEach((section) => section.classList.add('zero-auto'));
  otherBoard.classList.add('maximized');

  const allBtns = Array.from(document.querySelectorAll('button'));
  allBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      mainContainer.classList.remove('min-flex');
      allSections.forEach((section) => section.classList.remove('zero-auto'));
      otherBoard.classList.remove('maximized');
    });
  });
};

export default buildElement;
