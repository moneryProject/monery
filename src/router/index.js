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
import AmountInputMoney from '@/views/HomeOthers/AmountInputMoney'
import PaymentMoney from '@/views/HomeOthers/PaymentMoney'
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
// Signin Signup
import FirstView from '@/views/Signup/FirstView'
import Signup from '@/views/Signup/Signup'
import Signin from '@/views/Signup/Signin'
import Registration from '@/views/Signup/Registration'
import Confirmation from '@/views/Signup/Confirmation'
import RegistrationDone from '@/views/Signup/RegistrationDone'
import RegisterProfile from '@/views/Signup/RegisterProfile'

Vue.use(VueRouter)

const displayPath = "/ecc/hisimaru/works/monery/";

// グローバルパス
// ローカルパス
const routes = [
  // Home
  {
    path: displayPath+'Home',
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
  {
    path: displayPath+'AmountInputMoney',
    name: 'AmountInputMoney',
    component: AmountInputMoney,
  },
  {
    path: displayPath+'PaymentMoney',
    name: 'PaymentMoney',
    component: PaymentMoney,
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
  // Signup
  {
    path: displayPath+'Signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: displayPath+'Signin',
    name: 'Signin',
    component: Signin,
  },
  {
    path: displayPath+'Registration',
    name: 'Registration',
    component: Registration,
  },
  {
    path: displayPath+'Confirmation',
    name: 'Confirmation',
    component: Confirmation,
  },
  {
    path: displayPath+'RegistrationDone',
    name: 'RegistrationDone',
    component: RegistrationDone,
  },
  {
    path: displayPath+'RegisterProfile',
    name: 'RegisterProfile',
    component: RegisterProfile,
  },
  {
    path: displayPath,
    name: 'FirstView',
    component: FirstView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
