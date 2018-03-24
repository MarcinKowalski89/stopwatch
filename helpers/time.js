export default (time) => {
  time.setHours(0);
  return {
    h: time.getHours(),
    m: time.getMinutes(),
    s: time.getSeconds(),
    ms: time.getMilliseconds(),
  };
};
