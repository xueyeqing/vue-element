<template>
  <div>{{name}}</div>
</template>

<script>

  import {mapGetters} from 'vuex';

  export default{
    computed: {
      ...mapGetters(['name'])
    }
  }
</script>

<style scoped>

</style>
