<template>
    <router-link to="" class="history">
        <section class="history__contentbox">
            <h1 class="history__contentbox__content">レンタカー代</h1>
            <p class="history__contentbox__date">
                2020.01.12
                <span class="history__contentbox__date__name">田中</span>
            </p>
        </section>
        <section class="history__paybox">
            <h2 class="history__paybox__pay">
                <span>¥</span>
                10000
            </h2>
            <div class="history__paybox__arrow">
                <img src="../assets/arrow.svg" alt="右矢印アイコン">
            </div>
        </section>
    </router-link>
</template>

<style lang="scss" scoped>
.history{
    display: flex;
    width: 100%;
    height: 63px;
    border: 1px solid #F3F3F3;
    text-decoration: none;
    align-items: center;
    padding: 0 16px;
    &__contentbox{
        color: #4F4F4F;
        &__content{
            font-size: 1.2rem;
            font-weight: bold;
            letter-spacing: 1.2px;
        }
        &__date{
            font-size: 1rem;
            letter-spacing: 1px;
            &__name{
                margin-left: 5px;
            }
        }
    }
    &__paybox{
        color: #4F4F4F;
        display: flex;
        align-items: center;
        margin: 0 0 0 auto;
        &__pay{
            font-size: 1.4rem;
            font-weight: bold;
            margin-right: 19px;
            letter-spacing: 1.4px;
        }
    }
}
</style>