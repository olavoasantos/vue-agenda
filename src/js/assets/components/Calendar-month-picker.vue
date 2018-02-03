<template>
  <ul class="calendar:month-picker flex-1 sm:flex sm:items-center sm:justify-center sm:flex-col bg-primary-light text-white overflow-x-hidden overflow-y-scroll h-full w-full px-2 list-reset text-center">
    <o-month v-for="(month, code) in months" :name="month.short" :code="code" :key="`calendar-month-${month.short}`"></o-month>
  </ul>
</template>

<script>
  import oMonth from './Calendar-month.vue';
  export default {
    components: {oMonth},
    computed: {
      months() {
        return this.$store.state.calendar.months;
      },
    }
  }
</script>
