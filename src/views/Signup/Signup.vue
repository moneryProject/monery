<template>
    <div class="signup">
        <header class="header">
            <h1 class="header__heading">アカウント登録</h1>
        </header>
        <main class="signup__wrap">
            <div class="signup__wrap__input">
                <section class="signup__wrap__input__box">
                    <label class="signup__wrap__input__box__heading">なまえ</label><br>
                    <input type="text" placeholder="入力してください(15文字以内)" maxlength="15" v-model="username"/>
                </section>
                <section class="signup__wrap__input__box">
                    <label class="signup__wrap__input__box__heading">メールアドレス</label><br>
                    <input type="email" placeholder="イベントタイトル" v-model="email"/>
                </section>
                <section class="signup__wrap__input__box">
                    <label class="signup__wrap__input__box__heading">パスワード</label><br>
                    <input type="password" placeholder="入力してください(15文字以内)" v-model="password"/>
                </section>
                <section class="signup__wrap__input__box">
                    <label class="signup__wrap__input__box__heading">もう一度パスワードを入力してください</label><br>
                    <input type="password" placeholder="入力してください(15文字以内)" v-model="repassword"/>
                </section>
            </div>
            <button @click="signUp" class="signup__wrap__btn">確認する</button>
        </main>
    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "@/main.js";
export default {
  data () {
      return {
      email: '',
      password: '',
      repassword: '',
      username: '',
      }
  },
  methods: {
    signUp: function () {
      const auth = getAuth();
      if(this.password === this.repassword){
        createUserWithEmailAndPassword(auth, this.email, this.password, this.repassword)
          .then((userCredential)=>{
            const user = userCredential.user;
            const docRef = addDoc(collection(firestore, "users"), {
              user: this.username,
            });
            localStorage.setItem('obj', JSON.stringify({
              email: this.email,
              username: this.username,
              password: this.password
            }))
            console.log("Document written with ID: ", docRef.id, user, "成功しました");
            this.$router.push('Registration')
          })
        .catch((error)=>{
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage, "失敗");
        })
      }else{
        alert("パスワード不一致");
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/sass/_vars";
@import "@/sass/header";
.signup__wrap{
    margin-top: 150px;
    &__input{
        width: 295px;
        margin: 0 auto;
        &__box{
            width: 100%;
            margin-bottom: 25px;
            &__heading{
                color: #585858;
                font-size: 1.2rem;
                font-weight: 700;
                letter-spacing: 0.8px;
                margin-bottom: 8px;
            }
            input{
                width: 100%;
                border-bottom: 1px solid #F3F3F3;
                padding: 8px 0;
                font-size: 1.2rem;
                font-weight: 700;
                letter-spacing: 0.8px;
            }
        }
    }
    &__btn{
        display: block;
        width: 295px;
        line-height: 48px;
        background-color: #EB734B;
        color: #fff;
        font-size: 1.4rem;
        text-align: center;
        text-decoration: none;
        border-radius: 112px;
        margin: 60px auto 0;
    }
}
::placeholder {
  color: #D8D8D8;
}
</style>