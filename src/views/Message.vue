<template>
    <div>
        <header class="header">
            <router-link to="./" class="header__link">
                <img src="@/assets/back-icon.svg" alt="戻るボタンアイコン">
            </router-link>
            <h1 class="header__heading">さよならアウトレイジ</h1>
        </header>
        <main class='message'>
            <div class="partner mess">
                <div class="partner__icon"></div>
                <div class="partner__mess">
                    <p>金沢行くの楽しみやな</p>
                </div>
            </div>
            <div class="myself mess">
                <div class="myself__mess">
                    <p>何を持っていけばいい？なんも準備してない</p>
                </div>
                <div class="myself__icon"></div>
            </div>
            <div class="partner mess">
                <div class="partner__icon"></div>
                <div class="partner__mess transaction">
                    <div class="headTxt">
                        <h3>ホテル代</h3>
                        <p>2020.01.12 田中</p>
                    </div>
                    <div class="moneyTxt">
                        <p>¥&emsp;30000</p>
                    </div>
                </div>
            </div>
            <div class="myself mess">
                <div class="myself__mess present">
                    <div class="present__img">

                    </div>
                    <div class="present__txt">
                        <h3>車の運転ありがとう</h3>
                        <p>2020.01.12 田中から石丸へ</p>
                        <p class="color">ご飯代</p>
                    </div>
                </div>
                <div class="myself__icon"></div>
            </div>
            <div class="message__current">
                <router-link to="Message" class="message__current__link"></router-link>
                <router-link to="MessageDetail" class="message__current__link"></router-link>
            </div>
            <div class="message__input">
                <div class="message__input__money"></div>
                <router-link to="Schedule" class="message__input__schedule"></router-link>
                <div class="message__input__img"></div>
                <div class="message__input__form">
                    <input type="text">
                </div>
            </div>
        </main>
    </div>
</template>

<script>
// import Header from '@/components/Header'
// export default {
//     components: {
//         Header,
//     },
// }
</script>

<style lang="scss" scoped>
    @import "@/sass/_vars";
    @import "@/sass/header";
    .message {
        position: relative;
        width: 100vw;
        height: calc(100vh - 8.0rem);
        font-family: 'ヒラギノ角ゴシック';
        color: #4F4F4F;
        overflow-x: scroll;
        padding: 4.0rem 1.6rem 0 1.6rem;
        margin-top: 8.0rem;
        .mess {
            margin: 0 0 1.6rem 0;
        }
        .partner {
            position: relative;
            display: flex;
            width: 28.0rem;
            &__icon {
                width: 3.2rem;
                height: 3.2rem;
                background-image: url('../assets/message/partnerIcon.png');
            }
            &__mess {
                width: 24.0rem;
                padding: 1.0rem 1.6rem;
                border: 0.1rem solid #F3F3F3;
                border-radius: 0.4rem;
                margin: 0 0 0 0.8rem;
            }
        }
        .myself {
            display: flex;
            width: 28.0rem;
            height: auto;
            margin: 0 0 1.6rem auto;
            &__icon {
                width: 3.2rem;
                height: 3.2rem;
                background-image: url('../assets/message/myselfIcon.png');
            }
            &__mess {
                width: 24.0rem;
                padding: 1.0rem 1.6rem;
                border: 0.1rem solid #F3F3F3;
                border-radius: 0.4rem;
                margin: 0 0.8rem 0 0;
            }
        }
        &__current{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto auto 0;
            &__link{
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 100%;
                background-color: #D8D8D8;
                margin-right: 0.8rem;
                &:first-child{
                    background-color: #EB734B;
                }
            }
        }
        &__input {
            position: absolute;
            left: -1.6rem;
            bottom: 0;
            width: 100vw;
            height: 4.8rem;
            padding: 0 1.6rem 0 3.2rem;
            display: flex;
            align-items: center;
            box-shadow: 0px -6px 14px -6px rgba(182, 182, 182, 0.25);
            &__money {
                width: 2.0rem;
                height: 2.0rem;
                background-image: url('../assets/message/moneyIcon.svg');
                background-position: center;
                margin: 0 1.6rem 0 0;
            }
            &__schedule {
                width: 2.0rem;
                height: 2.0rem;
                background-image: url('../assets/message/scheduleIcon.svg');
                background-position: center;
                margin: 0 1.6rem 0 0;
                text-decoration: none;
            }
            &__img {
                width: 2.0rem;
                height: 2.0rem;
                background-image: url('../assets/message/imgIcon.svg');
                background-position: center;
                margin: 0 1.6rem 0 0;
            }
            &__form {
                width: 80%;
                input {
                    display: inline-block;
                    width: 100%;
                    height: 3.0rem;
                    background-color: #F3F3F3;
                    border-radius: 8.0rem;
                    padding: 0 1.6rem;
                    font-size: 1.4rem;
                }
            }
        }
        .transaction {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .headTxt {
                h3 {
                    font-size: 1.2rem;
                    font-weight: 700;
                }
                p {
                    font-size: 0.8rem;
                    font-weight: 500;
                    margin: 0.4rem 0 0 0;
                }
            }
            .moneyTxt {
                margin: 0 0 0 1.6rem;
                p {
                    text-align: right;
                    font-size: 1.4rem;
                    font-weight: 700;
                }
            }
        }
        .present {
            width: 24.4rem;
            padding: 0;
            box-shadow: 0px 6px 14px -6px rgba(182, 182, 182, 0.25);
            &__img {
                width: 100%;
                height: 13.9rem;
                background-image: url('../assets/message/presentImg.png');
            }
            &__txt {
                padding: 1.6rem;
                h3 {
                    font-size: 1.2rem;
                    font-weight: 700;
                    margin: 0 0 0.4rem 0;
                }
                p {
                    font-size: 1.0rem;
                    font-weight: 400;
                }
                .color {
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: #EB734B;
                    text-align: right;
                    margin: 2.4rem 0 0 0;
                }
            }
        }
    }
</style>
