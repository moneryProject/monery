<template>
    <div class="payer">
        <header class="header">
            <router-link to="/" class="header__link">
                <img src="../../assets/back-icon.svg" alt="戻るボタンアイコン">
            </router-link>
            <h1 class="header__heading">支払い相手</h1>
        </header>
        <div class="payer__wrap">
            <div class="payer__wrap__search">
                <img src="../../assets/home/search-icon.svg" alt="虫眼鏡アイコン" class="payer__wrap__search__icon">
                <input type="text" placeholder="ID・名前検索" size="50">
            </div>
            <div class="payer__wrap__exchange">
                <h1 class="payer__wrap__exchange__heading">最近やりとりした人</h1>
                <div class="payer__wrap__exchange__humanwrap">
                    <router-link to="PaymentMethod" class="payer__wrap__exchange__humanwrap__human">
                        <img src="../../assets/home/human01.png" alt="">
                        <span class="payer__wrap__exchange__humanwrap__human__name">東江楓音</span>
                    </router-link>
                    <router-link to="PaymentMethod" class="payer__wrap__exchange__humanwrap__human">
                        <img src="../../assets/home/human02.png" alt="">
                        <span class="payer__wrap__exchange__humanwrap__human__name">木田匠哉</span>
                    </router-link>
                    <router-link to="PaymentMethod" class="payer__wrap__exchange__humanwrap__human">
                        <img src="../../assets/home/human03.png" alt="">
                        <span class="payer__wrap__exchange__humanwrap__human__name">そのりく</span>
                    </router-link>
                    <router-link to="PaymentMethod" class="payer__wrap__exchange__humanwrap__human">
                        <img src="../../assets/home/human04.png" alt="">
                        <span class="payer__wrap__exchange__humanwrap__human__name">石丸大貴</span>
                    </router-link>
                    <router-link to="PaymentMethod" class="payer__wrap__exchange__humanwrap__human">
                        <img src="../../assets/home/human05.png" alt="">
                        <span class="payer__wrap__exchange__humanwrap__human__name">y</span>
                    </router-link>
                    <router-link to="PaymentMethod" class="payer__wrap__exchange__humanwrap__human">
                        <img src="../../assets/home/human06.png" alt="">
                        <span class="payer__wrap__exchange__humanwrap__human__name">橋本</span>
                    </router-link>
                    <router-link to="PaymentMethod" class="payer__wrap__exchange__humanwrap__human">
                        <img src="../../assets/home/human01.png" alt="">
                        <span class="payer__wrap__exchange__humanwrap__human__name">中山</span>
                    </router-link>
                    <router-link to="PaymentMethod" class="payer__wrap__exchange__humanwrap__human">
                        <img src="../../assets/home/human02.png" alt="">
                        <span class="payer__wrap__exchange__humanwrap__human__name">東江楓音</span>
                    </router-link>
                    <router-link to="PaymentMethod" class="payer__wrap__exchange__humanwrap__human">
                        <img src="../../assets/home/human03.png" alt="">
                        <span class="payer__wrap__exchange__humanwrap__human__name">木田匠哉</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "@/sass/_vars";
@import "@/sass/header";
.payer{
    &__wrap{
        margin: 0 16px;
        &__search{
            width: 343px;
            height: 34px;
            display: flex;
            align-items: center;
            border-radius: 6px;
            background-color: #F9F9F9;
            &__icon{
                margin: 0 20px 0 15px;
            }
            input{
                font-size: 1.2rem;
            }
        }
        &__exchange{
            margin-top: 32px;
            &__heading{
                color: $mainTextColor;
                font-size: 1.2rem;
                letter-spacing: 1.2px;
                margin-bottom: 20px;
            }
            &__humanwrap{
                width: 343px;
                display: flex;
                flex-wrap: nowrap;
                flex-direction: column;
                &__human{
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    margin-bottom: 16px;
                    &__name{
                        margin-left: 16px;
                        color: $mainTextColor;
                        font-size: 1.4rem;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>