import 'whatwg-fetch';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './routes/application.vue';
import Index from './routes/index.vue';
import New from './routes/new.vue';
import Details from './routes/details.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/new',
    name: 'new',
    component: New,
  },
  {
    path: '/:id',
    name: 'details',
    component: Details,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({ ...App, router });
app.$mount('.app');
