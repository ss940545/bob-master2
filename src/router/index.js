import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookies from "vue-cookies"
import axios from 'axios';
import Home from '@/views/Home.vue'
import { login } from '@/apis/user';

Vue.use(VueRouter)

const paths = [
  
    {
        path: '/login',
        meta: {
            title: 'login in'
        }
    },
    {
        path: '/Home',
        children: [
            {
                path: '/main',
                from: '/admin',
                meta: {
                    title: 'main'
                }
            },
            {
                path: '/provider',
                from: '/admin/account',
                meta: {
                    title: 'provider',
                }
            },
            {
                path: '/member',
                from: '/admin/account',
                name:'member',
                meta: {
                    title: 'member'
                }
            },
            {
                path: '/account',
                from: '/admin/setting',
                meta: {
                    title: 'account'
                }
            },
            {
                path: '/role',
                from: '/admin/setting',
                meta: {
                    title: 'role'
                }
            },
            {
                path: '/win_lose',
                from: '/admin/resport',
                meta: {
                    title: 'winlose'
                }
            },
            {
                path: '/history',
                from: '/admin/resport',
                meta: {
                    title: 'history'
                }
            },
            {
                path: '/login_log',
                from: '/admin/record',
                meta: {
                    title: 'loginlog'
                }
            },
            {
                path: '/course_log',
                from: '/admin/record',
                meta: {
                    title: 'courselog'
                }
            },
            {
                path: '/game_detail',
                from: '/admin/game',
                meta: {
                    title: 'gamedetail'
                }
            },
            {
                path: '/server_config',
                from: '/admin/game',
                meta: {
                    title: 'serverconfig'
                }
            }]
    },
    
]
var routes = [];

// 抓取目前路徑名稱判斷導入相對應 VUE檔案
paths.forEach((item) => {
    // console.log('paths', item); 
    if (item.path == '/login') {
        // router.push(`@/views${item.path}.vue`)
        routes.push({
            path: item.path,
            component: () => import(`@/views${item.path}.vue`),
            meta: {
                title: item.meta.title
            }
        })
    } else if (item.path == '/Home') {
        routes.push({
            path: item.path,
            component: Home,
            // 預設後台路徑
            redirect: "/admin/main",
            children: []
        })
    }
})

routes[1].children = paths[1].children.map((item) => {
    console.log('children')
    return {
        path: item.path,
        component: () => import(`@/views${item.from}${item.path}.vue`),
        meta: {
            title: item.meta.title
        }
    }
})
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    // console.log('to', to, );
    // console.log('next', next);
    // if (to.path.charAt(to.path.length-1) == "/" && to.path.length > 1){
    //     console.log('to')
    //     next(to.path.substring(0,to.path.length-1))
    // }else{
    //     console.log('noto')
    // }
    if (VueCookies.get("token") != "" && VueCookies.get("token") != null) {
       
        if (sessionStorage.getItem('status') == 200) {
            //已登入
          console.log('已登入')
            if (to.path == "/login" || to.path == "/" || to.matched.length == 0) {
              console.log('tomath', to.matched.length)
                next('main');
            }
            console.log('else')
            next();
        } else {
            axios.post('http://test777.ukyo.idv.tw/api/apitokencheck', {
                api_token: VueCookies.get('token')
            }).then(async (res) => {
                if (res.data.status != 200) {
                    //登入超時
                    sessionStorage.clear();
                    VueCookies.remove('token');
                    if (to.path != '/login') {
                        next('login');
                    }
                    next();
                } else {
                    //登入狀態
                    sessionStorage.setItem('name', res.data.result.name);
                    sessionStorage.setItem('cellphone', res.data.result.cellphone);
                    sessionStorage.setItem('chmod', res.data.result.chmod);
                    sessionStorage.setItem('gender', res.data.result.gender);
                    sessionStorage.setItem('id', res.data.result.id);
                    sessionStorage.setItem('level', res.data.result.level);
                    sessionStorage.setItem('status', res.data.status);
                    if (to.path == "/login" || to.path == "/" || to.matched.length == 0) {
                        next('main');
                    }
                    next();
                }
            });
        }
    } else {
        //未登入
        if (to.path != "/login") {
            next('login');
        }
        next();
    }
})

export default router;
