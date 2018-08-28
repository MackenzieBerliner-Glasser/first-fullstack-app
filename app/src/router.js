import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Celebrities from './components/Celebrities.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/celebrities', component: Celebrities },
    { path: '*', redirect: '/' }
  ]
});