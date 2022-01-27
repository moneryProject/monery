<template>
    <div>
        <Header />
        <main class="locationList">
            <div class="locationList__stats">
                <div class="locationList__stats__box">
                    <p>92</p>
                    <p>友達</p>
                </div>
                <div class="locationList__stats__box center">
                    <p>10</p>
                    <p>グループ</p>
                </div>
                <div class="locationList__stats__box selected">
                    <p>22</p>
                    <p class="selected__txt">行きたい</p>
                </div>
            </div>
            <div class="locationList__list">
                <div class="locationList__list__content">
                    <div class="heart"></div>
                    <div class="txt">
                        <h3>大阪食べ歩きツアー</h3>
                        <p>5000円/人~</p>
                    </div>
                    <div class="likesIcon"></div>
                </div>
                <div class="locationList__list__content">
                    <div class="heart"></div>
                    <div class="txt">
                        <h3>大阪食べ歩きツアー</h3>
                        <p>5000円/人~</p>
                    </div>
                    <div class="likesIcon"></div>
                </div>
                <div class="locationList__list__content">
                    <div class="heart"></div>
                    <div class="txt">
                        <h3>大阪食べ歩きツアー</h3>
                        <p>5000円/人~</p>
                    </div>
                    <div class="likesIcon"></div>
                </div>
                <div class="locationList__list__content">
                    <div class="heart"></div>
                    <div class="txt">
                        <h3>大阪食べ歩きツアー</h3>
                        <p>5000円/人~</p>
                    </div>
                    <div class="likesIcon"></div>
                </div>
                <div class="locationList__list__content">
                    <div class="heart"></div>
                    <div class="txt">
                        <h3>大阪食べ歩きツアー</h3>
                        <p>5000円/人~</p>
                    </div>
                    <div class="likesIcon"></div>
                </div>
                <div class="locationList__list__content">
                    <div class="heart"></div>
                    <div class="txt">
                        <h3>大阪食べ歩きツアー</h3>
                        <p>5000円/人~</p>
                    </div>
                    <div class="likesIcon"></div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import Header from '@/components/Header'
export default {
    components: {
        Header
    },
}
</script>

<style lang="scss" scoped>
    @import "@/sass/_vars";
    .header {
        box-shadow: 0px 8px 16px -9px rgba(202, 202, 202, 0.25);
    }
    .locationList {
        width: 100vw;
        height: calc(100vh - 8.0rem);
        font-family: 'ヒラギノ角ゴシック';
        color: #4F4F4F;
        overflow-x: scroll;
        &__stats {
            display: flex;
            justify-content: space-around;
            width: 100%;
            height: 6.0rem;
            margin: 2.0rem 0 0 0;
            .selected {
                color: #EB734B;
                &__txt {
                    position: relative;
                }
                &__txt::after {
                    content: "";
                    position: absolute;
                    left: -0.2rem;
                    right: 0;
                    margin: 0 auto;
                    bottom: -1.0rem;
                    width: 5.4rem;
                    height: 0.2rem;
                    background: #EB734B;
                }
            }
            .center {
                position: relative;
            }
            .center::before {
                content: "";
                position: absolute;
                left: -1.4rem;
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
        &__list {
            width: 34.3rem;
            margin: 2.4rem auto 0 auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            &__content {
                position: relative;
                width: 16.4rem;
                height: 16.4rem;
                margin: 0 0 2.0rem 0;
                background-image: url('../../assets/mypage/likesBack.png');
                .heart {
                    position: absolute;
                    top: 0.8rem;
                    right: 0.8rem;
                    width: 2.4rem;
                    height: 2.4rem;
                    background-image: url('../../assets/mypage/heart.svg');
                }
                .txt {
                    position: absolute;
                    left: 0.8rem;
                    bottom: 0.8rem;
                    color: #fff;
                    h3 {
                        font-size: 1.2rem;
                        font-weight: 700;
                    }
                    p {
                        font-size: 1.0rem;
                        font-weight: 400;
                    }
                }
                .likesIcon {
                    position: absolute;
                    right: 0.8rem;
                    bottom: 0.8rem;
                    width: 2.6rem;
                    height: 2.5rem;
                    background-image: url('../../assets/mypage/likesIcon.svg');
                }
            }
        }
    }
</style>