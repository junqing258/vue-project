import "./assets/style.scss";
import App from './App.vue'
import Foo from './Foo.vue'
import Bar from './Bar.vue'
import Game from './Game.vue'

const routes = [
  { path: '/', redirect: '/bar' },
  { path: '/game', component: Game },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];

// Vue.use(VueLazyload);
Vue.use(VueScroller);

new Vue({
  el: '#app',
  router: new VueRouter({ routes }),
  render: h => h(App)
})