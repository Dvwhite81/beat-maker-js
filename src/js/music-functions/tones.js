import * as Tone from 'tone';

const playDrum = (name) => {
  const audio = document.querySelector(`#${name}-track-audio`);
  const { src } = audio;
  const sound = new Audio(src);
  sound.play();
};

const handleMakeTone = (name) => {
  console.log('makeTone name:', name);
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease(name, '8n');
};

export { handleMakeTone, playDrum };
