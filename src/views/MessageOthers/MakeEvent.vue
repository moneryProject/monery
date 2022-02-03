<template>
    <div>
        <Header />
        <main class='makeEvent'>
            <div class="makeEvent__title">
                <input type="text" placeholder="イベントタイトル">
            </div>
            <div class="makeEvent__date">
                <h2 class="title">日程</h2>
                <div class="makeEvent__date__content">
                    <div class="checkbox">
                        <label for="date">
                            <p>終日</p>
                        </label>
                        <input type="checkbox" name="" id="date" class="input">
                        <label for="date" class="checkbox__btn">
                            <div class="circle"></div>
                        </label>
                    </div>
                    <div class="dateTo">
                        <p>2022年1月12日(月)</p>
                        <p>12:30</p>
                    </div>
                    <div class="dateFrom">
                        <p>2022年1月13日(火)</p>
                        <p>12:30</p>
                    </div>
                </div>
            </div>
            <div class="makeEvent__schedule">
                <h2>スケジュール</h2>
                <div class="inputBox">
                    <p>＋&emsp;スケジュールを追加する</p>
                </div>
            </div>
            <div class="makeEvent__budget">
                <h2>予算</h2>
                <div class="inputBox">
                    <p>＋&emsp;予算を追加する</p>
                </div>
            </div>
            <div class="makeEvent__memo">
                <h2>メモ</h2>
                <div class="inputBox">
                    <p>＋&emsp;メモを追加する</p>
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
    .makeEvent {
        position: relative;
        width: 100vw;
        height: calc(100vh - 8.0rem);
        color: #4F4F4F;
        overflow-x: scroll;
        padding: 4.0rem 0 0 0;
        &__title {
            width: 31.9rem;
            height: 2.8rem;
            margin: 0 auto;
            padding: 0 0 0.8rem 0;
            border-bottom: 1px #F3F3F3 solid;
            input {
                width: 100%;
                height: 100%;
                font-size: 1.8rem;
                font-weight: 700;
            }
            input::placeholder {
                color: #D8D8D8;
            }
        }
        &__date {
            width: 34.3rem;
            margin: 2.4rem auto 0 auto;
            .title {
                font-size: 1.2rem;
                font-weight: 700;
                color: #EB734B;
            }
            &__content {
                padding: 0 0 0 2.4rem;
                .checkbox {
                    width: 31.9rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin: 1.6rem 0;
                    label {
                        p {
                            font-size: 1.2rem;
                            font-weight: 700;
                        }
                    }
                    .input {
                        display: none;
                    }
                    &__btn {
                        position: relative;
                        width: 4.0rem;
                        height: 1.6rem;
                        border-radius: 4.0rem;
                        background-color: #F3F3F3;
                        transition: 0.5s ease-in-out;
                        .circle {
                            position: absolute;
                            left: 0;
                            width: 1.6rem;
                            height: 1.6rem;
                            background-color: #EB734B;
                            border-radius: 50%;
                            transition: 0.5s ease-in-out;
                        }
                    }
                    .input:checked + .checkbox__btn {
                        position: relative;
                        background-color: #FFB29D;
                        .circle {
                            left: 2.4rem;
                        }
                    }
                }
                .dateTo {
                    display: flex;
                    justify-content: space-between;
                    margin:  0 0 1.6rem 0;
                    p {
                        font-size: 1.2rem;
                        font-weight: 700;
                    }
                }
                .dateFrom {
                    display: flex;
                    justify-content: space-between;
                    p {
                        font-size: 1.2rem;
                        font-weight: 700;
                    }
                }

            }
        }
        &__schedule {
            width: 34.3rem;
            margin: 2.4rem auto 0 auto;
            h2 {
                font-size: 1.2rem;
                font-weight: 700;
                color: #EB734B;
            }
            .inputBox {
                margin: 2.4rem auto 0 calc(4.3rem - 1.6rem);
                p {
                    display: inline-block;
                    width: 31.9rem;
                    height: 6.4rem;
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #D8D8D8;
                    border: #D8D8D8 solid 0.1rem;
                    border-radius: 0.4rem;
                    margin: 0 auto;
                    padding: 2.3rem 0 2.3rem 1.6rem;
                }
            }
        }
        &__budget {
            width: 34.3rem;
            margin: 2.4rem auto 0 auto;
            h2 {
                font-size: 1.2rem;
                font-weight: 700;
                color: #EB734B;
            }
            .inputBox {
                margin: 2.4rem auto 0 calc(4.3rem - 1.6rem);
                p {
                    display: inline-block;
                    width: 31.9rem;
                    height: 6.4rem;
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #D8D8D8;
                    border: #D8D8D8 solid 0.1rem;
                    border-radius: 0.4rem;
                    margin: 0 auto;
                    padding: 2.3rem 0 2.3rem 1.6rem;
                }
            }
        }
        &__memo {
            width: 34.3rem;
            margin: 2.4rem auto 0 auto;
            h2 {
                font-size: 1.2rem;
                font-weight: 700;
                color: #EB734B;
            }
            .inputBox {
                margin: 2.4rem auto 0 calc(4.3rem - 1.6rem);
                p {
                    display: inline-block;
                    width: 31.9rem;
                    height: 6.4rem;
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #D8D8D8;
                    border: #D8D8D8 solid 0.1rem;
                    border-radius: 0.4rem;
                    margin: 0 auto;
                    padding: 2.3rem 0 2.3rem 1.6rem;
                }
            }
        }
    }
</style>