export const INSTRUMENTS = [
  {
    type: 'drums',
    choices: [
      {
        choiceName: 'Kick',
        options: [
          {
            soundName: 'kick-1',
            soundSrc:
              'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1147877/kick.wav',
          },
          {
            soundName: 'kick-2',
            soundSrc: '/src/sounds/kick-4.mp3',
          },
        ],
      },
      {
        choiceName: 'Snare',
        options: [
          {
            soundName: 'snare-1',
            soundSrc:
              'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1147877/snare.wav',
          },
          {
            soundName: 'snare-2',
            soundSrc:
              'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1147877/snare.wav',
          },
        ],
      },
      {
        choiceName: 'Closed Hi-Hat',
        options: [
          {
            soundName: 'closed-hihat-1',
            soundSrc:
              'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1147877/hihat.wav',
          },
        ],
      },
      {
        choiceName: 'Open Hi-Hat',
        options: [
          {
            soundName: 'open-hihat-1',
            soundSrc:
              'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1147877/openhat.wav',
          },
        ],
      },
      {
        choiceName: 'Ride',
        options: [
          {
            soundName: 'ride-1',
            soundSrc:
              'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1147877/ride.wav',
          },
        ],
      },
      {
        choiceName: 'Clap',
        options: [
          {
            soundName: 'clap-1',
            soundSrc:
              'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1147877/clap.wav',
          },
        ],
      },
      {
        choiceName: 'Tom',
        options: [
          {
            soundName: 'tom-1',
            soundSrc:
              'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1147877/tom.wav',
          },
        ],
      },
    ],
  },
];

export const getInstrumentSounds = (type) => {
  // switch to get sound names and sources
  console.log('type:', type);
  return INSTRUMENTS.find((i) => i.type === type).choices;
};
