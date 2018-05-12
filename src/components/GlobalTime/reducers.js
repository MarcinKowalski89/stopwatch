const initialState = {
  Warsaw: {
    city: 'Warsaw',
    locale: 'en-US',
    timeZone: 'Europe/Warsaw',
    show: false,
  },
  NewYork: {
    city: 'New York',
    locale: 'en-US',
    timeZone: 'America/New_York',
    show: false,
  },
  Tallinn: {
    city: 'Tallinn',
    locale: 'en-US',
    timeZone: 'Europe/Tallinn',
    show: false,
  },
  Dubai: {
    city: 'Dubai',
    locale: 'en-US',
    timeZone: 'Asia/Dubai',
    show: false,
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_CLOCK':
      return { ...state, [action.data]: { ...state[action.data], show: true } };
    case 'HIDE_CLOCK':
      return { ...state, [action.data]: { ...state[action.data], show: false } };
    default:
      return state;
  }
};
