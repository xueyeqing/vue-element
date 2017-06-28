<template>
  <el-menu theme="dark">
    <sidebar-item></sidebar-item>
  </el-menu>
</template>

<script>

  import SidebarItem from './SidebarItem';
  export default{
    components: {
      SidebarItem
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  .el-menu {
    min-height: 100%;
  }

</style>
