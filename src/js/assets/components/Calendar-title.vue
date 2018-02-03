<template>
  <div class="flex items-start">

    <!-- Título -->
    <h3 class="text-primary text-3xl flex-1 flex items-end">
      <span>{{ $trans(month) }},</span>
      <small class="text-grey ml-4"> {{ year }}</small>
    </h3>

    <!-- Link para ir ao dia de hoje -->
    <span @click="$store.commit('calendar/today')"
          class="p-2 border-2 cursor-pointer hover:border-primary-light border-grey rounded"
    >{{ $trans('today') }}</span>

  </div>
</template>

<script>
  export default {
    computed: {

      month() {
        let month = this.$store.state.calendar.month !== null ? this.$store.state.calendar.month : new Date().getMonth();

        return this.$store.state.calendar.months[month].long;
      },

      year() {
        return this.$store.state.calendar.year;
      }
      
    }
  }
</script>
