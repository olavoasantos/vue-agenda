<template>
  <nav class="nav w-full flex items-center p-4 bg-primary-dark rounded-t text-white">

    <!-- Calendar menu -->
    <o-calendar-menu-controller></o-calendar-menu-controller>

    <!-- Título da página -->
    <h3 class="nav:title flex-1">{{ $trans($route.name) }}</h3>

    <!-- Menu -->
    <div class="nav:menu">
      <!-- Link para calendário -->
      <o-nav-link to="/" v-if="$route.name === 'Settings'">
        <i class="fa fa-calendar"></i>
      </o-nav-link>

      <!-- Link para configurações -->
      <o-nav-link to="/configuracoes" v-if="$route.name !== 'Settings'">
        <i class="fa fa-cog"></i>
      </o-nav-link>

    </div>
  </nav>
</template>

<script>
  import oNavLink from './Nav-link.vue';
  import oCalendarMenuController from '../../../components/Calendar-menu-controller.vue';
  
  export default {
    components: {oCalendarMenuController, oNavLink}
  }
</script>
