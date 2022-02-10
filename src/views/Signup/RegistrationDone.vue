<template>
    <div class="done">
        <header class="header">
            <h1 class="header__heading">アカウント登録内容確認</h1>
        </header>
        <main class="done__wrap">
            <h2>アカウント登録が完了しました</h2>
            <router-link to="RegisterProfile" class="done__wrap__link">プロフィールを登録する</router-link>
            <router-link to="Home" class="done__wrap__prelink">スキップする</router-link>
        </main>
    </div> 
</template>

<style lang="scss" scoped>
@import "@/sass/_vars";
@import "@/sass/header";
.done__wrap{
    margin-top: 176px;
        h2{
            color: #585858;
            font-size: 1.8rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-align: center;
        }
        &__link{
            display: block;
            width: 295px;
            line-height: 48px;
            background-color: #EB734B;
            color: #fff;
            font-size: 1.4rem;
            text-align: center;
            text-decoration: none;
            border-radius: 112px;
            margin: 60px auto 0;
        }
        &__prelink{
            display: block;
            width: 295px;
            line-height: 48px;
            background-color: #fff;
            color: #EB734B;
            font-size: 1.4rem;
            text-align: center;
            text-decoration: none;
            border-radius: 112px;
            margin: 24px auto 0;
            border: 2px solid #EB734B
        }
}
</style>