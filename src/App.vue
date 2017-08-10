<template>
  <div id="app">
    <div class="body-bg"></div>
    <res-width-sidebar></res-width-sidebar>
    <main :class="{'menu-collapsed':sidebar.opened}">
      <vue-sidebar></vue-sidebar>
      <page-top></page-top>
      <div class="al-main">
        <div class="al-content">
          <router-view></router-view>
        </div>
      </div>

    </main>
    <footer class="al-footer clearfix">
      <div class="al-footer-right">Created with <i class="ion-heart"></i></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">Vue Admin 2017</div>
        <ul class="al-share clearfix">
          <li><i class="socicon socicon-facebook"></i></li>
          <li><i class="socicon socicon-twitter"></i></li>
          <li><i class="socicon socicon-google"></i></li>
          <li><i class="socicon socicon-github"></i></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
  import { pageTop, vueSidebar, resWidthSidebar } from './components/layout/'
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    components: {
      pageTop, vueSidebar, resWidthSidebar
    },
    computed: mapGetters({
      sidebar: 'sidebar'
    })
  }
</script>
