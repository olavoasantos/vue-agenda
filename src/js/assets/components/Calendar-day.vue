<template>
  <div class="calendar:day flex flex-col flex-1 border h-12 md:h-24 select-none">
    <div class="h-full py-4 px-2"
          :class="{
            'text-grey': !day.currentMonth,
            'text-primary-light hover:bg-primary-lightest': !isActive && day.currentMonth,
            'text-white bg-primary-lighter': isActive
          }"
          @click="select(day.year, day.month, day.number, day.code)"
    >
      <span :class="{ 'text-blue': isToday }" v-text="day.number"></span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      day: { type: Object }
    },

    computed: {
      isToday() {
        return this.day.code === this.$store.getters['calendar/todayCode'];
      },
      isActive() {
        let selected = this.$store.state.calendar.selected.code;

        return selected ? this.day.code === selected : false;
      },
    },

    methods: {
      select(year, month, day, code) {
        if(month !== this.$store.state.calendar.month) {
          this.$store.dispatch('calendar/goTo', { year, month });

          return;
        }

        this.$store.dispatch('calendar/selectDate', { year, month, day, code });
      },
    }
  }
</script>
