<template>
  <div class="page-top clearfix" v-scroll-position >
    <a href="#/" class="al-logo clearfix"><span>Vue</span>Admin</a>
    <a class="collapse-menu-link ion-navicon" @click="toggleSidebar({opened: !sidebar.opened})"></a>

    <div class="search">
      <i class="ion-ios-search-strong" ></i>
      <input id="searchInput" type="text" placeholder="Search for...">
    </div>

    <div class="user-profile clearfix">
      <div class="al-user-profile" u>
        <a class="profile-toggle-link">
        </a>
        <ul  class="top-dropdown-menu profile-dropdown" >
          <li><i class="dropdown-arr"></i></li>
          <li><a href="#/profile"><i class="fa fa-user"></i>Profile</a></li>
          <li><a href><i class="fa fa-cog"></i>Settings</a></li>
          <li><a href class="signout"><i class="fa fa-power-off"></i>Sign out</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import scrollPosition from './scrollPosition'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'pageTop',
    directives: { scrollPosition },
    methods: {
      ...mapActions([
        'toggleSidebar'
      ])
    },
    computed: mapGetters({
      sidebar: 'sidebar'
    })
  }

</script>
