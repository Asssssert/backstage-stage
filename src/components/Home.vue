<template>
  <el-container>
    <el-header height="80px">
      <router-view name="header"></router-view>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <router-view name="aside"></router-view>
      </el-aside>
      <el-container>
        <el-main>
          <router-view name="main"></router-view>
        </el-main>
        <el-footer>
          <router-view name="footer"></router-view>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "Home",
    components: {},
    data() {
      return {}
    },
    mounted: function () {
    },
    methods: {},
    filters: {}
  }
</script>

<style scoped>

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
