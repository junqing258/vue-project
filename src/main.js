import "./assets/style.scss";
import App, { routes } from './App.vue'
// Vue.use(VueLazyload);
Vue.use(VueScroller);

new Vue({
  el: '#app',
  router: new VueRouter({ routes }),
  render: h => h(App)
})