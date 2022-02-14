<template>
    <div class="signin">
        <header class="header">
            <h1 class="header__heading">ログイン</h1>
        </header>
        <main class="signin__wrap">
            <div class="signin__wrap__img">
                <img src="../../assets/signup/logo-small.svg" alt="戻るボタンアイコン">
            </div>
            <div class="signin__wrap__input">
                <section class="signin__wrap__input__box">
                    <label class="signin__wrap__input__box__heading">メールアドレス</label><br>
                    <input type="email" placeholder="メールアドレスを入力する" v-model="email"/>
                </section>
                <section class="signin__wrap__input__box">
                    <label class="signin__wrap__input__box__heading">パスワード</label><br>
                    <input type="password" placeholder="パスワードを入力する" v-model="password"/>
                </section>
            </div>
            <button @click="signIn" class="signin__wrap__btn">ログインする</button>
            <router-link to="" class="signin__wrap__forget">パスワードをお忘れですか？</router-link>
            <div class="signin__wrap__border"></div>
            <div class="signin__wrap__signup">
                <p>アカウントをお持ちでない方はこちらから</p>
                <router-link to="Signup">新機会員登録をする</router-link>
            </div>
        </main>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signIn: function () {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user, "ログイン成功");
          this.$router.push('Home')
          // this.$router.push('/ecc/hisimaru/works/linect/QuestionTtl')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          alert("メールアドレスかパスワードが間違っています");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/_vars";
@import "@/sass/header";
.signin__wrap{
    margin-top: 150px;
    &__img{
        margin-bottom: 50px;
        text-align: center;
    }
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
    &__forget{
        display: block;
        width: 150px;
        color: #EB734B;
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 1.2px;
        margin: 24px auto;
        padding-bottom: 2px;
        border-bottom: solid 0.5px #EB734B;
        text-decoration: none;
    }
    &__border{
        width: 295px;
        border: 1px solid #F3F3F3;
        margin: 0 auto;
    }
    &__signup{
        width: 230px;
        margin: 16px auto 8px;
        text-align: center;
        p{
            font-size: 1rem;
            font-weight: 400;
            letter-spacing: 1.2px;
            margin-bottom: 8px;
        }
        a{
            color: #EB734B;
            font-size: 1rem;
            font-weight: 400;
            letter-spacing: 1.2px;
            margin: 24px auto;
            padding-bottom: 2px;
            border-bottom: solid 0.5px #EB734B;
            text-decoration: none;
        }
    }
}
::placeholder {
  color: #D8D8D8;
}
</style>