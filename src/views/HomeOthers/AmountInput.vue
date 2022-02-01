<template>
    <div class="amount">
        <header class="header">
            <router-link to="AmountInput" class="header__link">
                <img src="../../assets/back-icon.svg" alt="戻るボタンアイコン">
            </router-link>
            <h1 class="header__heading">金額入力</h1>
        </header> 
        <div class="amount__wrap">
            <div class="amount__wrap__icon">
                <img src="../../assets/home/human-icon.png" alt="">
            </div>
            <p class="amount__wrap__text">山本さんへ送る</p>
            <h2 class="amount__wrap__money">2,500<span>円</span></h2>
            <div class="amount__wrap__calc">
                <section class="amount__wrap__calc__column">
                    <div class="amount__wrap__calc__column__cell">1</div>
                    <div class="amount__wrap__calc__column__cell">2</div>
                    <div class="amount__wrap__calc__column__cell">3</div>
                    <div class="amount__wrap__calc__column__cell">×</div>
                </section>
                <section class="amount__wrap__calc__column">
                    <div class="amount__wrap__calc__column__cell">4</div>
                    <div class="amount__wrap__calc__column__cell">5</div>
                    <div class="amount__wrap__calc__column__cell">6</div>
                    <div class="amount__wrap__calc__column__cell">C</div>
                </section>
                <section class="amount__wrap__calc__column">
                    <div class="amount__wrap__calc__column__cell">7</div>
                    <div class="amount__wrap__calc__column__cell">8</div>
                    <div class="amount__wrap__calc__column__cell">9</div>
                    <div class="amount__wrap__calc__column__cell">AC</div>
                </section>
                <section class="amount__wrap__calc__column">
                    <div class="amount__wrap__calc__column__cell">00</div>
                    <div class="amount__wrap__calc__column__cell">0</div>
                    <router-link to="Payment" class="amount__wrap__calc__column__next">次へ</router-link>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "@/sass/_vars";
@import "@/sass/header";
.amount__wrap{
    text-align: center;
    color: $mainTextColor;
    &__icon{
        margin-bottom: 16px;
    }
    &__text{
        font-size: 1.2rem;
        font-weight: bold;
    }
    &__money{
        color: $payTextColor;
        font-size: 4.2rem;
        font-weight: bold;
        margin: 32px 0 40px;
        letter-spacing: 1px;
        span{
            font-size: 2.2rem;
        }
    }
    &__calc{
        display: inline-block;
        margin: 0 auto;
        &__column{
            width: 100%;
            display: flex;
            &__cell{
                width: 58px;
                height: 56px;
                line-height: 58px;
                background-color: #F3F3F3;
                border-radius: 100%;
                color: #4F4F4F;
                font-size: 1.8rem;
                font-weight: 700;
                margin: 0 21px 16px 0;
                &:last-child{
                    margin: 0;
                }
            }
            &__next{
                width: 137px;
                height: 48px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #EB734B;
                border-radius: 112px;
                color: #fff;
                font-size: 1.4rem;
                font-weight: bold;
                letter-spacing: 2px;
                text-decoration: none;
                margin-top: 5px;
            }
        }
    }
}
</style>