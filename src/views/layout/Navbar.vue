<template>
  <el-menu class="navbar">
    <levelbar></levelbar>
  </el-menu>
</template>

<script>
  import Levelbar from './Levelbar';
  export default{
    components: {
      Levelbar
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
  }
</style>
