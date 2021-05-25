import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import layout from "@/components/mainframe/layout";
import userinfo from "@/components/views/userinfo";
import changeinfo from "@/components/views/changeinfo";
import Login from "@/components/views/Login";
import Register from "@/components/views/Register";
const routes = [{
    path: '/',
    redirect: '/login'
    },
    {
    path:'/layout',
    name:'layout',
    component: () =>
        import ('../components/mainframe/layout.vue'),
    children: [{
        path: '/userinfo',
        name: 'Userinfo',
        component: () =>
            import ('../components/views/userinfo.vue')
    },
        {
        path: '/changeinfo',
        name: 'changeinfo',
        component: () =>
            import ('../components/views/changeinfo.vue')
    }
    ]
}, {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',

        component:Register
    },



]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
});
export  default router

