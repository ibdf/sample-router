import Vue from 'vue';
import VueRouter from 'vue-router';

const Dashboard = () => import('@/views/Dashboard');
const LayoutDefault = () => import('@/layouts/Default');
const App1View1 = () => import('@/views/app-1/View-1');
const App1View2 = () => import('@/views/app-1/View-2');
const View2Children = () => import('@/views/app-1/View2Children');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/app-1',
    name: 'app-1',
    component: LayoutDefault,
    children: [
      {
        path: 'app-1-view-1',
        name: 'app-1-view-1',
        component: App1View1,
      },
      {
        path: 'app-1-view-2',
        name: 'app-1-view-2',
        component: App1View2,
        children: [
          {
            path: 'app-1-view-2-children/:resultId',
            name: 'app-1-view-2-children',
            component: View2Children,
            props: true,
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
