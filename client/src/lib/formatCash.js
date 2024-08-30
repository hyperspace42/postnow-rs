export default (cash) => {
  const arr = String(cash).split('');

  if (arr.length < 4) {
    return cash;
  } else {
    return arr.slice(0, -3).join('') + ' ' + arr.slice(-3, arr.length).join('');
  }
};
