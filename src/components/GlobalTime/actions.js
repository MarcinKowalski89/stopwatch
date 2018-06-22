export const storeClocks = citys => ({
  type: 'STORE_CLOCKS',
  data: citys,
});
export const showClock = city => ({
  type: 'SHOW_CLOCK',
  data: city,
});
export const hideClock = city => ({
  type: 'HIDE_CLOCK',
  data: city,
});
