const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_CLOCKS':
      action.data.forEach((element) => { initialState[element.zoneName.split('/').splice(-1)] = element; });
      return initialState;
    case 'SHOW_CLOCK':
      return { ...state, [action.data]: { ...state[action.data], show: true } };
    case 'HIDE_CLOCK':
      return { ...state, [action.data]: { ...state[action.data], show: false } };
    default:
      return state;
  }
};
