import App from './App.vue'
import Foo from './Foo.vue'
import Bar from './Bar.vue'

/*const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }*/

const routes = [
	{ path: '/', redirect: '/bar' },
  	{ path: '/foo', component: Foo },
  	{ path: '/bar', component: Bar }
]

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})