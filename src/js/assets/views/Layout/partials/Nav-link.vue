<template>
  <router-link :to="to" exact>
    <div class="menu:link p-2 hover:bg-primary-darker cursor-pointer text-white text-xl rounded">
      <slot></slot>
    </div>
  </router-link>
</template>

<script>
  export default {
    props: {
      to: { type: String }
    }
  }
</script>
