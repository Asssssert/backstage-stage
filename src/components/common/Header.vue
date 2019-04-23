<template>
  <div class="header">
    <div class="h-name">
      <el-dropdown size="small" placement="bottom-start" trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        {{user.nickname}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">个人设置</el-dropdown-item>
          <el-dropdown-item command="b">注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  import store from "../../vuex/store";
  import http from 'assets/js/http';
  import api from 'assets/js/api';

  export default {
    mixins: [http],
    name: "Header",
    components: {},
    data() {
      return {
        user: store.getters.user,
      }
    },
    mounted: function () {
      // this.getUser();
    },
    methods: {
      getUser() {
        this.apiGet(api.userGetByToken)
          .then(resp => {
            let user = resp.data;
            store.dispatch('upUser', user);
            this.user = user;
            // store.dispatch('getUser');
          })
      },
      handleCommand(command) {
        switch (command) {
          case 'b':
            this.apiGet(api.logout)
              .then(resp => {
                _g.notification("success", resp.msg);
                store.dispatch("logout");
                _g.toPageByPath('/login');
              });
            break;
        }
      }
    },
    filters: {}
  }
</script>

<style scoped>

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .h-name {
    position: relative;
    top: 50%;
    transform: translate(100%, 80%);
    margin-right: 150px;
  }

  .header {
    overflow: hidden;
    height: 75px;
  }
</style>
