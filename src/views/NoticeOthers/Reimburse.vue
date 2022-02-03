<template>
    <div class="reimburse">
        <header class="header">
            <router-link to="Notice" class="header__link">
                <img src="../../assets/back-icon.svg" alt="戻るボタンアイコン">
            </router-link>
            <h1 class="header__heading">立て替え詳細</h1>
        </header>
        <div class="reimburse__wrap">
            <div class="reimburse__wrap__icon">
                <img src="../../assets/notice/human02.png" alt="">
            </div>
            <p class="reimburse__wrap__text">ホテル代で支払い</p>
            <p class="reimburse__wrap__for">山本さんへ</p>
            <h2 class="reimburse__wrap__money">3,000<span>円</span></h2>
            <div class="reimburse__wrap__detail">
                <section class="reimburse__wrap__detail__box">
                    <p class="reimburse__wrap__detail__box__heading">日付・時間</p>
                    <p class="reimburse__wrap__detail__box__text">2022年1月10日 22時 50分</p>
                </section>
                <section class="reimburse__wrap__detail__box">
                    <p class="reimburse__wrap__detail__box__heading">支払い方法</p>
                    <p class="reimburse__wrap__detail__box__text">キャッシュレス / Paypay決済</p>
                </section>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/sass/_vars";
@import "@/sass/header";
.reimburse__wrap{
    text-align: center;
    color: $mainTextColor;
    margin-top: 120px;
    &__icon{
        margin-bottom: 16px;
    }
    &__text{
        font-size: 1.2rem;
        letter-spacing: 0.8px;
        font-weight: bold;
    }
    &__for{
        font-size: 1rem;
        letter-spacing: 1.2px;
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
        @extend .reimburse__wrap__link;
        background-color: #EB734B;
    }
}
</style>