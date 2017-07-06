<template>
  <div class="articlesChart-container">
    <line-chart :listData='listData'></line-chart>
  </div>
</template>

<script>
  import LineChart from 'components/Charts/line'
  export default{
    props: {
      listData: {
        type: Array,
        default: [],
        require: true
      }
    },
    components: {LineChart}
  }
</script>

<style scoped>
  .articlesChart-container {
    width: 100%;
  }
</style>
