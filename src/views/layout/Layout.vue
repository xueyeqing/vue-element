<template>
  <div class="app-wrapper">
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
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  @import "src/styles/mixin.scss";

  .app-wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    .sidebar-wrapper {
      width: 180px;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1001;
    }

    .sidebar-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .main-container {
      min-height: 100%;
      margin-left: 180px;
    }
  }
</style>
