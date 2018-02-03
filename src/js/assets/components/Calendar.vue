<template>
  <div class="calendar flex flex-1">

    <!-- Menu de escolha do ano e mês -->
    <div v-show="shouldBeVisible"
         class="calendar:menu flex flex-col items-center text-white h-full w-1/12 min-w-24">
      <!-- Controlador do ano -->
      <o-calendar-year-picker></o-calendar-year-picker>

      <!-- Controlador do mês -->
      <o-calendar-month-picker></o-calendar-month-picker>
    </div>

    <!-- Região principal do calendário -->
    <div class="calendar:main flex-1 flex flex-col h-full p-4">
      <o-calendar-title></o-calendar-title>
      <o-calendar-day-picker></o-calendar-day-picker>
    </div>
    
  </div>
</template>

<script>
  import oCalendarTitle from './Calendar-title.vue';
  import oCalendarDayPicker from './Calendar-day-picker.vue';
  import oCalendarYearPicker from './Calendar-year-picker.vue';
  import oCalendarMonthPicker from './Calendar-month-picker.vue';

  export default {
    components: {
      oCalendarTitle,
      oCalendarDayPicker,
      oCalendarYearPicker,
      oCalendarMonthPicker
    },
    computed: {
      shouldBeVisible() {
        return (
          !this.isBelowSm
          || this.isBelowSm && this.pickerIsVisible
        );
      },
      isBelowSm() {
        return this.$store.getters['responsive/isBelowSm'];
      },
      pickerIsVisible() {
        return this.$store.state.calendar.pickerIsVisible;
      }
    }
  }
</script>
