<template>
    <div>
        <Header />
        <main class='search'>
            <div class="search__input">
                <input type="text" placeholder="キーワードを入力する">
            </div>
            <div class="search__nav">
                <div class="search__nav__place box">
                    <div></div>
                    <p>現在地から探す</p>
                </div>
                <div class="search__nav__money box">
                    <div></div>
                    <p>予算から探す</p>
                </div>
                <div class="search__nav__flag box">
                    <div></div>
                    <p>テーマから探す</p>
                </div>
            </div>
            <div class="search__plans">
                <h2>おすすめプランから探す</h2>
                <div class="search__plans__bigBox">
                    <div class="img"></div>
                    <p class="place">沖縄市（沖縄県）</p>
                    <h3 class="title">[カップル限定]珊瑚礁の綺麗な海を最安価で見れる！沖縄でしか見えない魚と戯れよう！</h3>
                    <div class="moneyBox">
                        <div class="moneyBox__icon"></div>
                        <p class="moneyBox__money">15000円~</p>
                    </div>
                </div>
                <div class="search__plans__smallBox">
                    <div class="search__plans__smallBox__content">
                        <div class="img"></div>
                        <p class="place">福岡市（福岡県）</p>
                        <h3 class="title">福岡の名物！屋台でもつ鍋をたくさん食べよう！</h3>
                        <div class="moneyBox">
                            <div class="moneyBox__icon"></div>
                            <p class="moneyBox__money">30000円~</p>
                        </div>
                    </div>
                    <div class="search__plans__smallBox__content">
                        <div class="img"></div>
                        <p class="place">福岡市（福岡県）</p>
                        <h3 class="title">福岡の名物！屋台でもつ鍋をたくさん食べよう！</h3>
                        <div class="moneyBox">
                            <div class="moneyBox__icon"></div>
                            <p class="moneyBox__money">30000円~</p>
                        </div>
                    </div>
                    <div class="search__plans__smallBox__content">
                        <div class="img"></div>
                        <p class="place">福岡市（福岡県）</p>
                        <h3 class="title">福岡の名物！屋台でもつ鍋をたくさん食べよう！</h3>
                        <div class="moneyBox">
                            <div class="moneyBox__icon"></div>
                            <p class="moneyBox__money">30000円~</p>
                        </div>
                    </div>
                    <div class="search__plans__smallBox__content">
                        <div class="img"></div>
                        <p class="place">福岡市（福岡県）</p>
                        <h3 class="title">福岡の名物！屋台でもつ鍋をたくさん食べよう！</h3>
                        <div class="moneyBox">
                            <div class="moneyBox__icon"></div>
                            <p class="moneyBox__money">30000円~</p>
                        </div>
                    </div>
                    <div class="search__plans__smallBox__content">
                        <div class="img"></div>
                        <p class="place">福岡市（福岡県）</p>
                        <h3 class="title">福岡の名物！屋台でもつ鍋をたくさん食べよう！</h3>
                        <div class="moneyBox">
                            <div class="moneyBox__icon"></div>
                            <p class="moneyBox__money">30000円~</p>
                        </div>
                    </div>
                    <div class="search__plans__smallBox__content">
                        <div class="img"></div>
                        <p class="place">福岡市（福岡県）</p>
                        <h3 class="title">福岡の名物！屋台でもつ鍋をたくさん食べよう！</h3>
                        <div class="moneyBox">
                            <div class="moneyBox__icon"></div>
                            <p class="moneyBox__money">30000円~</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <GlobalNav />
    </div>
</template>

<script>
import Header from '@/components/Header'
import GlobalNav from '@/components/GlobalNav'
export default {
    components: {
        Header,
        GlobalNav,
    },
}
</script>

<style lang="scss" scoped>
    @import "@/sass/_vars";
    .header {
        box-shadow: 0px 8px 16px -3px rgba(202, 202, 202, 0.25);
    }
    .search {
        width: 100vw;
        height: calc(100vh - 8.0rem);
        font-family: 'ヒラギノ角ゴシック';
        color: #4F4F4F;
        overflow-x: scroll;
        padding: 0 0 5.0rem 0;
        &__input {
            position: relative;
            width: 34.3rem;
            height: 3.4rem;
            background-color: #F9F9F9;
            margin: 4.0rem auto 0 auto;
            input {
                position: relative;
                width: 100%;
                height: 100%;
                font-size: 1.2rem;
                padding: 0 0 0 4.8rem;
            }
            input::placeholder {
                color: #D8D8D8;
            }
        }
        &__input::before {
            content: "";
            position: absolute;
            top: 0.9rem;
            left: 1.6rem;
            width: 1.6rem;
            height: 1.6rem;
            background-image: url('../assets/search/search.svg');
        }
        &__nav {
            width: 100%;
            height: 6.0rem;
            display: flex;
            justify-content: space-around;
            margin: 2.4rem 0 0 0;
            .box {
                width: 10.0rem;
                height: 100%;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                p {
                    margin: 0.8rem 0 0 0;
                    font-size: 1.0rem;
                    font-weight: 700;
                }
            }
            &__place {
                div {
                    width: 2.4rem;
                    height: 2.4rem;
                    background-image: url('../assets/search/place.svg');
                    background-position: center;
                }
                p {
                    color: #EB734B;
                }
            }
            &__money {
                position: relative;
                div {
                    width: 2.4rem;
                    height: 2.4rem;
                    background-image: url('../assets/search/money.svg');
                    background-position: center;
                }
                p {
                    color: #4F4F4F;
                }
            }
            &__money::before {
                content: "";
                position: absolute;
                top: 0;
                left: -1.0rem;
                width: 0.1rem;
                height: 100%;
                background-color: #F3F3F3;
            }
            &__money::after {
                content: "";
                position: absolute;
                top: 0;
                right: -1.0rem;
                width: 0.1rem;
                height: 100%;
                background-color: #F3F3F3;
            }
            &__flag {
                div {
                    width: 2.4rem;
                    height: 2.4rem;
                    background-image: url('../assets/search/flag.svg');
                    background-position: center;
                }
                p {
                    color: #4F4F4F;
                }
            }
        }
        &__plans {
            width: 34.3rem;
            margin: 3.2rem auto 0 auto;
            h2 {
                font-size: 1.8rem;
                font-weight: 700s;
            }
            &__bigBox {
                width: 100%;
                margin: 2.0rem 0 0 0;
                .img {
                    width: 100%;
                    height: 16.4rem;
                    border-radius: 0.4rem;
                    background-image: url('../assets/search/bigBack.png');
                    background-position: center;
                }
                .place {
                    color: #EB734B;
                    font-size: 1.0rem;
                    font-weight: 400;
                    letter-spacing: 0.2rem;
                    margin: 0.4rem 0 0.4rem 0;
                }
                .title {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #4F4F4F;
                }
                .moneyBox {
                    display: flex;
                    align-items: center;
                    margin: 0.4rem 0 0 0;
                    &__icon {
                        width: 1.4rem;
                        height: 1.4rem;
                        background-image: url('../assets/search/smallMoney.svg');
                        background-position: center;
                    }
                    &__money {
                        font-size: 1.0rem;
                        font-weight: 400;
                        color: #4F4F4F;
                        letter-spacing: 0.1rem;
                        margin: 0 0 0 0.6rem;
                    }
                }
            }
            &__smallBox {
                width: 100%;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                margin: 3.2rem 0 0 0;
                &__content {
                    width: 16.4rem;
                    margin: 0 0 3.2rem 0;
                    .img {
                        width: 100%;
                        height: 16.4rem;
                        background-image: url('../assets/search/smallBack.png');
                        background-position: center;
                    }
                    .place {
                        color: #EB734B;
                        font-size: 1.0rem;
                        font-weight: 400;
                        letter-spacing: 0.2rem;
                        margin: 0.4rem 0 0.4rem 0;
                    }
                    .title {
                        font-size: 1.2rem;
                        font-weight: 700;
                        color: #4F4F4F;
                    }
                    .moneyBox {
                        display: flex;
                        align-items: center;
                        margin: 0.4rem 0 0 0;
                        &__icon {
                            width: 1.4rem;
                            height: 1.4rem;
                            background-image: url('../assets/search/smallMoney.svg');
                            background-position: center;
                        }
                        &__money {
                            font-size: 1.0rem;
                            font-weight: 400;
                            color: #4F4F4F;
                            letter-spacing: 0.1rem;
                            margin: 0 0 0 0.6rem;
                        }
                    }
                }
            }
        }
    }
</style>
