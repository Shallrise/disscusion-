import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import './registerServiceWorker'
import './plugins/element.js'

import { postRequest } from './axios/api'
import { getRequest } from './axios/api'
import { putRequest } from './axios/api'
import { deleteRequest } from './axios/api'

Vue.config.productionTip = false

Vue.prototype.postRequest = postRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;

// 创建一个接口和地址,定义到Vue的原型上
Vue.prototype.$http = axios.create({
    baseURL: "http://localhost:3001/api"
})

// router.beforeEach((to, from, next) => {
//     if (to.path === '/host') {
//         const tokenStr = window.sessionStorage.getItem('tokenStr');
//         if (tokenStr) {
//             //判断用户信息是否存在
//             if (!window.sessionStorage.getItem('user')) {
//                 return getRequest('/user/account').then(resp => {
//                     if (resp) {
//                         //存入用户信息
//                         window.sessionStorage.setItem('user', JSON.stringify(resp));
//                         next();
//                     }
//                 })
//             }
//             next();
//         } else {
//             next('/loginblog')
//         }
//     } else {
//         next();
//     }
// })


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')