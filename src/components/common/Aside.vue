<template>
  <el-menu
    :default-active="defaultActive"
    router
    @select="select">
    <el-submenu :index="item.path" v-for="item in menu" :key="item.path">
      <template slot="title" :disabled="item.disabled">
        <i :class="item.icon"></i>
        <span>{{item.title}}</span>
      </template>
      <el-menu-item-group v-for="i in item.children" :key="i.path">
        <el-menu-item :index="i.path" :disabled="i.disabled">{{i.title}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
  import store from "../../vuex/store";
  import http from 'assets/js/http';
  import api from 'assets/js/api';
  import {aMenu} from 'assets/js/mock'

  export default {
    mixins: [http],
    name: "Aside",
    components: {},
    data() {
      return {
        menu: [],
        defaultActive: '',
      }
    },
    mounted: function () {
      this.getMenus();
      this.initMenu()
    },
    methods: {
      getMenus() {
        // this.apiGet(api.menuGet)
        //   .then(resp => {
        //     let menuTree = _g.menuTree(resp.data,0)
        //     this.menu = menuTree;
            this.menu = aMenu;
        //   })
      },
      initMenu() {
        store.dispatch("getDefaultActive");
        this.defaultActive = store.getters.defaultActive;
        _g.toPageByPath(this.defaultActive)
      },
      select(key) {
        store.dispatch("upDefaultActive", key);
      },
    },
    filters: {}
  }
</script>

<style scoped>

</style>
