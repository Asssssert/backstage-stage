//i18n.js

import Vue from 'vue'
import Lockr from 'lockr'
import VueI18n from 'vue-i18n'
import messages from './langs'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.lang || 'cn',
  // locale: Lockr.get("la") ,
  messages
});

export default i18n
