import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Celebrities from './components/Celebrities.vue';
import CelebDetail from './components/CelebDetail.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/celebrities', component: Celebrities },
    { path: '*', redirect: '/' },
    { path: '/celebrities/:id', component: CelebDetail }
  ]
});