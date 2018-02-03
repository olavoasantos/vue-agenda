<template>
  <ul class="calendar:year-picker flex-center flex-col text-white list-reset text-2xl bg-primary w-full">
    <input max="2500"
           min="1900"
           type="number"
           :value="year"
           @change="update"
           class="calendar:year-input w-full text-white text-center my-4 bg-transparent">
  </ul>
</template>

<script>
  export default {
    computed: {
      year() {
        return this.$store.state.calendar.year;
      }
    },
    methods: {
      update(e) {
        this.$store.dispatch('calendar/selectYear', e.target.value);
      }
    }
  }
</script>
