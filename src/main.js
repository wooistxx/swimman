
import Vue from 'vue';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'


Vue.use(VueRouter)
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});


// import Vue from 'vue'
// import App from './App.vue'
// // import router from './router'

// Vue.config.productionTip = false


// new Vue({
//   components: { App },

// }).$mount('#app')
