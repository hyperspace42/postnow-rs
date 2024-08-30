export default (value) => {
  const currency = new Intl.NumberFormat('ru-RU', {
    currency: 'RUB',
    style: 'currency',
    maximumSignificantDigits: 10
  });

  return currency.format(value)
};
