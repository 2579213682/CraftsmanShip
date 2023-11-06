/* eslint-disable camelcase */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Demo from '../views/Demo.vue'
import Youke from '../views/Youke.vue'
import Noadvyouke from '../views/noadvyouke.vue'
import Secondary_chendu from '../views/Secondary_chendu.vue'
import Secondary_daguo from '../views/Secondary_daguo.vue'
import Secondary_xiaohuozi from '../views/Secondary_xiaohuozi.vue'
import Secondary_jinsheng from '../views/Secondary_jinsheng.vue'
import Link_text1 from '../views/Link_text1.vue'
import link_second from '../views/link_second.vue'
import link_second2 from '../views/link_second2.vue'
import daguo_video1 from '../views/daguo.video1.vue'
import CZH from '../views/CZH.vue'
import LXB from '../views/LXB.vue'
import AAG from '../views/AAG.vue'
import ZJM from '../views/ZJM.vue'
import HJG from '../views/HJG.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  // redirect: '/',
  name: 'home',
  component: Home
},
{
  path: '/login',
  name: 'login',
  component: Login
},
{
  path: '/register',
  name: 'register',
  component: Register
},
{
  path: '/demo',
  name: 'demo ',
  component: Demo
},
{
  path: '/youke',
  name: 'youke',
  component: Youke
},
{
  path: '/noadvyouke',
  name: 'noadbyouke',
  component: Noadvyouke
},
{
  path: '/secondary_chendu',
  name: 'secondary_chendu',
  component: Secondary_chendu
},
{
  path: '/secondary_daguo',
  name: 'secondary_daguo',
  component: Secondary_daguo
},
{
  path: '/secondary_xiaohuozi',
  name: 'secondary_xiaohuozi',
  component: Secondary_xiaohuozi
},
{
  path: '/secondary_jinsheng',
  name: 'secondary_jinsheng',
  component: Secondary_jinsheng
},
{
  path: '/link_text1',
  name: 'link_text1',
  component: Link_text1
},
{
  path: '/czh',
  name: 'czh',
  component: CZH
},
{
  path: '/lxb',
  name: 'lxb',
  component: LXB
},
{
  path: '/aag',
  name: 'aag',
  component: AAG
}, {
  path: '/zjm',
  name: 'zjm',
  component: ZJM
}, {
  path: '/hjg',
  name: 'hjg',
  component: HJG
},
{

  path: '/link_second',
  name: 'link_second',
  component: link_second
},
{
  path: '/link_second2',
  name: 'link_second2',
  component: link_second2
},
{
  path: '/daguo_video1',
  name: 'daguo_second2',
  component: daguo_video1
}
]

const router = new VueRouter({
  routes
})

// eslint-disable-next-line eol-last
export default router