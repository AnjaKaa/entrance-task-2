// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ru-Ru'

// configure language
Vue.use(ElementUI, { locale })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return router.routes[this.currentRoute]
    }
  },
  components: {App},
  template: '<App/>'
})
