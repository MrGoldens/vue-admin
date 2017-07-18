<template>
  <aside class="al-sidebar">
    <ul class="al-sidebar-list">
      <li class="al-sidebar-list-item ba-sidebar-item-expanded" v-for="item in routeConfig" :class="{'with-sub-menu':item.subMenu,'selected':item.path===sidebar.selected}">
        <router-link :to="item.path" class="al-sidebar-list-link" v-if="!item.subMenu">
          <i :class="item.sidebarMeta.icon"></i><span>{{item.name}}</span>
        </router-link>
        <a class="al-sidebar-list-link" v-if="item.subMenu">
          <i :class="item.sidebarMeta.icon"></i><span>{{item.name}}</span>
          <b class="fa fa-angle-down" :class="{'fa-angle-up': true}"></b>
        </a>
        <ul class="al-sidebar-sublist" v-if="item.subMenu" :class="{'slide-right': item.slideRight}">
          <li class="ba-sidebar-sublist-item" v-for="subitem in item.subMenu" :class="{'with-sub-menu':subitem.subMenu}">
            <a class="al-sidebar-list-link subitem-submenu-link">
              <span>{{subitem.name}}</span>
              <b class="fa" :class="{'fa-angle-up': subitem.expanded, 'fa-angle-down': !subitem.expanded}"
                 v-if="subitem.subMenu"></b>
            </a>
            <ul v-if="subitem.subMenu" class="al-sidebar-sublist subitem-submenu-list" :class="{expanded: subitem.expanded, 'slide-right': subitem.slideRight}">
              <li v-for="subSubitem in subitem.subMenu">
                <a v-if="subSubitem.disabled" class="al-sidebar-list-link">
                  {{ subSubitem.title }}
                </a>
                <a v-if="!subSubitem.disabled">
                  {{ subSubitem.title }}
                </a>
              </li>
            </ul>
            <a v-if="(!subitem.subMenu && subitem.disabled)" class="al-sidebar-list-link">
              {{ subitem.title }}
            </a>
            <a  v-if="(!subitem.subMenu && !subitem.disabled)">
              {{ subitem.title }}
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
      routeConfig: 'routeConfig',
      sidebar: 'sidebar'
    }),
    methods: {

    }
  }
</script>

<style></style>
