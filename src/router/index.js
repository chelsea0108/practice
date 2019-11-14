import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Player from '@/components/Player' //①import


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },

//②profile
   {
      path: '/Player',
      name: 'Player',
      component: Player
    }
  ]
})