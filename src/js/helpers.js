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
        ],
      },
      {
        name: 'closed-hh',
        displayName: 'Closed Hi-Hat',
        options: [
          {
            soundName: 'closed-hihat-1',
            soundSrc: '/hihat-808.wav',
          },
        ],
      },
      {
        name: 'open-hh',
        displayName: 'Open Hi-Hat',
        options: [
          {
            soundName: 'open-hihat-1',
            soundSrc: '/openhat-808.wav',
          },
        ],
      },
      {
        name: 'ride',
        displayName: 'Ride',
        options: [
          {
            soundName: 'ride-1',
            soundSrc: '/ride-acoustic-1.wav',
          },
        ],
      },
      {
        name: 'clap',
        displayName: 'Clap',
        options: [
          {
            soundName: 'clap-1',
            soundSrc: '/clap-808.wav',
          },
        ],
      },
      {
        name: 'tom',
        displayName: 'Tom',
        options: [
          {
            soundName: 'tom-1',
            soundSrc: '/tom-808.wav',
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
  console.log('type:', type);
  return INSTRUMENTS.find((i) => i.type === type).choices;
};

const getInstrumentFromSection = (id) => {
  const name = id.split('-')[0];
  return INSTRUMENTS.find((i) => i.type === name);
};

export const getUsedInstruments = () => {
  const allBoards = document.querySelectorAll('.instrument-section');
  if (allBoards.length === 0) return [];
  console.log('allBoards:', allBoards);
  const used = [];

  for (const board of allBoards) {
    const { id } = board;
    const instrument = getInstrumentFromSection(id);
    used.push(instrument);
  }

  return used;
};

export const getAvailableInstruments = () => {
  const usedInstruments = getUsedInstruments();
  console.log('used:', usedInstruments);
  return INSTRUMENTS.filter((i) => !usedInstruments.includes(i));
};

export const handleMainGrid = () => {
  const mainContainer = document.querySelector('#main-container');
  const { length } = getUsedInstruments();

  mainContainer.style.gridTemplateColumns =
    length > 2 ? 'repeat(2, 1fr)' : '1fr';
  mainContainer.style.gridTemplateRows =
    length < 3 ? 'repeat(2, 1fr)' : `repeat(${Math.ceil(length / 2)}, 1fr)`;
};

const buildElement = (type, args) => {
  const element = document.createElement(type);
  for (const key in args) element[key] = args[key];
  return element;
};

export default buildElement;
