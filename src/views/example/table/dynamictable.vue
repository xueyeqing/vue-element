<template>
  <div class="app-container">

    <div class="components-container">
      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" placeholder="姓名" v-model="listQuery.name">
      </el-input>
      <el-button type="primary" v-waves icon="search" @click="handleFilter">搜索</el-button>
    </div>

    <div class="components-container">
      <el-table :data="tableData" style="width:100%;" border>
        <el-table-column align="center" prop="id" label="序号" width="65"></el-table-column>
        <el-table-column align="center" prop="timestamp" label="日期" width="180" sortable>
          <template scope="scope">
            <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d}') }}</span>
            <!--<span>{{ scope.row.time | formatTotime('{y}-{m}-{d} {h}:{i}') }}</span>-->
          </template>
        </el-table-column>
        <el-table-column sortable align="center" prop="name" label="姓名" width="90"></el-table-column>
        <el-table-column align="center" prop="title" label="内容"></el-table-column>
        <el-table-column align="center" prop="address" label="地址"></el-table-column>
      </el-table>
    </div>

    <div class="components-container" v-show="!listLoading">
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page.sync="listQuery.page"
                     :page-sizes="[10,20,30,50]"
                     :page-size="listQuery.limit"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="total">

      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {getTables} from 'api/table'
  export default {
    data() {
      return {
        tableData: null,
        total: null,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 20,
          name: undefined
        }
      }
    },
    created() {
      this.getList();
    },
    methods: {
      getList() {
        this.listLoading = true;
        getTables(this.listQuery).then(response => {
          this.tableData = response.data.items;
          this.total = response.data.total;
          this.listLoading = false;
        })
      },
      handleFilter() {
        this.getList();
      },
      handleCurrentChange(val) {
        this.listQuery.page = val;
        this.getList();
      },
      handleSizeChange(val) {
        this.listQuery.limit = val;
        this.getList();
      }
    }
  };
</script>

<style scoped>
</style>

