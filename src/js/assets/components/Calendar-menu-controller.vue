<template>
  <div v-if="isVisible"
       @click="toggleMenu"
       class="pickerToggle inline-block px-2 py-1 mr-2 w-8">
    <!-- Ícone do menu inativo -->
    <i class="fa fa-bars" v-if="!menuIsVisible"></i>
    <!-- Ícone do menu ativo -->
    <i class="fa fa-times" v-if="menuIsVisible"></i>
  </div>
</template>

<script>
  export default {
    computed: {
      isVisible() {
        return (
          // Se a tela é pequena
          this.$store.getters['responsive/isBelowSm']
          // Se a rota é do calendário
          && this.$route.name === 'Calendar'
        );
      },
      menuIsVisible() {
        return this.$store.state.calendar.pickerIsVisible;
      }
    },
    
    methods: {
      toggleMenu() {
        this.$store.dispatch('calendar/togglePicker');
      }
    }
  }
</script>
