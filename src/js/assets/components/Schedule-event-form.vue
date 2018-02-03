<template>
  <div class="schedule:event-form flex flex-col p-4">
    <div class="schedule:form-element my-2 flex flex-col w-full">

      <label class="text-sm font-bold" for="title">{{ $trans('Title') }}</label>
      <input type="text" id="title" name="title" v-model="form.title" class="border border-primary rounded p-2 h-10" />

    </div>
    <div class="schedule:form-element my-2 flex w-full">

      <div class="flex flex-col flex-1 mr-2">
        <label class="text-sm font-bold" for="starts_at">{{ $trans('Starts at') }}</label>
        <input type="time" class="border border-primary rounded p-2 flex-1" v-model="form.starts_at" name="starts_at" id="starts_at" />
      </div>

      <div class="flex flex-col flex-1 ml-2 ">
        <label class="text-sm font-bold" for="ends_at">{{ $trans('Ends at') }}</label>
        <input type="time" class="border border-primary rounded p-2 flex-1" v-model="form.ends_at" name="ends_at" id="ends_at" />
      </div>

    </div>
    <div class="schedule:form-element my-2 flex justify-end w-full">

      <button @click="close"
              class="schedule:submit flex-center hover:bg-primary-lightest text-primary rounded font-bold px-8 py-4">
        {{ $trans('cancel') }}
      </button>

      <button @click="submit"
              class="schedule:submit flex-center bg-primary hover:bg-primary-lighter text-white rounded font-bold px-8 py-4">
        {{ $trans('save') }}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: { title: '', starts_at: '', ends_at: '' }
      }
    },
    computed: {
      formData() {
        return {
          id: `event-${new Date().getTime()}`,
          title: this.form.title,
          dayCode: this.$store.state.calendar.selected.code,
          starts_at: this.form.starts_at,
          ends_at: this.form.ends_at,
          isComplete: false
        };
      }
    },
    methods: {
      submit() {
        this.$store.dispatch('events/store', this.formData);
        this.close();
      },
      close() {
        this.form = { title: '', starts_at: '', ends_at: '' };
        this.$emit('hide');
      }
    }
  }
</script>
