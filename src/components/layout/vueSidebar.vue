<template>
  <aside class="al-sidebar">
    <ul class="al-sidebar-list">
      <li class="al-sidebar-list-item" v-for="item in routeConfig">
        <a class="al-sidebar-list-link">
          <i :class="item.sidebarMeta.icon"></i><span>{{item.name}}</span>
        </a>
      </li>
    </ul>
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
