import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './router'
import App from './App.vue'
import './css/style.scss';

Vue.use(VueResource);
Vue.use(VueRouter);

// const router = new VueRouter({
//   routes: Routes
// })

// // clgt

// // Create your own directive
// Vue.directive('rainbow',{
//   bind(el,binding,vnode) {
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//   }
// });

// Vue.directive('theme',{
//   bind(el,binding,vnode) {
//     if (binding.value == 'wide') {
//       el.style.maxWidth = "1200px";
//     } else if (binding.value == 'narrow') {
//       el.style.maxWidth = "560px";
//     }

//     if (binding.arg == 'style1') {
//       el.style.background = '#ddd';
//       el.style.padding = '20px';
//     }
//   }
// });

// new Vue({
//   el: '#app',
//   render: h => h(App),
//   router: router
// })

import AppCRUD from './components/CRUD/App.vue';

new Vue({
  el: '#app',
  render: h => h(AppCRUD)
})
