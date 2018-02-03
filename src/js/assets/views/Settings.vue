<template>
  <div class="settings:page p-4 flex flex-col h-full items-center">
    <div class="flex-center h-full flex-1 w-full">
      <h3 class="mr-4">{{ $trans('Language') }}</h3>

      <div class="settings:lang flex-center">

        <div class="mx-2 p-2 font-bold rounded-full cursor-pointer" :class="{
          'text-primary hover:text-primary hover:bg-primary-lightest': $store.getters.locale !== 'pt-br',
          'text-white bg-primary hover:bg-primary-light': $store.getters.locale === 'pt-br',
        }" @click="setLang('pt-br')">PT</div>

        <div class="mx-2 p-2 font-bold rounded-full hover:text-primary cursor-pointer" :class="{
          'text-primary hover:bg-primary-lightest': $store.getters.locale !== 'en',
          'text-white bg-primary': $store.getters.locale === 'en',
        }" @click="setLang('en')">EN</div>
      </div>
    </div>

    <h3 class="mr-4 text-center" v-html="$trans('Developed and designed with</br><i class=\'m-2 text-red fa fa-heart\'></i> and <i class=\'m-2 fa fa-coffee\'></i></br>by Olavo Amorim Santos')"></h3>

  </div>
</template>

<script>
  import view from './Layout/View.vue'; 
  
  export default {
    extends: view,
    methods: {
      setLang(locale) {
        if(this.$store.getters.locale === locale) return;

        this.$store.dispatch('locale', locale);
        location.reload();
      }
    }
  }
</script>