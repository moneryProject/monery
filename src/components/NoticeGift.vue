<template>
    <router-link to="Ticket" class="gift">
        <div class="gift__img">
            <img src="../assets/notice/gift.jpg" alt="">
        </div>
        <div class="gift__box">
            <div class="gift__box__message">
                <h2>車の運転ありがとう</h2>
                <p class="gift__box__message__date">2020.01.12 田中から石丸へ</p>
            </div>
            <p class="gift__box__content">ご飯代</p>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
.gift{
    display: inline-block;
    text-decoration: none;
    color: #4F4F4F;
    box-shadow: 0px 4px 4px 0px #B7B7B740;
    margin-bottom: 16px;
    &__img{
        width: 344px;
        height: 158px;
        background-color: #FFF7E4;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
    }
    &__box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        &__message{
            margin-left: 20px;
            h2{
                font-size: 1.2rem;
                font-weight: 700;
                letter-spacing: 0.8px;
                margin-bottom: 4px;
            }
            &__date{
                font-size: 0.8rem;
                font-weight: 500;
                letter-spacing: 2px;
            }
        }
        &__content{
            color: #EB734B;
            font-size: 1.4rem;
            font-weight: 700;
            letter-spacing: 0.8px;
            margin-right: 16px;
        }
    }
}
</style>