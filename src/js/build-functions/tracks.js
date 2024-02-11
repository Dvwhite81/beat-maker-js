import buildElement from '../helpers';
import buildTrackSquares from './squares';

// Toggle Functions
/*
const toggleMuteBtn = (name) => {
  const volumeIcon = document.querySelector(`#${name}-volume-icon`);
  const muteIcon = document.querySelector(`#${name}-mute-icon`);

  if (volumeIcon.classList.contains('hidden')) {
    volumeIcon.classList.remove('hidden');
    muteIcon.classList.add('hidden');
  } else if (muteIcon.classList.contains('hidden')) {
    muteIcon.classList.remove('hidden');
    volumeIcon.classList.add('hidden');
  }
};
*/

const toggleSelectOpen = (name) => {
  const select = document.querySelector(`#${name}-track-select`);
  console.log('toggle select:', select);
  if (select.classList.contains('hidden')) {
    select.classList.remove('hidden');
  } else {
    select.classList.add('hidden');
  }
};

const setTrackSound = (name, soundSrc) => {
  const audio = document.querySelector(`#${name}-track-audio`);
  console.log('audio:', audio);
  audio.setAttribute('src', soundSrc);
};

// Buttons
/*
const buildMuteBtn = (name) => {
  const btn = buildElement('button', {
    id: `${name}-mute-btn`,
    className: 'btn mute-btn',
  });

  const volumeIcon = buildElement('img', {
    id: `${name}-volume-icon`,
    className: 'icon volume-icon',
  });
  volumeIcon.src = '/volume-icon.png';
  volumeIcon.alt = 'volume icon';

  const muteIcon = buildElement('img', {
    id: `${name}-mute-icon`,
    className: 'hidden icon mute-icon',
  });
  muteIcon.src = '/mute-icon.png';
  muteIcon.alt = 'mute icon';

  btn.append(volumeIcon, muteIcon);
  btn.addEventListener('click', () => toggleMuteBtn(name));
  return btn;
};
*/

/*
const buildSelectOpenBtn = (name) => {
  const btn = buildElement('button', {
    className: 'btn select-open-btn',
  });

  const icon = buildElement('img', {
    className: 'icon select-icon',
  });
  icon.src = '/dropdown-icon.png';
  icon.alt = 'dropdown icon';

  btn.append(icon);
  btn.addEventListener('click', () => toggleSelectOpen(name));
  return btn;
};
*/

// Track Controls
const buildTrackLabel = (name, displayName) => {
  const label = buildElement('p', {
    className: 'track-label',
    textContent: displayName,
  });

  label.addEventListener('click', () => toggleSelectOpen(name));

  return label;
};

const buildOptionSelect = (choice) => {
  const { name, options } = choice;

  const select = buildElement('ul', {
    id: `${name}-track-select`,
    className: 'hidden select track-select',
  });

  for (const option of options) {
    const { soundName, soundSrc } = option;
    console.log('soundSrc:', soundSrc);
    const optionElement = buildElement('li', {
      className: 'select-option',
      textContent: soundName,
    });
    optionElement.value = soundSrc;
    optionElement.addEventListener('click', () => {
      setTrackSound(name, soundSrc);
    });

    select.append(optionElement);
    select.addEventListener('click', () => {
      toggleSelectOpen(name);
    });
  }

  return select;
};

const buildTrackControl = (choice) => {
  const { name, displayName } = choice;

  const control = buildElement('div', {
    id: `${name}-track-control`,
    className: 'track-control',
  });

  // const muteBtn = buildMuteBtn(name);
  const label = buildTrackLabel(name, displayName);
  // const openBtn = buildSelectOpenBtn(name);
  const optionSelect = buildOptionSelect(choice);

  // control.append(muteBtn, label, openBtn, optionSelect);
  // control.append(label, openBtn, optionSelect);
  control.append(label, optionSelect);
  return control;
};

// Track Beats Section
const buildTrackSquaresContainer = (name) => {
  const beatContainer = buildElement('div', {
    id: `${name}-track-squares`,
    className: 'track-squares',
  });

  return beatContainer;
};

// Track
const buildTrack = (choice) => {
  const { name } = choice;

  const track = buildElement('div', {
    id: `${name}-track`,
    className: 'track',
  });

  const audio = buildElement('audio', {
    id: `${name}-track-audio`,
    className: 'track-audio',
  });
  audio.setAttribute('src', choice.options[0].soundSrc);
  const control = buildTrackControl(choice);
  const trackSquaresContainer = buildTrackSquaresContainer(name);

  const squares = buildTrackSquares(name);
  trackSquaresContainer.append(...squares);

  track.append(audio, control, trackSquaresContainer);
  return track;
};

export const updateTracksAfterSettingsChange = () => {
  const allSquaresContainers = document.querySelectorAll('.track-squares');

  for (const container of allSquaresContainers) {
    container.innerHTML = '';
    console.log('container:', container);
    const name = container.id.split('-')[0];
    const squares = buildTrackSquares(name);
    container.append(...squares);
  }
};

export default buildTrack;
