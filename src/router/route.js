import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import layout from "@/components/mainframe/layout";
import userinfo from "@/components/views/userinfo";
import changeinfo from "@/components/views/changeinfo";
import Login from "@/components/views/Login";
import PersonalCsv from "@/components/views/PersonalCsv";
import OthersCsv from "@/components/views/OthersCsv"
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
    },
        {
            path: '/modifyPassword',
            name: 'modifyPassword',
            component: () =>
                import ('../components/views/modifyPassword.vue')
        },

    {
        path: '/personalCsv',
        name: 'personalCsv',
        component:PersonalCsv
    },
    {
        path: '/othersCsv',
        name: 'othersCsv',
        component:OthersCsv
    },
        {
            path:'/uploadCsvData',
            name:'/uploadCsvData',
            component:()=>
                import('../components/views/uploadCsvData.vue')
        },
        {
            path:'/GetDetailinfo',
            name:'/GetDetailinfo',
            component:()=>
                import('../components/views/GetDetailinfo.vue')
        },
        {path: '/add',
            name: 'add',
            component: () =>
                import ('../components/views/add.vue')
        },
        {path: '/calculate',
            name: 'calculate',
            component: () =>
                import ('../components/views/calculate.vue')
        },
        {path: '/update',
            name: 'update',
            component: () =>
                import ('../components/views/update.vue')
        },
    ]
}, {
        path: '/login',
        name: 'login-register',
        component: Login
    },




]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
});
export  default router

