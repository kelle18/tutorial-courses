import Vue from 'vue';
import VueRouter from "vue-router";
import Home from "./pages/home.vue";
//要告诉 vue 使用VueRouter
Vue.use(VueRouter);





var router = new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: '/home', name: 'Home', component: Home,
        },
    ]
})
export default router;