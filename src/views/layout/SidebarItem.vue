<template>
  <div>
    <template v-for="item in routes">
      <!--index 唯一标实-->
      <router-link v-if="!item.hidden&&item.noDropdown&&item.children.length>0"
                   :to="item.path+'/'+item.children[0].path">
        <el-menu-item :index="item.path+'/'+item.children[0].path">
          <wscn-icon-svg v-if='item.icon' :icon-class="item.icon"/>
          {{item.children[0].name}}
        </el-menu-item>
      </router-link>
      <el-submenu :index="item.name" v-if="!item.hidden&&!item.noDropdown">
        <template slot="title">
          <wscn-icon-svg v-if='item.icon' :icon-class="item.icon"/>
          {{item.name}}
        </template>
        <template v-for="child in item.children">
          <sidebar-item :routes="[child]" v-if="child.children&&child.children.length>0"></sidebar-item>
          <router-link v-else :to="item.path+'/'+child.path">
            <el-menu-item :index="item.path+'/'+child.path">{{child.name}}</el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
  export default{
    name: 'SidebarItem',
    props: {
      routes: {
        type: Array
      }
    }
  }
</script>

<style scoped>

  .wscn-icon {
    margin-right: 10px;
  }

</style>
