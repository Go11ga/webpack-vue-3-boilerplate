import { createRouter, createWebHistory } from 'vue-router';
import {
  PAGE_TEST,
  PAGE_ERROR,
} from '@/constants/router';

const routes = [
  {
    path: '/',
    name: PAGE_TEST,
    component: () => import('@/pages/TestPage'),
    meta: {
      layout: 'Main',
    },
  },
  {
    path: '/:catchAll(.*)',
    name: PAGE_ERROR,
    component: () => import('@/pages/ErrorPage'),
    meta: {
      layout: 'Empty',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
