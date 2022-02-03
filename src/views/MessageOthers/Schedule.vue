<template>
    <div>
        <Header />
        <main class='schedule'>
            <button class="scheduleView__addBtn">＋新イベント追加</button>
            <div class="scheduleView__schedule">
                <h2>2021年9月28日</h2>
                <div class="scheduleView__schedule__content">
                    <div class="bottomArrow"></div>
                    <div class="scheduleView__schedule__content__head">
                        <div class="headTxt">
                            <h3>北海道旅行</h3>
                            <p>2022/3/7 (月) 〜 2022/3/8 (火)</p>
                        </div>
                        <div class="icon">
                        </div>
                    </div>
                    <div class="scheduleView__schedule__content__box">
                        <h3>ー 2022/3/7(月)</h3>
                        <div class="scheduleView__schedule__content__box__txt">
                            <div class="eventContent">
                                <div class="eventContent__icon"></div>
                                <p class="eventContent__txt"><span>11:00</span>&emsp;静岡駅到着</p>
                            </div>
                            <div class="eventContent">
                                <div class="eventContent__icon"></div>
                                <p class="eventContent__txt"><span>11:00</span>&emsp;静岡駅到着</p>
                            </div>
                            <div class="eventContent">
                                <div class="eventContent__icon"></div>
                                <p class="eventContent__txt"><span>11:00</span>&emsp;静岡駅到着</p>
                            </div>
                            <div class="eventContent">
                                <div class="eventContent__icon"></div>
                                <p class="eventContent__txt"><span>11:00</span>&emsp;静岡駅到着</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="scheduleView__schedule__content">
                    <div class="bottomArrow"></div>
                    <div class="scheduleView__schedule__content__head">
                        <div class="headTxt">
                            <h3>北海道旅行</h3>
                            <p>2022/3/7 (月) 〜 2022/3/8 (火)</p>
                        </div>
                        <div class="icon">
                        </div>
                    </div>
                    <div class="scheduleView__schedule__content__box">
                        <h3>ー 2022/3/7(月)</h3>
                        <div class="scheduleView__schedule__content__box__txt">
                            <div class="eventContent">
                                <div class="eventContent__icon"></div>
                                <p class="eventContent__txt"><span>11:00</span>&emsp;静岡駅到着</p>
                            </div>
                            <div class="eventContent">
                                <div class="eventContent__icon"></div>
                                <p class="eventContent__txt"><span>11:00</span>&emsp;静岡駅到着</p>
                            </div>
                            <div class="eventContent">
                                <div class="eventContent__icon"></div>
                                <p class="eventContent__txt"><span>11:00</span>&emsp;静岡駅到着</p>
                            </div>
                            <div class="eventContent">
                                <div class="eventContent__icon"></div>
                                <p class="eventContent__txt"><span>11:00</span>&emsp;静岡駅到着</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="scheduleView__schedule__content">
                    <div class="bottomArrow"></div>
                    <div class="scheduleView__schedule__content__head">
                        <div class="headTxt">
                            <h3>北海道旅行</h3>
                            <p>2022/3/7 (月) 〜 2022/3/8 (火)</p>
                        </div>
                        <div class="icon">
                        </div>
                    </div>
                    <div class="scheduleView__schedule__content__box">
                        <h3>ー 2022/3/7(月)</h3>
                        <div class="scheduleView__schedule__content__box__txt">
                            <div class="eventContent">
                                <div class="eventContent__icon"></div>
                                <p class="eventContent__txt"><span>11:00</span>&emsp;静岡駅到着</p>
                            </div>
                            <div class="eventContent">
                                <div class="eventContent__icon"></div>
                                <p class="eventContent__txt"><span>11:00</span>&emsp;静岡駅到着</p>
                            </div>
                            <div class="eventContent">
                                <div class="eventContent__icon"></div>
                                <p class="eventContent__txt"><span>11:00</span>&emsp;静岡駅到着</p>
                            </div>
                            <div class="eventContent">
                                <div class="eventContent__icon"></div>
                                <p class="eventContent__txt"><span>11:00</span>&emsp;静岡駅到着</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="scheduleView__schedule__content">
                    <div class="bottomArrow"></div>
                    <div class="scheduleView__schedule__content__head">
                        <div class="headTxt">
                            <h3>北海道旅行</h3>
                            <p>2022/3/7 (月) 〜 2022/3/8 (火)</p>
                        </div>
                        <div class="icon">
                        </div>
                    </div>
                    <div class="scheduleView__schedule__content__box">
                        <h3>ー 2022/3/7(月)</h3>
                        <div class="scheduleView__schedule__content__box__txt">
                            <div class="eventContent">
                                <div class="eventContent__icon"></div>
                                <p class="eventContent__txt"><span>11:00</span>&emsp;静岡駅到着</p>
                            </div>
                            <div class="eventContent">
                                <div class="eventContent__icon"></div>
                                <p class="eventContent__txt"><span>11:00</span>&emsp;静岡駅到着</p>
                            </div>
                            <div class="eventContent">
                                <div class="eventContent__icon"></div>
                                <p class="eventContent__txt"><span>11:00</span>&emsp;静岡駅到着</p>
                            </div>
                            <div class="eventContent">
                                <div class="eventContent__icon"></div>
                                <p class="eventContent__txt"><span>11:00</span>&emsp;静岡駅到着</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import Header from '@/components/Header'
export default {
    components: {
        Header,
    },
}
</script>

<style lang="scss" scoped>
    @import "@/sass/_vars";
    .header {
        box-shadow: 0px 8px 16px -3px rgba(202, 202, 202, 0.25);
    }
    .scheduleView {
        position: relative;
        width: 100vw;
        height: calc(100vh - 8.0rem);
        color: #4F4F4F;
        overflow-x: scroll;
        padding: 4.0rem 0 0 0;
        &__addBtn {
            display: block;
            padding: 1.4rem 7.4rem;
            border: 1px solid #EB734B;
            color: #EB734B;
            border-radius: 11.2rem;
            margin: 2.0rem auto 4.0rem auto;
            font-size: 1.4rem;
            font-weight: 700;
        }
        &__schedule {
            width: 100vw;
            h2 {
                text-align: left;
                font-size: 1.8rem;
                font-weight: 700;
                letter-spacing: 0.2rem;
                padding: 0 1.6rem;
                margin: 0 0 1.6rem 0;
            }
            &__content {
                position: relative;
                width: 34.3rem;
                margin: 0 auto 1.6rem auto;
                border-radius: 1.4rem;
                padding: 1.6rem;
                box-shadow: 0px 9px 8px -4px rgba(185, 185, 185, 0.25);
                .bottomArrow {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0.8rem;
                    margin: 0 auto;
                    width: 1.6rem;
                    height: 0.4rem;
                    background-image: url('../../assets/message/bottomArrow.svg');
                    background-position: center;
                }
                &__head {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 4.2rem;
                    border-left: 0.4rem solid #EB734B;
                    padding: 0 0.8rem;
                    .headTxt {
                        h3 {
                            font-size: 1.4rem;
                            font-weight: 700;
                        }
                        p {
                            font-size: 1.0rem;
                            font-weight: 500;
                            letter-spacing: 0.2rem;
                            color: #D8D8D8;
                        }
                    }
                    .icon {
                        width: 3.3rem;
                        height: 3.3rem;
                        background-image: url('../../assets/message/userIcon.png');
                        background-position: center;
                    }
                }
                &__box {
                    margin: 1.6rem 0 0 0;
                    h3 {
                        font-size: 1.0rem;
                        font-weight: 500;
                        letter-spacing: 0.2rem;
                        color: #D8D8D8;
                    }
                    &__txt {
                            position: relative;
                            border-left: 0.2rem solid #F3F3F3;
                            margin: 0 0 0 1.6rem;
                        .eventContent {
                            height: 3.4rem;
                            display: flex;
                            align-items: center;
                            margin: 1.6rem 0 1.6rem -1.7rem;
                            &__icon {
                                width: 3.2rem;
                                height: 3.2rem;
                                background-image: url('../../assets/message/eventIcon.svg');
                            }
                            &__txt {
                                span {
                                    font-size: 1.0rem;
                                    font-weight: 400;
                                }
                                font-size: 1.4rem;
                                font-weight: 700;
                                margin: 0 0 0 0.8rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>