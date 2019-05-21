import Vue from 'vue'
import VueRouter from 'vue-router'

import home from './Home.vue'
import account from './Account.vue'

Vue.use(VueRouter)

export default new Router({
    routes: [
        {
            path: '/',

            children: [
                {
                    path: 'home',
                    component: home
                },
                {
                    path: 'account',
                    component: account
                }
            ],
    ]
})