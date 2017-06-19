import Vue from 'vue'
import Router from 'vue-router'
import forms from '@/components/forms'
import record from '@/components/record'

Vue.use(Router)

export default new Router({
  'linkActiveClass': 'active',
  routes: [
    {
      path: '/',
      redirect: '/forms'
    },
    {
      path: '/forms',
      name: '点餐',
      component: forms
    },
    {
      path: '/record',
      name: '点餐记录',
      component: record
    }
  ]
})
