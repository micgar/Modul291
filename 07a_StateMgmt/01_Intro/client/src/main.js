import Vue from 'vue'

//Demo_02
//import App from './App-01.vue'
//import store from './store/02_getters'

//Demos_03
// import App from './App-02.vue'
// import store from './store/03_getters-with-params-1'

//Demos_04
// import App from './App-04.vue'
// import store from './store/04_getters-with-params-2'

//Demos_05
//import App from './App-03.vue'
//import store from './store/05_mutations'

//Demos_06
import App from './App-06.vue'
import store from './store/06_mutations'

//Import Bootstrap
import { BootstrapVue } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
