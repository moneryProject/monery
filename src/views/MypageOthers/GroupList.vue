<template>
    <div>
        <Header />
        <main class="groupList">
            <div class="groupList__stats">
                <div class="groupList__stats__box">
                    <p>92</p>
                    <p>友達</p>
                </div>
                <div class="groupList__stats__box center selected">
                    <p>10</p>
                    <p class="selected__txt">グループ</p>
                </div>
                <div class="groupList__stats__box">
                    <p>22</p>
                    <p>行きたい</p>
                </div>
            </div>
            <div class="groupList__list">
                <div class="groupList__list__user">
                    <div class="icon"></div>
                    <p class="name">福岡同好会&emsp;(10)</p>
                </div>
                <div class="groupList__list__user">
                    <div class="icon"></div>
                    <p class="name">福岡同好会&emsp;(10)</p>
                </div>
                <div class="groupList__list__user">
                    <div class="icon"></div>
                    <p class="name">福岡同好会&emsp;(10)</p>
                </div>
                <div class="groupList__list__user">
                    <div class="icon"></div>
                    <p class="name">福岡同好会&emsp;(10)</p>
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
    .groupList {
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
                    left: -0.1rem;
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
        &__list {
            width: calc(32.7rem + 1.6rem);
            margin: 1.6rem auto 0 auto;
            &__user {
                display: flex;
                align-items: center;
                width: 32.7rem;
                height: 7.0rem;
                .icon {
                    width: 5.4rem;
                    height: 5.4rem;
                    background-image: url('../../assets/mypage/icon.png');
                    border-radius: 50%;
                    background-size: contain;
                }
                .name {
                    margin: 0 0 0 1.6rem;
                    font-size: 1.4rem;
                    font-weight: 700;
                }
            }
        }
    }
</style>