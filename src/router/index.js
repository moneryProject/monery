import Vue from 'vue'
import VueRouter from 'vue-router'
// Home
import Home from '@/views/Home'
import Payment from '@/views/HomeOthers/Payment'
import Payer from '@/views/HomeOthers/Payer'
import PaymentMethod from '@/views/HomeOthers/PaymentMethod'
import Scan from '@/views/HomeOthers/Scan'
import AmountInput from '@/views/HomeOthers/AmountInput'
import PayDone from '@/views/HomeOthers/PayDone'
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
import Schedule from '@/views/MessageOthers/Schedule'
import MakeEvent from '@/views/MessageOthers/MakeEvent'
import GiftList from '@/views/MessageOthers/GiftList'
import ForGift from '@/views/MessageOthers/ForGift'
import Done from '@/views/MessageOthers/Done'
//Mypage
import Mypage from '@/views/Mypage'
import FriendList from '@/views/MypageOthers/FriendList'
import GroupList from '@/views/MypageOthers/GroupList'
import LocationList from '@/views/MypageOthers/LocationList'
// Notification
import Notice from '@/views/NoticeOthers/Notice'
import Ticket from '@/views/NoticeOthers/Ticket'
import Reimburse from '@/views/NoticeOthers/Reimburse'
Vue.use(VueRouter)

const displayPath = "/ecc/hisimaru/works/monery/";

// グローバルパス
const routes = [
  // Home
  {
    path: displayPath,
    name: 'Home',
    component: Home,
  },
  {
    path: displayPath+'Payment',
    name: 'Payment',
    component: Payment,
  },
  {
    path: displayPath+'Payer',
    name: 'Payer',
    component: Payer,
  },
  {
    path: displayPath+'PaymentMethod',
    name: 'PaymentMethod',
    component: PaymentMethod,
  },
  {
    path: displayPath+'Scan',
    name: 'Scan',
    component: Scan,
  },
  {
    path: displayPath+'AmountInput',
    name: 'AmountInput',
    component: AmountInput,
  },
  {
    path: displayPath+'PayDone',
    name: 'PayDone',
    component: PayDone,
  },
  // Search
  {
    path: displayPath+'Search',
    name: 'Search',
    component: Search,
  },
  {
    path: displayPath+'Location',
    name: 'Location',
    component: Location,
  },
  {
    path: displayPath+'Budget',
    name: 'Budget',
    component: Budget,
  },
  {
    path: displayPath+'Theme',
    name: 'Theme',
    component: Theme,
  },
  {
    path: displayPath+'PlanDetail',
    name: 'PlanDetail',
    component: PlanDetail,
  },
  {
    path: displayPath+'SearchResult',
    name: 'SearchResult',
    component: SearchResult,
  },
  {
    path: displayPath+'Favorite',
    name: 'Favorite',
    component: Favorite,
  },
  // Message
  {
    path: displayPath+'Message',
    name: 'Message',
    component: Message,
  },
  {
    path: displayPath+'Profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: displayPath+'MessagePage',
    name: 'MessagePage',
    component: MessagePage,
  },
  {
    path: displayPath+'MessageDetail',
    name: 'MessageDetail',
    component: MessageDetail,
  },
  {
    path: displayPath+'Schedule',
    name: 'Schedule',
    component: Schedule,
  },
  {
    path: displayPath+'MakeEvent',
    name: 'MakeEvent',
    component: MakeEvent,
  },
  {
    path: displayPath+'GiftList',
    name: 'GiftList',
    component: GiftList,
  },
  {
    path: displayPath+'ForGift',
    name: 'ForGift',
    component: ForGift,
  },
  {
    path: displayPath+'Done',
    name: 'Done',
    component: Done,
  },
  // MyPage
  {
    path: displayPath+'Mypage',
    name: 'Mypage',
    component: Mypage,
  },
  {
    path: displayPath+'FriendList',
    name: 'FriendList',
    component: FriendList,
  },
  {
    path: displayPath+'GroupList',
    name: 'GroupList',
    component: GroupList,
  },
  {
    path: displayPath+'LocationList',
    name: 'LocationList',
    component: LocationList,
  },
  // Notification
  {
    path: displayPath+'Notice',
    name: 'Notice',
    component: Notice,
  },
  {
    path: displayPath+'Ticket',
    name: 'Ticket',
    component: Ticket,
  },
  {
    path: displayPath+'Reimburse',
    name: 'Reimburse',
    component: Reimburse,
  },
]
// ローカルパス
// const routes = [
//   // Home
//   {
//     path: '/',
//     name: 'Home',
//     component: Home,
//   },
//   {
//     path: '/Payment',
//     name: 'Payment',
//     component: Payment,
//   },
//   {
//     path: '/Payer',
//     name: 'Payer',
//     component: Payer,
//   },
//   {
//     path: '/PaymentMethod',
//     name: 'PaymentMethod',
//     component: PaymentMethod,
//   },
//   {
//     path: '/Scan',
//     name: 'Scan',
//     component: Scan,
//   },
//   {
//     path: '/AmountInput',
//     name: 'AmountInput',
//     component: AmountInput,
//   },
//   {
//     path: '/PayDone',
//     name: 'PayDone',
//     component: PayDone,
//   },
//   // Search
//   {
//     path: '/Search',
//     name: 'Search',
//     component: Search,
//   },
//   {
//     path: '/Location',
//     name: 'Location',
//     component: Location,
//   },
//   {
//     path: '/Budget',
//     name: 'Budget',
//     component: Budget,
//   },
//   {
//     path: '/Theme',
//     name: 'Theme',
//     component: Theme,
//   },
//   {
//     path: '/PlanDetail',
//     name: 'PlanDetail',
//     component: PlanDetail,
//   },
//   {
//     path: '/SearchResult',
//     name: 'SearchResult',
//     component: SearchResult,
//   },
//   {
//     path: '/Favorite',
//     name: 'Favorite',
//     component: Favorite,
//   },
//   // Message
//   {
//     path: '/Message',
//     name: 'Message',
//     component: Message,
//   },
//   {
//     path: '/Profile',
//     name: 'Profile',
//     component: Profile,
//   },
//   {
//     path: '/MessagePage',
//     name: 'MessagePage',
//     component: MessagePage,
//   },
//   {
//     path: '/MessageDetail',
//     name: 'MessageDetail',
//     component: MessageDetail,
//   },
//   {
//     path: '/Schedule',
//     name: 'Schedule',
//     component: Schedule,
//   },
//   {
//     path: '/MakeEvent',
//     name: 'MakeEvent',
//     component: MakeEvent,
//   },
//   {
//     path: '/GiftList',
//     name: 'GiftList',
//     component: GiftList,
//   },
//   {
//     path: '/ForGift',
//     name: 'ForGift',
//     component: ForGift,
//   },
//   {
//     path: '/Done',
//     name: 'Done',
//     component: Done,
//   },
//   // MyPage
//   {
//     path: '/Mypage',
//     name: 'Mypage',
//     component: Mypage,
//   },
//   {
//     path: '/FriendList',
//     name: 'FriendList',
//     component: FriendList,
//   },
//   {
//     path: '/GroupList',
//     name: 'GroupList',
//     component: GroupList,
//   },
//   {
//     path: '/LocationList',
//     name: 'LocationList',
//     component: LocationList,
//   },
//   {
//     path: '/Notice',
//     name: 'Notice',
//     component: Notice,
//   },
//   {
//     path: '/Ticket',
//     name: 'Ticket',
//     component: Ticket,
//   },
//   {
//     path: '/Reimburse',
//     name: 'Reimburse',
//     component: Reimburse,
//   },
//   // Notification
// ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
