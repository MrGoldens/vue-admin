<template>
  <div id="app">
    <div class="body-bg"></div>

    <main :class="{'menu-collapsed':sidebar.opened}">
      <vue-sidebar></vue-sidebar>
      <page-top></page-top>
      <div class="al-main">
        <div class="al-content">
          <router-view></router-view>
        </div>
      </div>

    </main>
  </div>
</template>

<script>
  import { pageTop, vueSidebar } from './components/layout/'
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    components: {
      pageTop, vueSidebar
    },
    computed: mapGetters({
      sidebar: 'sidebar'
    })
  }
</script>
