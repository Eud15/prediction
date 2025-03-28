import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useAppStore } from '@/stores/index';
import appSetting from '@/app-setting';


import Login from '../modules/auth/views/Login.vue'
import Profile from '@/modules/auth/views/Profile.vue';
import ResetPassword from '@/modules/auth/views/ResetPassword.vue';
import VideoHome from '@/modules/video/views/VideoHome.vue';
import VideoAccueil from '@/modules/video/views/VideoAccueil.vue';
import Settings from '@/modules/video/views/Settings.vue';
import Inscription from '@/modules/video/views/Inscription.vue';
import Details from '@/modules/video/views/Detail.vue';
import Dash from '@/modules/video/views/Dash.vue'
import Category from '@/modules/video/views/Category.vue'
import CategoryDetail from '@/modules/video/views/CategoryDetail.vue'
import Articles from '@/modules/video/views/Articles.vue'
import ArticleDetail from '@/modules/video/views/ArticleDetail.vue'
import Test from '@/modules/video/views/Test.vue'
import Register from '@/modules/auth/views/Register.vue';
const routes: RouteRecordRaw[] = [
    // dashboard
    {path: '/video', name: 'video-home', component: VideoHome},
    // {path: '/', name: 'video-accueil', component: VideoAccueil},
    // {path: '/', name: 'video-accueil', component: VideoAccueil},
    {path: '/test', name: 'test', component: Test, meta: { layout: 'auth' },},
    {path: '/dash', name: 'dash', component: Dash},
    {path: '/category', name: 'category', component: Category},
    {path: '/category/detail', name: 'category-detail', component: CategoryDetail},
    {path: '/articles', name: 'articles', component: Articles},
    {path: '/article/detail', name: 'articles-detail', component: ArticleDetail},
    {path: '/', name: 'video-settings', component: Settings,  meta: { layout: 'auth' },},
    {path: '/inscription', name: 'inscription', component: Inscription,  meta: { layout: 'auth' },},
    {path: '/video/details', name: 'video-details', component: Details},
    {path: '/register', name: 'register', component: Register,  meta: { layout: 'auth' },},

    
    {path: '/user/reset-password', name: 'reset-password', component: ResetPassword, meta: { layout: 'auth' },},
    

    //authentication

    {
        path: '/auth/login',
        name: 'login',
        component: Login,
        meta: { layout: 'auth' },
    },
];

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    const store = useAppStore();

    if (to?.meta?.layout == 'auth') {
        store.setMainLayout('auth');
    } else {
        store.setMainLayout('app');
    }
    next(true);
});
router.afterEach((to, from, next) => {
    appSetting.changeAnimation();
});
export default router;
