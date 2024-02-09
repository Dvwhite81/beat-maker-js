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
        choiceName: 'Snare',
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
        choiceName: 'Closed Hi-Hat',
        options: [
          {
            soundName: 'closed-hihat-1',
            soundSrc: '/hihat-808.wav',
          },
        ],
      },
      {
        name: 'open-hh',
        choiceName: 'Open Hi-Hat',
        options: [
          {
            soundName: 'open-hihat-1',
            soundSrc: '/openhat-808.wav',
          },
        ],
      },
      {
        name: 'ride',
        choiceName: 'Ride',
        options: [
          {
            soundName: 'ride-1',
            soundSrc: '/ride-acoustic-1.wav',
          },
        ],
      },
      {
        name: 'clap',
        choiceName: 'Clap',
        options: [
          {
            soundName: 'clap-1',
            soundSrc: '/clap-808.wav',
          },
        ],
      },
      {
        name: 'tom',
        choiceName: 'Tom',
        options: [
          {
            soundName: 'tom-1',
            soundSrc: '/tom-808.wav',
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

const buildElement = (type, args) => {
  const element = document.createElement(type);
  for (const key in args) element[key] = args[key];
  return element;
};

export default buildElement;
