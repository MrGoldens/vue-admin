<template>
  <aside class="al-sidebar">

  </aside>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'vueSidebar',
    computed: mapGetters({
      routeConfig: 'routeConfig'
    })
  }
</script>

<style></style>
