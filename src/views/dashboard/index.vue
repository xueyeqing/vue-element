<template>
  <div>
    <component :is="currentRole"></component>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import EditorDashboard from './editor/index';
  import DefaultDashboard from './default/index.vue';

  export default{
    components: {EditorDashboard, DefaultDashboard},
    data() {
      return {
        currentRole: 'EditorDashboard'
      }
    },
    computed: {
      ...mapGetters(['roles'])
    },
    created() {
      if (this.roles.indexOf('admin') >= 0) {
        return;
      }
      this.currentRole = 'DefaultDashboard';
    }
  }
</script>

<style scoped>

</style>
