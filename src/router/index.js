import Vue from 'vue';
import Router from 'vue-router';
import QuoteList from '@/components/QuoteList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Quote',
      component: QuoteList,
    },
  ],
});
