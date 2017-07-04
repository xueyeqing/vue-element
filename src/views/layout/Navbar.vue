<template>
  <el-menu class="navbar">
    <!---->
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <!---->
    <levelbar></levelbar>
  </el-menu>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Levelbar from './Levelbar';
  import Hamburger from 'components/Hamburger';
  export default{
    components: {
      Hamburger,
      Levelbar
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ])
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('ToggleSideBar')
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    .hamburger-container {
      line-height: 56px;
      height: 50px;
      float: left;
      padding: 0 10px;
    }
  }
</style>
