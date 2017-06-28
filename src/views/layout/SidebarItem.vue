<template>
  <div>
    <template v-for="item in routes">
      <el-menu-item>
        <template>{{item.name}}</template>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
  export default{
    props: {
      routes: {
        type: Array
      }
    }
  }
</script>

<style scoped>

</style>
