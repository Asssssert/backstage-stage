<template>
  <div class="bg">
    <div id="particles"></div>
    <div class="forgetPWD">
      <el-card shadow="hover">
        <div class="login-title" slot="header">
          <span class="login-title-text">{{$t('message.findPWD')}}</span>
        </div>
        <el-form size="small" :hide-required-asterisk="true" :model="form" :rules="rules" ref="form"
                 class="demo-ruleForm" label-position="top">
          <el-form-item prop="email">
            <el-input :placeholder="$t('message.pleaseEnterEmail')" v-model="form.email" :autofocus="true"></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input :placeholder="$t('message.pleaseEnterCode')" v-model="form.code" :autofocus="true"
                      style="width: 65%;"/>
            <el-button type="success" @click="getCode">{{$t('message.getCode')}}</el-button>
          </el-form-item>
          <el-form-item prop="newPWD" v-if="check">
            <el-input :placeholder="$t('message.pleaseEnterNewPWD')" v-model="form.newPWD" show-password></el-input>
          </el-form-item>
          <el-form-item prop="checkPWD" v-if="check">
            <el-input :placeholder="$t('message.pleaseCheckPWD')" v-model="form.checkPWD" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="small" @click="submitForm('form')" style="width: 100%;">
              {{$t('message.submit')}}
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
  import http from 'assets/js/http';

  export default {
    mixins: [http],
    name: "ForgetPWD",
    components: {},
    data() {
      return {
        check: false,
        form: {
          email: '',
          code: '',
          newPWD: '',
          checkPWD: '',
        },
        rules: {
          email: [
            {required: true, message: '请输入邮箱', trigger: 'blur'},
            {type: 'email', message: '邮箱格式不正确', trigger: 'change'},
          ],
          code: [
            {required: true, message: '请输入验证码', trigger: 'blur'},
          ],
          newPWD: [
            {required: true, message: '请输入新密码', trigger: 'blur'},
          ],
          checkPWD: [
            {required: true, message: '请再次输入密码', trigger: 'blur'},
          ],
        }
      }
    },
    mounted() {
      // particlesJS.load('particles', '../static/priticles/priticles.json');
    },
    methods: {
      getCode() {
        if (this.form.email == "") {
          _g.message("error", "邮箱不能为空");
          return;
        }
        // this.apiPost(api.forgetPWD,this.form)
        //   .then(resp=>{
        //     _g.notification("success", resp.msg);
        //     this.check=true;
        //   })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.form.checkPWD != this.form.newPWD) {
              _g.message("error", "两次密码不相同");
              return;
            }
            let u = {
              email: this.form.email,
              code: this.form.code,
              newPWD: md5(this.form.newPWD)
            };
            // this.apiPost(api.resetPWD,u)
            //   .then(resp=>{
            //     _g.notification("success", resp.msg);
            //     _g.toPageByPath("login");
            //   })
          }
        });
      },
    },
    filters: {}
  }

</script>

<style scoped>
  .forgetPWD {
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

  #particles {
    position: absolute;
    width: 100%;
    background-color: #3a8ee6;
  }
</style>
