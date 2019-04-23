<template>
  <div class="bg">
    <div class="login" @keyup.enter="submitForm('form')">
      <el-card shadow="hover">
        <div class="login-title" slot="header">
          <span class="login-title-text">{{$t('message.login')}}</span>
        </div>
        <el-form size="small" :hide-required-asterisk="true" :model="form" :rules="rules" ref="form"
                 class="demo-ruleForm">
          <el-form-item  prop="username">
            <el-input :placeholder="$t('message.pleaseEnterUsername')" v-model="form.username" :autofocus="true"></el-input>
          </el-form-item>
          <el-form-item  prop="password">
            <el-input :placeholder="$t('message.pleaseEnterPWD')" v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="form.autoLogin">{{$t('message.autoLogin')}}</el-checkbox>
            <el-button type="text" style="float: right;" @click="forgetPWD">{{$t('message.forgetPWD')}}</el-button>
            <el-button type="primary" size="small" @click="submitForm('form')" style="width: 100%;" >{{$t('message.login')}}</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    components: {},
    data() {
      return {
        form: {
          autoLogin: false,
          username: '',
          password: '',
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ]
        }
      }
    },
    mounted: function () {
      // _g.toPageByName('index')
    },
    methods: {
      forgetPWD() {
        _g.toPageByPath('forgetPWD');
      },
      autoLogin() {
        let autoLogin = Lockr.get("autoLogin");
        if (autoLogin != undefined) {
          if (autoLogin.autoLogin) {
            let token = Lockr.get('autoLogin').data;
            store.dispatch('upToken', token);
            _g.toPageByPath('/index/sheet');
          }
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let password = md5(this.form.password);
            const data = {
              username: this.form.username,
              password: password,
            };
            // this.apiPost(api.login, data).then(resp => {
            //   _g.notification('success', resp.msg);
            //   store.dispatch('upToken', resp.data);
            //   if (this.form.autoLogin) {
            //     Lockr.set('autoLogin', {autoLogin: true, data: resp.data});
            //   } else {
            //     Lockr.set('autoLogin', {autoLogin: false});
            //   }
            //   _g.toPageByPath('/index/userIndex');
            // });
          }
        });
      },
    },
  }
</script>

<style scoped>
  .login {
    position: relative;
    width: 20%;
    margin: 0 auto;
    top: 50%;
    transform: translate(0%, 75%);
  }

  .login-title-text {
    font-weight: bold;
    font-size: 20px;
    color: #409eff;
  }
</style>
