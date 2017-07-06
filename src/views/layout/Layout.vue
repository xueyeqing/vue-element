<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <div class="sidebar-wrapper">
      <v-sidebar class="sidebar-container"/>
    </div>
    <div class="main-container">
      <Navbar/>
      <App-main/>
    </div>
  </div>
</template>

<script>

  //  import Sidebar from '../../views/layout/Sidebar.vue'
  import {Sidebar, Navbar, AppMain} from 'views/layout';

  export default{
    name: 'layout',
    components: {
      'v-sidebar': Sidebar,
      Navbar,
      AppMain
    },
    computed: {
      sidebar() {
        return this.$store.state.app.sidebar;
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  @import "src/styles/mixin.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    width: 100%;
    height: 100%;
    &.hideSidebar {
      .sidebar-wrapper {
        transform: translate(-140px, 0);
        .sidebar-container {
          transform: translate(138px, 0);
        }
        &:hover {
          transform: translate(0, 0);
          .sidebar-container {
            transform: translate(0, 0);
          }
        }
      }
      .main-container {
        margin-left: 40px;
      }
    }

    .sidebar-wrapper {
      width: 180px;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1001;
      overflow: hidden;
      transition: all .28s ease-out;
    }

    .sidebar-container {
      transition: all .28s ease-out;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: -10px;
      overflow-y: scroll;
    }

    .main-container {
      min-height: 100%;
      min-width: 985px;
      transition: all .28s ease-out;
      margin-left: 180px;
    }
  }
</style>
