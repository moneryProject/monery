<template>
    <div class="method">
        <header class="header">
            <router-link to="Payer" class="header__link">
                <img src="../../assets/back-icon.svg" alt="戻るボタンアイコン">
            </router-link>
            <h1 class="header__heading">支払い方法</h1>
        </header>
        <div class="method__wrap">
            <section class="method__wrap__pay">
                <h2 class="method__wrap__pay__heading">キャッシュレスで支払う</h2>
                <p class="method__wrap__pay__text">QRやIDで支払いをやりとり</p>
                <div class="method__wrap__pay__btnbox">
                    <router-link to="AmountInput" class="method__wrap__pay__btnbox__link">
                        <div class="method__wrap__pay__btnbox__link__circle"></div>
                        <p class="method__wrap__pay__btnbox__link__text">クレジットカードで支払う</p>
                        <img src="../../assets/home/arrow.svg" alt="" class="method__wrap__pay__btnbox__link__arrow">
                    </router-link>
                    <router-link to="AmountInput" class="method__wrap__pay__btnbox__link">
                        <div class="method__wrap__pay__btnbox__link__circle"></div>
                        <p class="method__wrap__pay__btnbox__link__text">Paypayで支払う</p>
                        <img src="../../assets/home/arrow.svg" alt="" class="method__wrap__pay__btnbox__link__arrow">
                    </router-link>
                    <router-link to="AmountInput" class="method__wrap__pay__btnbox__link">
                        <div class="method__wrap__pay__btnbox__link__circle"></div>
                        <p class="method__wrap__pay__btnbox__link__text">LINEpayで支払う</p>
                        <img src="../../assets/home/arrow.svg" alt="" class="method__wrap__pay__btnbox__link__arrow">
                    </router-link>
                </div>
            </section>
            <section class="method__wrap__pay">
                <h2 class="method__wrap__pay__heading">直接支払う</h2>
                <p class="method__wrap__pay__text">本人に手渡しで支払う</p>
                <div class="method__wrap__pay__btnbox">
                    <router-link to="AmountInput" class="method__wrap__pay__btnbox__link">
                        <div class="method__wrap__pay__btnbox__link__circle"></div>
                        <p class="method__wrap__pay__btnbox__link__text">現金で支払う</p>
                        <img src="../../assets/home/arrow.svg" alt="" class="method__wrap__pay__btnbox__link__arrow">
                    </router-link>
                </div>
            </section>
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
.method__wrap{
    margin: 0 16px;
    &__pay{
        margin-bottom: 64px;
        &__heading{
            color: $payTextColor;
            font-size: 1.8rem;
            font-weight: bold;
            letter-spacing: 1.8px;
        }
        &__text{
            color: $mainTextColor;
            font-size: 1rem;
            letter-spacing: 1px; 
        }
        &__btnbox{
            margin-top: 24px;
            &__link{
                width: 100%;
                height: 63px;
                display: flex;
                align-items: center;
                border: 1px solid #F3F3F3;
                border-radius: 6px;
                text-decoration: none;
                &__circle{
                   width: 16px;
                   height: 16px;
                   border-radius: 100%; 
                   background-color: #C4C4C4;
                   margin: 0 17px 0 15px;
                }
                &__text{
                    color: #4F4F4F;
                    font-size: 1.2rem;
                    font-weight: bold;
                    letter-spacing: 1.2px;
                }
                &__arrow{
                    margin: 0 15px 0 auto;
                }
            }
        }
    }
}
</style>