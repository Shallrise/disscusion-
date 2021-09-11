import Vue from 'vue'
import VueRouter from 'vue-router'
// import LoginBlog from '../components/LoginBlog.vue'
// import Host from '../components/Host.vue'
// import CreateArticle from '../views/CreateArticle.vue'
// import ListArticle from "../views/ListArticle.vue"
// import ModifyAriticle from "../views/ModifyAriticle.vue"
import Loginmu from '../components/Loginmu.vue'
import Message from '../views/Message.vue'
// import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
    // { path: '/Loginblog', component: LoginBlog },
    { path: '/', redirect: '/message' },
    { path: '/loginmu', component: Loginmu },
    { path: '/message', component: Message }
    // { path: '/home', component: Home },
    // {
    //     path: '/host',
    //     name: 'Host',
    //     component: Host,
    //     children: [{
    //             path: '/article/create',
    //             component: CreateArticle
    //         },
    //         {
    //             path: '/article/index',
    //             component: ListArticle
    //         },
    //         {
    //             path: '/article/modify/:id',
    //             component: ModifyAriticle
    //         },
    //     ]
    // },

]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router