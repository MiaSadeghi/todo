const openAnchoredMenu = (e, stateSettingFn) => {
  stateSettingFn(e.currentTarget);
};

const closeAnchoredMenu = (stateSettingFn) => {
  stateSettingFn(null);
};

export { closeAnchoredMenu, openAnchoredMenu };
