<template>
    <div class="firstview">
        <div class="firstview__img">
            <img src="../../assets/signup/logo.svg" alt="">
        </div>
        <div class="firstview__link">
            <router-link to="Signin" class="firstview__link__signin">ログイン</router-link>
            <router-link to="Signup" class="firstview__link__signup">新規会員登録</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.firstview{
    &__img{
        width: 100%;
        height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }
    &__link{
        width: 295px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        &__signin{
            width: 100%;
            line-height: 48px;
            background-color: #EB734B;
            border-radius: 112px;
            color: #fff;
            text-align: center;
            font-size: 1.4rem;
            font-weight: 700;
            letter-spacing: 2px;
            text-decoration: none;
            margin-bottom: 24px;
        }
        &__signup{
            width: 100%;
            line-height: 48px;
            background-color: #fff;
            border-radius: 112px;
            color: #EB734B;
            border: solid 2px #EB734B;
            text-align: center;
            font-size: 1.4rem;
            font-weight: 700;
            letter-spacing: 2px;
            text-decoration: none;
        }
    }
}
</style>