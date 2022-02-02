<template>
    <div class="ticket">
        <header class="header">
            <router-link to="Notice" class="header__link">
                <img src="../../assets/back-icon.svg" alt="戻るボタンアイコン">
            </router-link>
            <h1 class="header__heading">チケット詳細</h1>
        </header> 
        <div class="ticket__wrap">
            <div class="ticket__wrap__gift">
                <img src="../../assets/notice/gift.jpg" alt="">
            </div>
            <div class="ticket__wrap__content">
                <div class="ticket__wrap__content__profile">
                    <img src="../../assets/notice/human01.png" alt="">
                    <p class="ticket__wrap__content__profile__name">東江</p>
                </div>
                <div class="ticket__wrap__content__detail">
                    <div class="ticket__wrap__content__detail__box">
                        <p class="ticket__wrap__content__detail__box__title">日付・時間</p>
                        <p class="ticket__wrap__content__detail__box__content">2022年1月10日 22時 50分</p>
                    </div>
                    <div class="ticket__wrap__content__detail__box">
                        <p class="ticket__wrap__content__detail__box__title">ギフト</p>
                        <p class="ticket__wrap__content__detail__box__content">ご飯代</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/sass/_vars";
@import "@/sass/header";
.ticket__wrap{
    margin-top: 80px;
    &__gift{
        width: 100vw;
        height: 158px;
        background-color: #FFF7E4;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto 16px;
    }
    &__content{
        color: $mainTextColor;
        margin: 0 40px;
        &__profile{
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            img{
                margin-right: 14px;
            }
            &__name{
                font-size: 1.2rem;
                font-weight: 700;
                letter-spacing: 0.8px;
            }
        }
        &__detail{
            &__box{
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-bottom: 16px;
                &__title{
                    font-size: 1rem;
                    font-weight: 400;
                    letter-spacing: 1.2px;
                }
                &__content{
                    font-size: 1rem;
                    font-weight: 700;
                    letter-spacing: 1.6px;
                }
            }
        }
    }
}
</style>