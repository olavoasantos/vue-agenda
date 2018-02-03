export default {
  namespaced: true,
  state: {
    year: null,
    month: null,
    pickerIsVisible: false,
    selected: {
      year: 2018,
      month: 1,
      day: 3,
      code: 201813,
    },
    months: [
      { short: 'jan', long: 'January' },
      { short: 'feb', long: 'February' },
      { short: 'mar', long: 'March' },
      { short: 'apr', long: 'April' },
      { short: 'may', long: 'May' },
      { short: 'jun', long: 'June' },
      { short: 'jul', long: 'July' },
      { short: 'aug', long: 'August' },
      { short: 'sep', long: 'September' },
      { short: 'oct', long: 'October' },
      { short: 'nov', long: 'November' },
      { short: 'dec', long: 'December' },
    ],
    weekdays: [
      { short: 'Sun', long: 'Sunday' },
      { short: 'Mon', long: 'Monday' },
      { short: 'Tue', long: 'Tuesday' },
      { short: 'Wed', long: 'Wednesday' },
      { short: 'Thu', long: 'Thursday' },
      { short: 'Fri', long: 'Friday' },
      { short: 'Sat', long: 'Saturday' },
    ]
  },
  getters: {
    todayCode() {
      let today = new Date();

      return `${today.getFullYear()}${today.getMonth()}${today.getDate()}`;
    },
    selectedCode(state) {
      return `${state.selected.year}${state.selected.month}${state.selected.day}`;
    },
    getMonth(state) {
      return state.months[state.month].long;
    }
  },
  mutations: {
    selectDate(state, date) {
      state.selected = date;
    },
    goTo(state, options) {
      state.month = options.month;
      state.year = options.year;
    },
    today(state) {
      let today = new Date();
      state.year = today.getFullYear();
      state.month = today.getMonth();
      state.day = today.getDate();
    },
    month(state, month) {
      state.month = month;
    },
    year(state, year) {
      state.year = year;
    },
    day(state, day) {
      state.day = day;
    },
  },
  actions: {
    init({commit}) {
      commit('today');
    },
    selectMonth({commit}, month) {
      commit('month', month);
    },
    selectYear({commit}, year) {
      commit('year', year);
    },
    goTo({commit}, options) {
      commit('goTo', options);
    },
    togglePicker({ state }) {
      state.pickerIsVisible = !state.pickerIsVisible;
    },
    selectDate({dispatch, commit}, date) {
      commit('selectDate', date);
      dispatch('schedule/open', null, { root:true });
    }
  }
};