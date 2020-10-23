import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import { VuelidatePlugin } from '@vuelidate/core'
import axios from 'axios'
import VueAxios from 'vue-axios'


import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App)
.use(router)
//.use(VuelidatePlugin)
.use(VueAxios, axios)
.mount('#app')