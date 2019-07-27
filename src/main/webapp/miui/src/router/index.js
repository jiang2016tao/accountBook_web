import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../App.vue'
import login from "../components/login/login.vue";
import home from "../components/home/home.vue";
import account from "../components/account/account";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
      path:'/home',
      name:'home',
      component:home,
      redirect:'/home/account',
      children:[
        {
          path:"account",
          name:"account",
          component:account
        }
      ]
    }
  ]
})
