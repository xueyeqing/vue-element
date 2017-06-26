<template>
  <div class="login-container">
    <el-form class="login-form">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="email">
        <span class="svg-container"><wscn-icon-svg icon-class="jiedianyoujian"/></span>
        <el-input name="email" type="text" placeholder="邮箱"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input name="password" type="password" placeholder="密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" style="width:100%;">
          登录
        </el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  export default{}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'src/styles/mixin.scss';

  .login-container {
    @include relative;
    height: 100vh;
    background-color: #2d3a4b;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #eeeeee;
      height: 47px;
    }

    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }

    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    .title {
      font-size: 26px;
      font-weight: bold;
      color: #eeeeee;
      text-align: center;
      margin: 0px auto 40px auto;
    }
  }
</style>
