<template>
  <aside class="al-sidebar">
    <ul class="al-sidebar-list">
      <router-link :to="item.path" tag="li" active-class="selected" class="al-sidebar-list-item" v-for="item in routeConfig">
        <a class="al-sidebar-list-link">
          <i :class="item.sidebarMeta.icon"></i><span>{{item.name}}</span>
        </a>
      </router-link>
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
