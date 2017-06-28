<template>
  <el-menu theme="dark">
    <sidebar-item :routes='permission_routers'></sidebar-item>
  </el-menu>
</template>

<script>

  import SidebarItem from './SidebarItem';
  import {mapGetters} from 'vuex';
  export default{
    components: {
      SidebarItem
    },
    computed: {
      ...mapGetters([
        'permission_routers'
      ])
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  .el-menu {
    min-height: 100%;
  }

</style>
