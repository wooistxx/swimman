import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home.vue'
// import Login from '../components/Login.vue'
// import LandingPage from '../components/LandingPage.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue'),
    children:[
      {
        path: '',
        name: 'Index',
        component: () => import('../components/Index.vue'),
      },
      // top ==================================================
      {
        path: '/top/member-register',
        name: 'TopMemberCheckout',
        component: () => import('../components/Top/MemberCheckout.vue'),
      },
      {
        path: '/top/member-pay',
        name: 'TopMemberPay',
        component: () => import('../components/Top/MemberPay.vue'),
      },
      {
        path: '/top/swim-proj',
        name: 'TopSwimProj',
        component: () => import('../components/Top/SwimProj.vue'),
      },
      {
        path: '/top/ball-proj',
        name: 'TopBallProj',
        component: () => import('../components/Top/BallProj.vue'),
      },
      {
        path: '/top/identity',
        name: 'TopIdentity',
        component: () => import('../components/Top/Identity.vue'),
      },
      {
        path: '/top/day-report',
        name: 'TopDayReport',
        component: () => import('../components/Top/DayReport.vue'),
      },
      // swim ==================================================
      {
        path : '/swim/tickets-sale',
        name : 'SwimTicketsSale',
        component: () => import('../components/Swim/TicketsSale.vue'),
      },
      {
        path: '/swim/train',
        name: 'SwimTrain',
        component: () => import('../components/Swim/Train.vue'),
      },
      {
        path: '/swim/tickets-query',
        name: 'SwimTicketsQuery',
        component: () => import('../components/Swim/TicketQuery.vue'),
      },
      // ball ==================================================
      {
        path: '/ball/place-rent',
        name: 'BallRent',
        component: () => import('../components/Ball/PlaceRent.vue'),
      },
      {
        path: '/ball/place-status',
        name: 'BallStatus',
        component: () => import('../components/Ball/PlaceStatus.vue'),
      },
      {
        path: '/ball/tickets',
        name: 'BallTickets',
        component: () => import('../components/Ball/Tickets.vue'),
      },
      // Stage ==================================================
      {
        path: '/stage/customer-ident',
        name: 'StageCustomerIdent',
        component: () => import('../components/Stage/CustomerIdent.vue'),
      },
      {
        path: '/stage/shower',
        name: 'StageShower',
        component: () => import('../components/Stage/Shower.vue'),
      },

      // Error ==================================================
      {
        path: '*',
        name: 'HomeOther',
        component: () => import('../components/ErrorPage.vue'),
      }
    ]
  },
  
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '*',
    name: 'other',
    component: () => import('../components/ErrorPage.vue'),
  }
]
const router = new VueRouter({
  routes
})
export default router
