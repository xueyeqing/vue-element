<template>
  <el-menu class="navbar">
    <!---->
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <!---->
    <levelbar></levelbar>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">设置
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <router-link to="/">
          <el-dropdown-item>
            首页
          </el-dropdown-item>
        </router-link>
        <a>
          <el-dropdown-item>
            项目地址
          </el-dropdown-item>
        </a>
        <el-dropdown-item divided><span @click="logout" style="display:block;">退出登录</span></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
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
      },
      logout() {
        this.$store.dispatch('LogOut').then(() => {
          location.reload(); // 为了重新实例化vue-router对象 避免bug
        })
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
    .avatar-container {
      height: 50px;
      display: inline-block;
      position: absolute;
      right: 35px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
      }
    }
  }
</style>
