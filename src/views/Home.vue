<template>
    <div>
        <Header/>
        <main class="home">
            <div class="home__display">
                <div class="home__display__wrap">
                    <section class="home__display__wrap__usage">
                        <div class="home__display__wrap__usage__qr">
                            <img src="@/assets/qr.svg" alt="QRコードサンプル画像">
                        </div>
                        <div class="home__display__wrap__usage__content">
                            <p class="home__display__wrap__usage__content__username">izuki0505</p>
                            <p class="home__display__wrap__usage__content__heading">今月利用可能額</p>
                            <h2 class="home__display__wrap__usage__content__pay">25000<span>円</span></h2>
                        </div>
                    </section>
                    <section class="home__display__wrap__payback">
                        <div class="home__display__wrap__payback__thismonth">
                            <p class="home__display__wrap__payback__thismonth__heading">今月返済額</p>
                            <h2 class="home__display__wrap__payback__thismonth__pay">10000<span>円</span></h2>
                        </div>
                        <div class="home__display__wrap__payback__slash">
                            <img src="@/assets/slash.svg" alt="スラッシュアイコン">
                        </div>
                        <div class="home__display__wrap__payback__total">
                            <p class="home__display__wrap__payback__total__heading">返済合計額</p>
                            <h2 class="home__display__wrap__payback__total__pay">25000<span>円</span></h2>
                        </div>
                    </section>
                </div>
            </div>
            <div class="home__button">
                <router-link to="" class="home__button__payback">建て替えを返済する</router-link>
                <router-link to="" class="home__button__receive">現金でお金を受け取る</router-link>
            </div>
            <div class="home__history">
                <h2 class="home__history__heading">お金やりとり歴</h2>
                <PaybackHistory/>
                <PaybackHistory/>
                <PaybackHistory/>
                <PaybackHistory/>
                <PaybackHistory/>
            </div>
        </main>
    </div>
</template>

<script>
import Header from '@/components/Header'
import PaybackHistory from '@/components/PayBackHistory'
export default {
    components: {
        PaybackHistory,
        Header,
    },
}
</script>

<style lang="scss" scoped>
@import "@/sass/_vars";
.home{
    &__display{
        width: 100vw;
        height: 320px;
        background-color: $backgroundColor;
        &__wrap{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &__usage{
                width: 295px;
                height: 126px;
                border: solid 2px $payBorderColor;
                background-color: $payBackgroundColor;
                display: flex;
                align-items: center;
                justify-content: space-around;
                border-radius: 4px;
                &__content{
                    margin-right: 50px;
                    &__username{
                        color: $mainTextColor;
                        font-size: 1.2rem;
                        margin-bottom: 12px;
                    }
                    &__heading{
                        color: $mainTextColor;
                        font-size: 0.8rem;
                        margin-bottom: 4px;
                    }
                    &__pay{
                        color: $payTextColor;
                        font-size: 2.4rem;
                        font-weight: bold;
                        span{
                            font-size: 1.6rem;
                        }
                    }
                }
            }
            &__payback{
                width: 295px;
                height: 92px;
                border: solid 2px $payBorderColor;
                background-color: $payBackgroundColor;
                display: flex;
                align-items: center;
                border-radius: 4px;
                &__thismonth{
                    &__heading{
                        color: $payTextColor;
                        font-size: 1.2rem;
                        font-weight: bold;
                    }
                    &__pay{
                        color: $payTextColor;
                        font-size: 2.4rem;
                        font-weight: bold;
                        span{
                            font-size: 1.6rem;
                        }
                    }
                }
                &__total{
                    &__heading{
                        color: $mainTextColor;
                        font-size: 0.8rem;
                        font-weight: bold;
                    }
                    &__pay{
                        color: $mainTextColor;
                        font-size: 1.8rem;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>