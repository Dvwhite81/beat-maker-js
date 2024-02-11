import buildElement from '../helpers';
import { play, stop } from '../main';

const togglePlayStopIcon = () => {
  const playIcon = document.querySelector('#play-btn-icon');
  const stopIcon = document.querySelector('#stop-btn-icon');

  if (playIcon.classList.contains('hidden')) {
    playIcon.classList.remove('hidden');
    stopIcon.classList.add('hidden');
    stop();
  } else if (stopIcon.classList.contains('hidden')) {
    stopIcon.classList.remove('hidden');
    playIcon.classList.add('hidden');
    play();
  }
};

const buildPlayBtn = () => {
  const btn = buildElement('button', {
    id: 'play-stop-btn',
    className: 'btn',
  });

  const playIcon = buildElement('img', {
    id: 'play-btn-icon',
    className: 'icon play-icon',
  });
  playIcon.src = '/play-icon.png';
  playIcon.alt = 'play icon';

  const stopIcon = buildElement('img', {
    id: 'stop-btn-icon',
    className: 'hidden icon stop-icon',
  });
  stopIcon.src = '/stop-icon.png';
  stopIcon.alt = 'stop icon';

  btn.append(playIcon, stopIcon);
  btn.addEventListener('click', togglePlayStopIcon);

  return btn;
};

export default buildPlayBtn;
