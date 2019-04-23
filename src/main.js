// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import $ from 'jquery'
import axios from 'axios'
import Lockr from 'lockr'
import Vuex from 'vuex'
import store from './vuex/store'
import global from './assets/js/global'
import md5 from 'js-md5'
import i18n from './i18n/i18n'

const bus = new Vue();
window.bus = bus;
window.md5 = md5;
window.axios = axios;
window.$ = $;
window._g = global;
window.router = router;
window.NProgress = NProgress;
window.store = store;
window.Lockr = Lockr;

Vue.config.productionTip = false;
Vue.use(Vuex);

//按需引入element组件 ----start
import {
  // Alert, //警告
  Aside, //布局-左侧边
  Button,
  Card,
  Col,
  Container,
  Footer,
  Form,
  FormItem,
  Header,
  Loading,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Message,
  MessageBox,
  // Notification,
  // Option,
  // OptionGroup,
  Pagination,
  Row,
  // Slider,
  Submenu,
  // Table,
  // TableColumn,
  // Upload,
  Input,
  // Radio,
  // RadioGroup,
  // Select,
  // Tag,
  // InputNumber,
  // TabPane,
  // Tabs,
  // Dropdown,
  // DropdownItem,
  // DropdownMenu,
  // Dialog,
  // Step,
  // Steps,
  // DatePicker,
  // Switch,
  // Autocomplete,
  // Badge,
  // Breadcrumb,
  // BreadcrumbItem,
  // ButtonGroup,
  // Carousel,
  // CarouselItem,
  // Cascader,
  Checkbox,
  // CheckboxButton,
  // CheckboxGroup,
  // Collapse,
  // CollapseItem,
  // ColorPicker,
  // Icon,
  // Popover,
  // Progress,
  // RadioButton,
  // Rate,
  // TimePicker,
  // TimeSelect,
  // Tooltip,
  // Transfer,
  // Tree,
} from 'element-ui';

Vue.use(Pagination);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
// Vue.use(Option);
// Vue.use(OptionGroup);
Vue.use(Button);
// Vue.use(Table);
// Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
// Vue.use(Alert);
// Vue.use(Slider);
Vue.use(Row);
Vue.use(Col);
// Vue.use(Upload);
Vue.use(Card);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Input);
// Vue.use(Radio);
// Vue.use(RadioGroup);
// Vue.use(Select);
// Vue.use(Tag);
// Vue.use(InputNumber);
// Vue.use(Tabs);
// Vue.use(TabPane);
// Vue.use(Dropdown);
// Vue.use(DropdownMenu);
// Vue.use(DropdownItem);
// Vue.use(Dialog);
// Vue.use(Steps);
// Vue.use(Step);
// Vue.use(DatePicker);
// Vue.use(ButtonGroup);
// Vue.use(Autocomplete);
// Vue.use(RadioButton);
Vue.use(Checkbox);
// Vue.use(CheckboxButton);
// Vue.use(CheckboxGroup);
// Vue.use(Switch);
// Vue.use(TimeSelect);
// Vue.use(TimePicker);
// Vue.use(Popover);
// Vue.use(Tooltip);
// Vue.use(Breadcrumb);
// Vue.use(BreadcrumbItem);
// Vue.use(Tree);
// Vue.use(Icon);
// Vue.use(Progress);
// Vue.use(Badge);
// Vue.use(Rate);
// Vue.use(Carousel);
// Vue.use(CarouselItem);
// Vue.use(Collapse);
// Vue.use(CollapseItem);
// Vue.use(Cascader);
// Vue.use(ColorPicker);
// Vue.use(Transfer);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

//按需引入element组件 ----end




router.beforeEach((to, from, next) => {
  store.dispatch("upDefaultActive", to.path);
  NProgress.start();
  next()
});

router.afterEach(transition => {
  NProgress.done();
});

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {App},
  template: '<App/>'
});
