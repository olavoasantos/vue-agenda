const enOrdinal = (value) => {
  let j = value % 10,
      k = value % 100;
  if (j == 1 && k != 11) {
      return value + "st";
  }
  if (j == 2 && k != 12) {
      return value + "nd";
  }
  if (j == 3 && k != 13) {
      return value + "rd";
  }

  return value + "th";
}

module.exports = function (value) {
  if (!value) return '';
  if (this.$translatable.locale === 'pt-br') return value;

  return enOrdinal(value);
}
