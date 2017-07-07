<template>
  <div id="app">
    <div class="body-bg"></div>
    <main class="menu-collapsed">
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
  import { pageTop } from './components/layout/'
  export default {
    name: 'app',
    components: {
      pageTop
    }
  }
</script>
