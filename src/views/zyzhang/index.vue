<template>
  <div class="components-container">
    <div class="pagination-container">
      {{num}}
      <el-button @click="changenum" type="primary">点击后让左边的数字翻倍</el-button>
    </div>
    <div class="pagination-container">
      <el-input name="time" type="number" v-model="formattime"></el-input>
      <div>{{formattime | formatTime}}</div>
    </div>

  </div>
</template>

<script>
  export default{
    data() {
      return {
        num: 1024,
        formattime: 1488888888888
      }
    },
    created: function () {
      this.test();
    },
    methods: {
      changenum() {
        /* 这里的this.doubleNumber()方法就是s.js写的组件里的方法 */
        this.num = this.doubleNumber(this.num);
      }
    }
  }
</script>

<style scoped>

</style>
