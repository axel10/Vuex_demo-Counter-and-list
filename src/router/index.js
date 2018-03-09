import Vue from 'vue'
import Router from 'vue-router'
import Num from '../components/Num'
import List from  '../components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/num',
      component:Num
    },
    {
      path:'/list',
      component:List
    },
    {
      path:"*",
      redirect:"/num"
    }
  ]
})
