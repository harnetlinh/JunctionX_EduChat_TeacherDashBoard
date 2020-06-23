import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const router = new Router({
    mode: 'history',
    routes: 
    [
        {
            path:'/',
            redirect:'/menu',
            meta: {
                title: 'Home Page',
                metaTags: [
                  {
                    name: 'description',
                    content: 'The home page '
                  },
                  {
                    property: 'og:description',
                    content: 'The home page '
                  }
                ]
            }
        },
        {
            path: '/home',
            component: () => import('../components/Home.vue'),
            children:
            [
                {
                    path: 'menu',
                    component: () => import('../components/Menu.vue'),
                    alias: '/menu',
                    meta: {
                        title: 'Menu Page',
                        metaTags: [
                          {
                            name: 'description',
                            content: 'The menu page'
                          },
                          {
                            property: 'og:description',
                            content: 'The menu page'
                          }
                        ]
                    }
                },
                {
                    path: 'dashboard',
                    component: () => import('../components/Dashboard.vue'),
                    alias: '/dashboard',
                    meta: {
                        title: 'Teacher Dashboard',
                        metaTags: [
                          {
                            name: 'description',
                            content: 'Teacher Dashboard'
                          },
                          {
                            property: 'og:description',
                            content: 'Teacher Dashboard'
                          }
                        ]
                    }
                },
                
            ]
        }
    ]
});

export default router;