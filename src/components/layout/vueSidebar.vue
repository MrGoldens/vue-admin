<template>
  <aside class="al-sidebar">
    <ul class="al-sidebar-list">
      <li class="al-sidebar-list-item" v-for="item in routeConfig" :class="{'with-sub-menu':item.subMenu}">
        <router-link :to="item.path" class="al-sidebar-list-link" v-if="!item.subMenu">
          <i :class="item.sidebarMeta.icon"></i><span>{{item.name}}</span>
        </router-link>
        <a class="al-sidebar-list-link" v-if="item.subMenu">
          <i :class="item.sidebarMeta.icon"></i><span>{{item.name}}</span>
          <b class="fa fa-angle-down"></b>
        </a>
        <ul class="al-sidebar-sublist" v-if="item.subMenu">
          <li class="ba-sidebar-sublist-item" v-for="subMenu in item.subMenu">
            <a class="al-sidebar-list-link subitem-submenu-link">
              <span>{{subMenu.name}}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
  import { mapGetters } from 'vuex'
  import 'font-awesome/scss/font-awesome.scss'
  export default {
    name: 'vueSidebar',
    computed: mapGetters({
      routeConfig: 'routeConfig'
    })
  }
</script>

<style></style>
