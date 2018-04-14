import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '../components/content/Main/Main'
import List from '../components/content/List/List'
import Market from '../components/content/Market/Market'
import Login from '../components/content/Login/Login'
import Registe from '../components/content/Login/Registe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect:"/main"
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/market',
      name: 'Market',
      component: Market
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registe',
      name: 'Registe',
      component: Registe
    }
  ]
})
