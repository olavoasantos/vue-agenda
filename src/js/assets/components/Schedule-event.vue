<template>
  <div class="schedule:event mb-4 flex items-center border shadow mx-4 p-4 rounded">
    <div class="schedule:event-detail mr-4">
      <i v-if="event.isComplete" class="fa fa-check-circle-o"></i>
      <i v-if="!event.isComplete" class="fa fa-circle-o"></i>
    </div>
    <div class="schedule:event-content flex-1">
      <h4>{{ event.title }}</h4>
      <h5 class="flex items-center">
        <i class="fa fa-clock-o"></i>
        <span class="ml-2">{{ event.starts_at }} - {{ event.ends_at }}</span>
      </h5>
    </div>
    <ul class="schedule:actions flex list-reset text-xl text-grey">  
      <li @click="markIncomplete" v-if="event.isComplete" class="mr-4 hover:text-orange p-2 h-4 w-4 flex-center hover:bg-orange-lightest rounded-full"><i class="fa fa-times"></i></li>
      <li @click="markComplete" v-if="!event.isComplete" class="mr-4 hover:text-green p-2 h-4 w-4 flex-center hover:bg-green-lightest rounded-full"><i class="fa fa-check"></i></li>
      <li @click="destroy" class="ml-4 hover:text-red-dark p-2 h-4 w-4 flex-center hover:bg-red-lighter rounded-full">
          <i class="fa fa-trash"></i>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      eventData: { type: Object }
    },
    data() {
      return {
        menuIsVisible: false
      }
    },
    computed: {
      event() {
        return this.eventData;
      }
    },
    methods: {
      markComplete() {
        this.$store.dispatch('events/markComplete', this.event);
      },
      markIncomplete() {
        this.$store.dispatch('events/markIncomplete', this.event);
      },
      destroy() {
        this.$store.dispatch('events/destroy', this.event);
      },
    }
  }
</script>
