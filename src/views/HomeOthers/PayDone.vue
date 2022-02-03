<template>
    <div class="done">
        <header class="header">
            <h1 class="header__heading">Paypayで支払う</h1>
        </header>
        <div class="done__wrap">
            <div class="done__wrap__imgarea">
                <img src="../../assets/home/human-icon01.png" alt="">
                <img src="../../assets/home/done-arrow.svg" alt="">
                <img src="../../assets/home/human-icon02.png" alt="">
            </div>
            <h2 class="done__wrap__message">木田さんとの<br>お金のやり取りを完了しました</h2>
            <p class="done__wrap__date">2021 / 01 / 25</p>
            <router-link to="/" class="done__wrap__link">ホームに戻る</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/sass/_vars";
@import "@/sass/header";
.done__wrap{
    margin-top: 160px;
    color: $mainTextColor;
    &__imgarea{
        width: 233px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
    }
    &__message{
        margin: 24px 0;
        font-size: 1.8rem;
        font-weight: 700;
        letter-spacing: 1px;
        text-align: center;
    }
    &__date{
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 1.6px;
        text-align: center;
    }
    &__link{
        display: inline-block;
        margin: 0 41px;
        width: 295px;
        line-height: 48px;
        color: #fff;
        font-size: 1.4rem;
        font-weight: bold;
        letter-spacing: 2px;
        text-decoration: none;
        text-align: center;
        background-color: #fff;
        background-color: #EB734B;
        border-radius: 112px;
        margin-top: 220px;
    }
}
</style>