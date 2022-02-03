<template>
    <div>
        <header class="header">
            <h1 class="header__heading">ホーム</h1>
            <router-link to="Notice" class="header__link">
                <img src="../assets/home/bell.svg" alt="">
            </router-link>
        </header>
        <main class='mypage'>
            <div class="mypage__headImg">
                <div class="mypage__headImg__icon"></div>
            </div>
            <p class="mypage__name">石丸かのん</p>
            <div class="mypage__stats">
                <div class="mypage__stats__box">
                    <p>92</p>
                    <p>友達</p>
                </div>
                <div class="mypage__stats__box center">
                    <p>10</p>
                    <p>グループ</p>
                </div>
                <div class="mypage__stats__box">
                    <p>22</p>
                    <p>行きたい</p>
                </div>
            </div>
            <div class="mypage__money">
                <h2>今月のおこずかい</h2>
                <div class="mypage__money__box">
                    <div class="editIcon"></div>
                    <div class="mypage__money__box__use">
                        <p class="headTxt">今月使用額</p>
                        <p class="txt">35000円</p>
                    </div>
                    <div class="slash"></div>
                    <div class="mypage__money__box__further">
                        <p class="headTxt">残りの金額</p>
                        <p class="txt">25000円</p>
                    </div>
                </div>
            </div>
            <div class="mypage__plan">
                <div class="mypage__plan__head">
                    <h2 class="headTxt">行きたいプラン</h2>
                    <div class="editIcon"></div>
                </div>
                <div class="mypage__plan__box">
                    <div class="mypage__plan__box__content">
                        <div class="planImg"></div>
                        <h3>福岡食べ歩き1日弾丸ツアー</h3>
                    </div>
                    <div class="mypage__plan__box__content">
                        <div class="planImg"></div>
                        <h3>福岡食べ歩き1日弾丸ツアー</h3>
                    </div>
                    <div class="mypage__plan__box__content">
                        <div class="planImg"></div>
                        <h3>福岡食べ歩き1日弾丸ツアー</h3>
                    </div>
                    <div class="mypage__plan__box__content">
                        <div class="planImg"></div>
                        <h3>福岡食べ歩き1日弾丸ツアー</h3>
                    </div>
                </div>
            </div>
            <div class="mypage__likes">
                <div class="mypage__likes__head">
                    <h2 class="headTxt">好きなこと</h2>
                    <div class="editIcon"></div>
                </div>
                <div class="mypage__likes__tags">
                    <div class="tag">
                        <p class="tag__txt">お寺巡り</p>
                    </div>
                    <div class="tag">
                        <p class="tag__txt">フェス</p>
                    </div>
                    <div class="tag">
                        <p class="tag__txt">筋トレ</p>
                    </div>
                    <div class="tag">
                        <p class="tag__txt">書道</p>
                    </div>
                    <div class="tag">
                        <p class="tag__txt">ハイキング</p>
                    </div>
                    <div class="tag">
                        <p class="tag__txt">お寺巡り</p>
                    </div>
                    <div class="tag">
                        <p class="tag__txt">お寺巡り</p>
                    </div>
                </div>
            </div>
            <div class="mypage__calendar">
                <div class="mypage__calendar__head">
                    <h2 class="headTxt">予定カレンダー</h2>
                    <div class="editIcon"></div>
                </div>
            </div>
        </main>
        <GlobalNav />
    </div>
</template>

<script>
import GlobalNav from '@/components/GlobalNav'
export default {
    components: {
        GlobalNav,
    },
}
</script>

<style lang="scss" scoped>
    @import "@/sass/_vars";
    .header{
        width: 100vw;
        height: 80px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        margin-bottom: 6px;
        background-color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        &__heading{
            color: $headerTextColor;
            font-size: 1.4rem;
            font-weight: bold;
        }
        &__link{
            position: absolute;
            bottom: 0;
            right: 16px;
        }
    }
    .mypage {
        width: 100vw;
        height: calc(100vh - 8.0rem);
        font-family: 'ヒラギノ角ゴシック';
        color: #4F4F4F;
        overflow-x: scroll;
        margin-top: 8.0rem;
        // background: tomato;
        &__headImg {
            position: relative;
            width: 100%;
            height: 15.3rem;
            background-image: url('../assets/mypage/headImg.png');
            background-size: cover;
            background-position: center;
            &__icon {
                position: absolute;
                left: 0;
                right: 0;
                margin: 0 auto;
                bottom: -2.0rem;
                width: 8.0rem;
                height: 8.0rem;
                background-image: url('../assets/mypage/icon.png');
            }
        }
        &__name {
            text-align: center;
            font-size: 1.4rem;
            font-weight: 500;
            letter-spacing: 0.1rem;
            margin: 3.2rem 0 0 0;
        }
        &__stats {
            display: flex;
            justify-content: space-around;
            width: 100%;
            height: 6.0rem;
            margin: 2.0rem 0 0 0;
            .center {
                position: relative;
            }
            .center::before {
                content: "";
                position: absolute;
                left: -1.5rem;
                width: 0.2rem;
                height: 2.0rem;
                background-color: #F3F3F3;
            }
            .center::after {
                content: "";
                position: absolute;
                right: -1.5rem;
                width: 0.2rem;
                height: 2.0rem;
                background-color: #F3F3F3;
            }
            &__box {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 10.0rem;
                height: 100%;
                text-align: center;
                p {
                    font-size: 1.2rem;
                    font-weight: 500;
                }
            }
        }
        &__money {
            margin:5.4rem 0 0 0;
            h2 {
                font-style: normal;
                font-size: 1.8rem;
                font-weight: 700;
                padding: 0 0 0 1.6rem;
            }
            &__box {
                position: relative;
                border: solid 0.1rem #F3F3F3;
                width: 34.3rem;
                height: 9.0rem;
                margin: 1.6rem auto 0 auto;
                box-shadow: 0px 4px 4px rgba(153, 153, 153, 0.25);
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                .editIcon {
                    position: absolute;
                    top: 1.0rem;
                    right: 0.8rem;
                    width: 1.4rem;
                    height: 1.4rem;
                    background-image: url('../assets/mypage/editIcon.svg');
                }
                .slash {
                    width: 0.9rem;
                    height: 1.4rem;
                    background-image: url('../assets/mypage/slash.svg');
                    margin: 1.5rem 0 0 2.0rem;
                }
                &__use {
                    color: #EB734B;
                    font-weight: 700;
                    .headTxt {
                        font-size: 1.2rem;
                    }
                    .txt {
                        font-size: 2.4rem;
                        margin: 0.2rem 0 0 0;
                    }
                }
                &__further {
                    margin: 0.8rem 0 0 0;
                    font-weight: 700;
                    margin: 0 0 0 1.6rem;
                    .headTxt {
                        font-size: 0.8rem;
                        margin: 1.2rem 0 0 0;
                    }
                    .txt {
                        font-size: 1.4rem;
                    }
                }
            }
        }
        &__plan {
            margin: 5.4rem 0 0 0;
            &__head {
                width: 33.5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 0 auto;
                .headTxt {
                    font-size: 1.8rem;
                    font-weight: 700;
                }
                .editIcon {
                    width: 1.4rem;
                    height: 1.4rem;
                    background-image: url('../assets/mypage/editIcon.svg');
                }
            }
            &__box {
                width: 35.9rem;
                margin: 0 0 0 1.6rem;
                overflow-x: scroll;
                display: flex;
                &__content {
                    width: 12.0rem;
                    height: 18.4rem;
                    margin: 2.4rem 1.6rem 0 0;
                    .planImg {
                        width: 12.0rem;
                        height: 12.0rem;
                        border-radius: 0.4rem;
                        background-image: url('../assets/mypage/planImg.png');
                    }
                    h3 {
                        width: 12.0rem;
                        height: 4.8rem;
                        font-weight: 700;
                        font-style: normal;
                        margin: 1.6rem 0 0 0;
                    }
                }
            }
            &__box::-webkit-scrollbar-thumb {
                background-color: #C4C4C4;
                width: 8.2rem;
                height: 0.4rem;
            }
        }
        &__likes {
            width: 35.9rem;
            margin: 5.4rem 0 5.4rem 1.6rem;
            &__head {
                width: 33.5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 0 auto;
                flex-wrap: wrap;
                .headTxt {
                    font-size: 1.8rem;
                    font-weight: 700;
                }
                .editIcon {
                    width: 1.4rem;
                    height: 1.4rem;
                    background-image: url('../assets/mypage/editIcon.svg');
                }
            }
            &__tags {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                margin: calc(2.4rem - 0.8rem) 0 0 0;
                .tag {
                    padding: 1.0rem 2.0rem;
                    border-radius: 5.0rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #F3F3F3;
                    margin: 0.8rem 0 0 0.8rem;
                    &__txt {
                        text-orientation: sideways;
                        font-size: 1.2rem;
                        font-weight: 700;
                    }
                }
            }
        }
        &__calendar {
            &__head {
                width: 33.5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 0 auto;
                flex-wrap: wrap;
                .headTxt {
                    font-size: 1.8rem;
                    font-weight: 700;
                }
                .editIcon {
                    width: 1.4rem;
                    height: 1.4rem;
                    background-image: url('../assets/mypage/editIcon.svg');
                }
            }
        }
    }
</style>
