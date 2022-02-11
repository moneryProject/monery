<template>
    <div class="payment">
        <header class="header">
            <router-link to="AmountInput" class="header__link">
                <img src="../../assets/back-icon.svg" alt="戻るボタンアイコン">
            </router-link>
            <h1 class="header__heading">現金で支払う</h1>
        </header>
        <div class="payment__wrap">
            <div class="payment__wrap__icon">
                <img src="../../assets/home/human-icon.png" alt="">
            </div>
            <p class="payment__wrap__text">木田さんにキャッシュレスで支払う</p>
            <p class="payment__wrap__id">ID : 0806ffu</p>
            <h2 class="payment__wrap__money">2,500<span>円</span></h2>
            <div class="payment__wrap__detail">
                <section class="payment__wrap__detail__box">
                    <p class="payment__wrap__detail__box__heading">日付・時間</p>
                    <p class="payment__wrap__detail__box__text">2022年1月10日 22時 50分</p>
                </section>
                <section class="payment__wrap__detail__box">
                    <p class="payment__wrap__detail__box__heading">支払い方法</p>
                    <p class="payment__wrap__detail__box__text">現金</p>
                </section>
            </div>
            <label class="payment__wrap__check"><input type="checkbox" @click="flag = !flag">支払いを確認しました</label>
            <div class="payment__wrap__link" v-if="!flag">お金を受け取る</div>
            <router-link to="PayDone" class="payment__wrap__payback" v-else>お金を受け取る</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            linkText: "ホームに戻る",
            flag: false
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/sass/_vars";
@import "@/sass/header";
.payment__wrap{
    text-align: center;
    color: $mainTextColor;
    margin-top: 120px;
    &__icon{
        margin-bottom: 16px;
    }
    &__text{
        font-size: 1.2rem;
        font-weight: bold;
    }
    &__id{
        font-size: 1rem;
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
    &__detail{
        border-top: 1px solid #F3F3F3;
        border-bottom: 1px solid #F3F3F3;
        padding: 20px 0;
        margin: 0 20px;
        &__box{
            display: flex;
            justify-content: space-between;
            margin-bottom: 14px;
            &__heading{
                font-size: 1rem;
                letter-spacing: 1.2px;
            }
            &__text{
                font-size: 1rem;
                font-weight: bold;
                letter-spacing: 1.2px;
            }
        }
    }
    &__check{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 24px 0 80px;
        input{
            margin-right: 9px;
        }
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
        background-color: #fff;
        background: #D8D8D8;
        border-radius: 112px;
    }
    &__payback{
        @extend .payment__wrap__link;
        background-color: #EB734B;
    }
}
</style>