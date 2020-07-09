import Vue from 'vue'
import App from './App'

import './main.css'

import weather from '../packages/index'
Vue.use(weather)



new Vue({
    render: h => h(App)
}).$mount('#app')