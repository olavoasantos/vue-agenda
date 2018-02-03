<template>
  <li class="calendar:month border rounded relative my-2 py-2 text-xl w-full select-none"
      :class="activeClass"
      @click="select">
    {{ $trans(name) | capitalize }}
  </li>
</template>

<script>
  export default {
    props: {
      code: { type: Number },
      name: { type: String }
    },
    computed: {
      isActive() {
        return this.code === this.$store.state.calendar.month;
      },

      activeClass() {
        return this.isActive
                ? "calendar:month-active bg-primary-dark border-primary-lighter cursor-default"
                : "bg-transparent border-transparent hover:bg-primary cursor-pointer";
      }
    },
    methods: {
      select() {
        if(this.isActive) return;

        this.$store.dispatch('calendar/selectMonth', this.code);
        if(this.$store.getters['responsive/isBelowSm']) this.$store.dispatch('calendar/togglePicker');
      }
    }
  }
</script>
