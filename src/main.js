import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from "firebase/compat/app";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsxYT93mQpZr09ADNKtu7TsTefe16r3s8",
  authDomain: "monery-32a14.firebaseapp.com",
  projectId: "monery-32a14",
  storageBucket: "monery-32a14.appspot.com",
  messagingSenderId: "57269227858",
  appId: "1:57269227858:web:69c8f1e3901be678baaa8b"
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  firebase,
  render: h => h(App)
}).$mount('#app')
