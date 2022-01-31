<template>
    <div>
        <Header />
        <main class='chatMoney'>
            <button class="chatMoney__addBtn">建て替え金額を追加</button>
            <div class="chatMoney__calculate">
                <div class="chatMoney__calculate__content">
                    <div class="headTxt">
                        <h3>ホテル代</h3>
                        <p>2020.01.12 田中</p>
                    </div>
                    <p class="moneyTxt">¥&emsp;30000</p>
                    <div class="editIcon"></div>
                </div>
                <div class="chatMoney__calculate__content">
                    <div class="headTxt">
                        <h3>ホテル代</h3>
                        <p>2020.01.12 田中</p>
                    </div>
                    <p class="moneyTxt">¥&emsp;30000</p>
                    <div class="editIcon"></div>
                </div>
                <div class="chatMoney__calculate__content">
                    <div class="headTxt">
                        <h3>ホテル代</h3>
                        <p>2020.01.12 田中</p>
                    </div>
                    <p class="moneyTxt">¥&emsp;30000</p>
                    <div class="editIcon"></div>
                </div>
            </div>
            <div class="chatMoney__transaction">
                <h2 class="headTxt">精算額</h2>
                <div class="chatMoney__transaction__content">
                    <p class="to">田中</p>
                    <div class="arrowIcon"></div>
                    <p class="from">石丸</p>
                    <p class="moneyTxt">￥1000</p>
                    <div class="nextIcon"></div>
                </div>
                <div class="chatMoney__transaction__content">
                    <p class="to">田中</p>
                    <div class="arrowIcon"></div>
                    <p class="from">石丸</p>
                    <p class="moneyTxt">￥1000</p>
                    <div class="nextIcon"></div>
                </div>
                <div class="chatMoney__transaction__content">
                    <p class="to">田中</p>
                    <div class="arrowIcon"></div>
                    <p class="from">石丸</p>
                    <p class="moneyTxt">￥1000</p>
                    <div class="nextIcon"></div>
                </div>
                <div class="chatMoney__transaction__content">
                    <p class="to">田中</p>
                    <div class="arrowIcon"></div>
                    <p class="from">石丸</p>
                    <p class="moneyTxt">￥1000</p>
                    <div class="nextIcon"></div>
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
    .chatMoney {
        position: relative;
        width: 100vw;
        height: calc(100vh - 8.0rem);
        font-family: 'ヒラギノ角ゴシック';
        color: #4F4F4F;
        overflow-x: scroll;
        padding: 4.0rem 0 0 0;
        &__addBtn {
            display: block;
            width: 29.5rem;
            height: 4.8rem;
            background-color: #EB734B;
            color: #fff;
            border-radius: 11.2rem;
            font-size: 1.4rem;
            font-weight: 700;
            margin: 0 auto ;
        }
        &__calculate {
            width: 34.3rem;
            margin: 0 auto;
            &__content {
                width: 100%;
                height: 6.4rem;
                display: flex;
                align-items: center;
                border: 0.1rem solid #F3F3F3;
                padding: 0 1.6rem;
                margin: 2.4rem 0 0.8rem 0;
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
                    font-size: 1.4rem;
                    font-weight: 700;
                    margin: 0 0 0 13.0rem;
                }
                .editIcon {
                    width: 1.4rem;
                    height: 1.4rem;
                    margin: 0 0 0 0.8rem;
                    background-image: url('../../assets/mypage/editIcon.svg');
                }
            }
        }
        &__transaction {
            width: 32.6rem;
            margin: calc(5.4rem - 0.8rem) auto 0 auto;
            h2 {
                font-size: 1.8rem;
                font-weight: 700;
                font-style: normal;
                color: #EB734B;
                margin: 0 0 2.4rem 0;
            }
            &__content {
                display: flex;
                align-items: center;
                font-size: 1.4rem;
                margin: 0 0 2.1rem 0;
                .to {
                    width: 7.2rem;
                    text-align: center;
                }
                .arrowIcon {
                    width: 1.6rem;
                    height: 1.6rem;
                    background-image: url('../../assets/message/arrowIcon.svg');
                    background-position: center;
                }
                .from {
                    width: 7.2rem;
                    text-align: center;
                }
                .moneyTxt {
                    width: 10.0rem;
                    text-align: center;
                }
                .nextIcon {
                    width: 1.0rem;
                    height: 1.0rem;
                    background-image: url('../../assets/message/nextIcon.svg');
                    background-position: center;
                }
            }
        }
    }
</style>