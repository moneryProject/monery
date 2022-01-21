import Vue from 'vue'
import VueRouter from 'vue-router'
// Home
import Home from '@/views/Home'
import Payment from '@/views/HomeOthers/Payment'
import Payer from '@/views/HomeOthers/Payer'
import PaymentMethod from '@/views/HomeOthers/PaymentMethod'
import Scan from '@/views/HomeOthers/Scan'
// Search
import Search from '@/views/Search'
import Location from '@/views/SearchOthers/Location'
import Budget from '@/views/SearchOthers/Budget'
import Theme from '@/views/SearchOthers/Theme'
import PlanDetail from '@/views/SearchOthers/PlanDetail'
import SearchResult from '@/views/SearchOthers/SearchResult'
import Favorite from '@/views/SearchOthers/Favorite'
// Message
import Message from '@/views/Message'
import Profile from '@/views/MessageOthers/Profile'
import MessagePage from '@/views/MessageOthers/MessagePage'
import MessageDetail from '@/views/MessageOthers/MessageDetail'
//Mypage
import Mypage from '@/views/Mypage'
import FriendList from '@/views/MypageOthers/FriendList'
import GroupList from '@/views/MypageOthers/GroupList'
import LocationList from '@/views/MypageOthers/LocationList'
Vue.use(VueRouter)

const routes = [
  // Home
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Payment',
    name: 'Payment',
    component: Payment,
  },
  {
    path: '/Payer',
    name: 'Payer',
    component: Payer,
  },
  {
    path: '/PaymentMethod',
    name: 'PaymentMethod',
    component: PaymentMethod,
  },
  {
    path: '/Scan',
    name: 'Scan',
    component: Scan,
  },
  // Search
  {
    path: '/Search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/Location',
    name: 'Location',
    component: Location,
  },
  {
    path: '/Budget',
    name: 'Budget',
    component: Budget,
  },
  {
    path: '/Theme',
    name: 'Theme',
    component: Theme,
  },
  {
    path: '/PlanDetail',
    name: 'PlanDetail',
    component: PlanDetail,
  },
  {
    path: '/SearchResult',
    name: 'SearchResult',
    component: SearchResult,
  },
  {
    path: '/Favorite',
    name: 'Favorite',
    component: Favorite,
  },
  // Message
  {
    path: '/Message',
    name: 'Message',
    component: Message,
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/MessagePage',
    name: 'MessagePage',
    component: MessagePage,
  },
  {
    path: '/MessageDetail',
    name: 'MessageDetail',
    component: MessageDetail,
  },
  // MyPage
  {
    path: '/Mypage',
    name: 'Mypage',
    component: Mypage,
  },
  {
    path: '/FriendList',
    name: 'FriendList',
    component: FriendList,
  },
  {
    path: '/GroupList',
    name: 'GroupList',
    component: GroupList,
  },
  {
    path: '/LocationList',
    name: 'LocationList',
    component: LocationList,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
