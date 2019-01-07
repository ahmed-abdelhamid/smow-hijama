export default (state = 'arabic', action) => {
  switch (action.type) {
    case 'ACTIVATE_LANGUAGE':
      const language = action.code === 'ar' ? 'arabic' : 'english';
      return language;
    default:
      return state;
  }
};
