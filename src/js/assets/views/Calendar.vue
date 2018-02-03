<template>
  <div class="calendar:page h-full flex flex-col relative">
    <o-calendar></o-calendar>
    <o-schedule></o-schedule>
  </div>
</template>

<script>
  import view from './Layout/View.vue';
  import oCalendar from '../components/Calendar.vue';
  import oSchedule from '../components/Schedule.vue';

  export default {
    extends: view,
    components: {oCalendar, oSchedule},
    data() {
      return {
        
      }
    }
  }
</script>
