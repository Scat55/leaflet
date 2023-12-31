import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Welcome';
import Map from '../components/Map';
import EmptyMap from '../components/EmptyMap';
import Dots from '../components/MapWithDots';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/map',
    name: 'map',
    component: Map,
  },
  {
    path: '/emtymap',
    name: 'emptymap',
    component: EmptyMap,
  },
  {
    path: '/dots',
    name: 'dots',
    component: Dots,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
