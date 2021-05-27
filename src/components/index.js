import Vue from 'vue';


// 匯入COMPONENT再從home 載入

// Vue.component('home', () => import('./HomePage.vue'));
Vue.component('nav-bar', () => import('./Navbar.vue'));
Vue.component('footer-', () => import('./Footer.vue'));
Vue.component('side', () => import('./Sidebar.vue'));