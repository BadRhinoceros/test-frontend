import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/views/layout/Layout'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/',
    name: 'main',
    children: [
      {
        path: '/',
        component: () => import('@/views/main/index')
      }
    ]
  },
  {
    path: '/about_djelato',
    component: Layout,
    redirect: '/about_djelato',
    name: 'about_djelato',
    children: [
      {
        path: '/',
        component: () => import('@/views/about_djelato/index')
      }
    ]
  },
  {
    path: '/team',
    component: Layout,
    redirect: '/team',
    name: 'team',
    children: [
      {
        path: '/',
        component: () => import('@/views/team/index')
      }
    ]
  },
  {
    path: '/materials',
    component: Layout,
    redirect: '/materials',
    name: 'materials',
    children: [
      {
        path: '/',
        component: () => import('@/views/materials/index')
      }
    ]
  },
  {
    path: '/certifications',
    component: Layout,
    redirect: '/certifications',
    name: 'certifications',
    children: [
      {
        path: '/',
        component: () => import('@/views/certifications/index')
      }
    ]
  },
  {
    path: '/partners',
    component: Layout,
    redirect: '/partners',
    name: 'partners',
    children: [
      {
        path: '/',
        component: () => import('@/views/partners/index')
      }
    ]
  },
  {
    path: '/franchise',
    component: Layout,
    redirect: '/franchise',
    name: 'franchise',
    children: [
      {
        path: '/',
        component: () => import('@/views/franchise/index')
      }
    ]
  },
  // {
  //   path: '/test_index',
  //   component: Layout,
  //   redirect: '/test',
  //   name: 'test',
  //   children: [
  //     {
  //       path: '/',
  //       component: () => import('@/views/test/index')
  //     }
  //   ]
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
