<template>
  <div class="login-container">
    <el-form class="login-form" :rules="loginRules" :model="loginForm" ref="loginForm">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="email">
        <span class="svg-container"><wscn-icon-svg icon-class="jiedianyoujian"/></span>
        <el-input name="email" type="text" placeholder="邮箱" v-model="loginForm.email" autoComplete="on"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container"><wscn-icon-svg icon-class="mima"/></span>
        <el-input name="password" type="password" placeholder="密码" v-model="loginForm.password"
                  autoComplete="on"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin" :loading="loading">
          登录
        </el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  import {isWscnEmail} from 'utils/validate'

  export default{
    data() {
      const validateEmail = (rule, value, callback) => {
        if (!isWscnEmail(value)) {
          callback(new Error('请输入合法的163邮箱'));
        } else {
          callback();
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码不能小于6位'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          email: 'zhangtaihu101@163.com',
          password: ''
        },
        loginRules: {
          email: [{required: true, trigger: 'blur', validator: validateEmail}],
          password: [{required: true, trigger: 'blur', validator: validatePass}]
        },
        loading: false
      }
    },
    methods: {
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true;
            this.$store.dispatch('LoginByEmail', this.loginForm).then(() => {
              this.$router.push({path: '/'})
              this.loading = false;
            }).catch(err => {
              this.$message.error(err)
              this.loading = false;
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'src/styles/mixin.scss';

  .login-container {
    @include relative;
    height: 100vh;
    background-color: #2d3a4b;

    /*google浏览器产生的问题修复*/
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }

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

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: #889aa4;
    }
  }
</style>
