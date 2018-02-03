<template>
  <div class="calendar:weekdays flex justify-between text-grey font-bold">
    <div class="calendar:weekday flex flex-1 border-t py-4 px-2"
         v-for="weekday in weekdays"
         :key="`calendar-weekday-${weekday.short}`"
         v-text="$trans( weekday.short )"
    ></div>
  </div>
</template>

<script>
  export default {
    computed: {
      weekdays() {
        return this.$store.state.calendar.weekdays;
      }
    }
  }
</script>
