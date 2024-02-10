const buildTrackControl = (choice) => {
  const { name, displayName } = choice;

  const control = buildElement('div', {
    id: `${name}-track-control`,
    className: 'track-control',
  });

  // const muteBtn = buildMuteBtn(name);
  const label = buildTrackLabel(displayName);
  const openBtn = buildSelectOpenBtn(name);
  const optionSelect = buildOptionSelect(choice);

  // control.append(muteBtn, label, openBtn, optionSelect);
  control.append(label, openBtn, optionSelect);
  return control;
};
