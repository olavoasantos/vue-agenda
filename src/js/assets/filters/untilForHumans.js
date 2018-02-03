let moment = require('moment');
let locale = localStorage.getItem('locale');

if(!locale || locale !== 'en') require('moment/locale/pt-br');

module.exports = (value) => {
  if (!value) return '';

  return moment(value).from(moment().subtract(1,'days').endOf('day'));
}
