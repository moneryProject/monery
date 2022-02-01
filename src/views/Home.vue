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
                        <div class="home__display__wrap__payback__box">
                            <div class="home__display__wrap__payback__box__thismonth">
                                <p class="home__display__wrap__payback__box__thismonth__heading">今月返済総額</p>
                                <h2 class="home__display__wrap__payback__box__thismonth__pay">10000<span>円</span></h2>
                            </div>
                            <div class="home__display__wrap__payback__box__slash">
                                <img src="@/assets/slash.svg" alt="スラッシュアイコン">
                            </div>
                            <div class="home__display__wrap__payback__box__total">
                                <p class="home__display__wrap__payback__box__total__heading">返済合計額</p>
                                <h2 class="home__display__wrap__payback__box__total__pay">25000<span>円</span></h2>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="home__button">
                <router-link to="Payer" class="home__button__payback">建て替えを返済する</router-link>
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
        <GlobalNav/>
    </div>
</template>

<script>
import GlobalNav from '@/components/GlobalNav'
import Header from '@/components/Header'
import PaybackHistory from '@/components/PayBackHistory'
export default {
    components: {
        PaybackHistory,
        Header,
        GlobalNav
    },
}
</script>

<style lang="scss" scoped>
@import "@/sass/_vars";
.home{
    margin-bottom: 70px;
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
                justify-content: center;
                border-radius: 4px;
                margin: 42px 0 18px;
                box-shadow: 0px 4px 4px 0px #ABA7A740;
                &__qr{
                    margin-right: 40px;
                }
                &__content{
                    &__username{
                        color: $mainTextColor;
                        font-size: 1.2rem;
                        font-weight: bold;
                        margin-bottom: 12px;
                        letter-spacing: 1.2px;
                    }
                    &__heading{
                        color: $mainTextColor;
                        font-size: 0.8rem;
                        letter-spacing: 0.8px;
                    }
                    &__pay{
                        color: $payTextColor;
                        font-size: 2.4rem;
                        font-weight: 900;
                        letter-spacing: 1.2px;
                        span{
                            font-size: 1.6rem;
                            color: #242424;
                            margin-left: 3px;
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
                justify-content: center;
                align-items: center;
                border-radius: 4px;
                box-shadow: 0px 4px 4px 0px #ABA7A740;
                &__box{
                    display: flex;
                    align-items: flex-end;
                    &__thismonth{
                        &__heading{
                            color: $payTextColor;
                            font-size: 1.2rem;
                            font-weight: bold;
                            letter-spacing: 0.8px;
                        }
                        &__pay{
                            color: $payTextColor;
                            font-size: 2.4rem;
                            font-weight: 900;
                            letter-spacing: 0.8px;
                            span{
                                font-size: 1.6rem;
                                color: #242424;
                            }
                        }
                    }
                    &__slash{
                        margin: 0 15px 0 25px;
                    }
                    &__total{
                        &__heading{
                            color: $mainTextColor;
                            font-size: 0.8rem;
                            font-weight: bold;
                            letter-spacing: 0.8px;
                        }
                        &__pay{
                            color: $mainTextColor;
                            font-size: 1.8rem;
                            font-weight: 900;
                            letter-spacing: 0.8px;
                            span{
                                font-size: 1.6rem;
                                color: #242424;
                            }
                        }
                    }
                }
            }
        }
    }
    &__button{
        width: 295px;
        position: relative;
        bottom: 24px;
        margin: 0 auto 50px;
        &__payback{
            display: inline-block;
            width: 100%;
            line-height: 48px;
            color: #fff;
            font-size: 1.4rem;
            font-weight: bold;
            text-align: center;
            letter-spacing: 2px;
            text-decoration: none;
            background-color:#EB734B;
            border-radius: 112px;
            margin-bottom: 16px;
        }
        &__receive{
            display: inline-block;
            width: 100%;
            line-height: 48px;
            color: $payTextColor;
            font-size: 1.4rem;
            font-weight: bold;
            text-align: center;
            letter-spacing: 2px;
            text-decoration: none;
            background-color: #fff;
            border: solid 2px#EB734B;
            border-radius: 112px;
        }
    }
    &__history{
        margin: 0 16px;
        &__heading{
            color: $payTextColor;
            font-size: 1.8rem;
            font-weight: bold;
            letter-spacing: 1px;
        }
    }
}
</style>