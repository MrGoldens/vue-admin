<template>
  <div id="app">
    <div class="body-bg"></div>

    <main>
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
  export default {
    name: 'app',
    components: {
      pageTop, vueSidebar
    }
  }
</script>
