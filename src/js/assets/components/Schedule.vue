<template>
  <div class="schedule z-20 absolute flex flex-col bg-white border shadow-lg w-11/12 md:w-6/12 h-full top-0 right-0 overflow-y-auto" v-show="isVisible">
    
    <div class="schedule:header p-4 flex-center border-b">
      <div class="schedule:title flex-1">
        <h4 class="schedule:date text-xl text-grey">{{ day | ordinal }} {{ $trans('of') }} {{ $trans(month) }}, {{ year }}</h4>
        <h2 class="schedule:weekday text-3xl text-primary">{{ $trans(weekday) }}</h2>
      </div>
      <div class="schedule:close text-xl p-2 hover:bg-primary-lighter rounded" @click="close">
        <i class="fa fa-times"></i>
      </div>
    </div>

    <div class="schedule:events-head flex-center p-4" v-show="!formIsVisible">
      <h3 class="schedule:events-title flex-1">{{ $trans('Here\'s your schedule') }}:</h3>
      <div class="schedule:add-button flex-center rounded border p-2 cursor-pointer hover:border-primary text-grey-darker" @click="showForm"
           v-html="$trans('<i class=\'mr-2 fa fa-plus\'></i> event')"
      >
      </div>
    </div>

    <div class="schedule:form w-full" v-show="formIsVisible">
      <o-schedule-event-form @hide="hideForm"></o-schedule-event-form>
    </div>
    <div class="schedule:events h-full w-full flex-1">
      <o-schedule-event-list></o-schedule-event-list>
    </div>
  </div>
</template>

<script>
  import oScheduleEventList from './Schedule-event-list.vue';
  import oScheduleEventForm from './Schedule-event-form.vue';

  export default {
    components: {oScheduleEventList, oScheduleEventForm},
    data() {
      return {
        formIsVisible: false
      }
    },
    methods: {
      showForm() {
        this.formIsVisible = true;
      },
      hideForm() {
        this.formIsVisible = false;
      },
      close() {
        this.$store.dispatch('schedule/close');
      },
    },
    computed: {
      isVisible() {
        return this.$store.state.schedule.isVisible;
      },
      day() {
        return this.$store.state.calendar.selected.day;
      },
      year() {
        return this.$store.state.calendar.selected.year;
      },
      month() {
        let monthCode = this.$store.state.calendar.selected.month;

        return this.$store.state.calendar.months[monthCode].long;
      },
      weekday() {
        let weekdayCode = new Date(this.year, this.$store.state.calendar.selected.month, this.day).getDay();

        return this.$store.state.calendar.weekdays[weekdayCode].long;
      }
    }
  }
</script>
