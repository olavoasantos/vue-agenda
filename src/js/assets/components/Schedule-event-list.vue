<template>
  <div class="schedule:event-list my-4">
    <o-event v-for="event in events" :key="`schedule-events-${event.id}`" :event-data="event"></o-event>
  </div>
</template>

<script>
  import oEvent from './Schedule-event.vue';

  export default {
    components: {oEvent},
    computed: {
      code() {
        return this.$store.state.calendar.selected.code;
      },
      list() {
        return this.$store.state.events.list;
      },
      events() {
        return (this.code in this.list) ? this.list[this.code] : [];
      }
    }
  }
</script>
