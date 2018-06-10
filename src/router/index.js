import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Customer from '@/components/Customer'
import About from '@/components/About'
import Add from '@/components/Add'
import CustomerDetail from '@/components/CustomerDetail'
import Edit from '@/components/Edit'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Customer',
      component: Customer
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/customer/:id',
      name: 'Add',
      component: CustomerDetail
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    }
  ]
})
