// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*@import "../static/css/reset.css";*/
import "../static/css/ui/css/lib/animate.min.css";
import "../static/css/ui/css/lib/app.min.1.css";
import "../static/css/ui/css/lib/app.min.2.css";
import "../static/css/ui/css/lib/sweetalert.css";
import "../static/css/ui/css/material-design-iconic-font/dist/css/material-design-iconic-font.min.css";

import jquery from 'jquery';
import bootstrap from 'bootstrap';
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
