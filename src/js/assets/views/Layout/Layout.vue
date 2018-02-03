<template>
  <div class="flex flex-col w-screen md:max-w-xl h-full max-h-screen md:max-h-8/9 min-w-64 border rounded bg-white shadow">
    <o-nav></o-nav>
    <div class="flex-1 rounded-b overflow-hidden">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import nav from './partials/Nav.vue';

  export default {
    components: {
      'o-nav': nav
    },
  }
</script>