<template>
    <router-link to="Reimburse" class="content">
        <div class="content__icon">
            <img src="../assets/notice/get-icon.svg" alt=""><br>
            <p class="content__icon__text">もらう</p>
        </div>
        <div class="content__message">
            <h2>食事代</h2>
            <p class="content__message__date">2020.01.12 <span>石丸</span></p>
        </div>
        <div class="content__money">
            ＋ ¥ 10000
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
@import "@/sass/_vars";
@import "@/sass/noticeContent";
</style>