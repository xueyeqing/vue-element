<template>
  <div class="dashboard-editor-container">
    <div class="">
      <div class="info-container">
        <span class="display_name">{{name}}</span>
        <div class="info-wrapper">
          <div class="info-item">
            <countTo class="info-item-num" :startVal='0' :endVal='statisticsData.article_count'
                     :duration='2400'></countTo>
            <span class="info-item-text">文章</span>
            <wscn-icon-svg icon-class="a" class="dashboard-editor-icon"></wscn-icon-svg>
          </div>
          <div class="info-item">
            <countTo class="info-item-num" :startVal='0' :endVal='statisticsData.pageviews_count'
                     :duration='2600'></countTo>
            <span class="info-item-text">浏览量</span>
            <wscn-icon-svg icon-class="b" class="dashboard-editor-icon"></wscn-icon-svg>
          </div>
          <div class="info-item">
            <countTo class="info-item-num" ref='countTo3' :startVal='0' :endVal='statisticsData.comment_count'
                     :duration='3000'></countTo>
            <span class="info-item-text">评论</span>
            <wscn-icon-svg icon-class="c" class="dashboard-editor-icon"></wscn-icon-svg>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <router-link class="pan-btn blue-btn" to="/components/index">组件</router-link>
      <router-link class="pan-btn light-blue-btn" to="/charts/index">图表</router-link>
      <router-link class="pan-btn red-btn" to="/errorpage/404">错误页面</router-link>
      <router-link class="pan-btn pink-btn" to="/excel/download">导出excel</router-link>
      <router-link class="pan-btn green-btn" to="/example/table/table">Table</router-link>
      <router-link class="pan-btn tiffany-btn" to="/example/form/edit">Form</router-link>
    </div>

    <div class="clearfix main-dashboard-container">
      <div class="chart-container">
        <MonthKpi style="border-bottom: 1px solid #DEE1E2;"
                  :articlesComplete='statisticsData.month_article_count'></MonthKpi>
        <div>1234567</div>
      </div>
      <div class="recent-articles-container">
        <div class="recent-articles-title">最近撸了</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import countTo from 'vue-count-to';
  import MonthKpi from './monthKpi';
  export default{
    data() {
      return {
        chart: null,
        statisticsData: {
          article_count: 1024,
          comment_count: 102400,
          pageviews_count: 1024,
          month_article_count: 28
        }
      }
    },
    computed: {
      ...mapGetters(['name'])
    },
    components: {countTo, MonthKpi}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  .dashboard-editor-container {
    padding: 30px 50px;
    .info-container {
      position: relative;
      height: 150px;
      line-height: 200px;
      .display_name {
        position: absolute;
        font-size: 48px;
        line-height: 48px;
        color: #212121;
        position: absolute;
        top: 25px;
      }
      .info-wrapper {
        position: absolute;
        line-height: 40px;
        bottom: 0px;
        .info-item {
          cursor: pointer;
          display: inline-block;
          margin-right: 95px;
          .info-item-num {
            color: #212121;
            font-size: 24px;
            display: inline-block;
            padding-right: 5px;
          }
          .info-item-text {
            color: #727272;
            font-size: 14px;
            padding-right: 5px;
          }
        }
      }
      .dashboard-editor-icon {
        width: 22px;
        height: 22px;
      }
    }

    .btn-group {
      margin: 30px 36px 30px 0;
    }
    .main-dashboard-container {
      width: 100%;
      position: relative;
      border: 1px solid #DEE1E2;
      padding: 0 10px;
    }
    .chart-container {
      float: left;
      position: relative;
      padding-right: 10px;
      width: 40%;
      border-right: 1px solid #DEE1E2;
    }
    .recent-articles-container {
      padding: 12px 12px 0px;
      float: left;
      width: 60%;
      position: relative;
    }
  }


</style>
