<template>
    <div class="registration">
        <header class="header">
            <h1 class="header__heading">アカウント登録内容確認</h1>
        </header>
        <main class="registration__wrap">
            <div class="registration__wrap__input">
                <section class="registration__wrap__input__box">
                    <p class="registration__wrap__input__box__heading">なまえ</p><br>
                    <p class="registration__wrap__input__box__text">{{this.info.username}}</p>
                </section>
                <section class="registration__wrap__input__box">
                    <p class="registration__wrap__input__box__heading">メールアドレス</p><br>
                    <p class="registration__wrap__input__box__text">{{this.info.email}}</p>
                </section>
                <section class="registration__wrap__input__box">
                    <p class="registration__wrap__input__box__heading">パスワード</p><br>
                    <p class="registration__wrap__input__box__text">{{this.info.password}}</p>
                </section>
                <section class="registration__wrap__input__box">
                    <p class="registration__wrap__input__box__heading">もう一度パスワードを入力してください</p><br>
                    <p class="registration__wrap__input__box__text">{{this.info.password}}</p>
                </section>
            </div>
            <router-link to="RegistrationDone" class="registration__wrap__link">アカウントを登録する</router-link>
            <router-link to="Signup" class="registration__wrap__prelink">確認する</router-link>
        </main>
    </div>
</template>

<script>
export default {
    data () {
      return {
        info:{},
      }
  },
  mounted() {
    this.info = JSON.parse(localStorage.getItem('obj'))
  },
}
</script>

<style lang="scss" scoped>
@import "@/sass/_vars";
@import "@/sass/header";
.registration__wrap{
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
            &__text{
                width: 100%;
                border-bottom: 1px solid #F3F3F3;
                padding: 8px 0;
                font-size: 1.2rem;
                font-weight: 700;
                letter-spacing: 0.8px;
            }
        }
    }
    &__link{
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
    &__prelink{
        display: block;
        width: 295px;
        line-height: 48px;
        background-color: #fff;
        color: #EB734B;
        font-size: 1.4rem;
        text-align: center;
        text-decoration: none;
        border-radius: 112px;
        margin: 24px auto 0;
        border: 2px solid #EB734B
    }
}
</style>