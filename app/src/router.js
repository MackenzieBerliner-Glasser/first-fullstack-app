import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Celebrities from './components/Celebrities.vue';
import Celeb from './components/Celeb.vue';
import AddCeleb from './components/AddCeleb';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/celebrities', component: Celebrities },
    { path: '/celebrities/add', component: AddCeleb },
    { path: '/celebrities/:id', component: Celeb },
    { path: '*', redirect: '/' }
  ]
});