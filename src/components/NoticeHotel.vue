<template>
    <router-link to="Reimburse" class="content">
        <div class="content__icon">
            <img src="../assets/notice/for-icon.svg" alt=""><br>
            <p class="content__icon__text">送る</p>
        </div>
        <div class="content__message">
            <h2>ホテル代</h2>
            <p class="content__message__date">2020.01.12 <span>田中</span></p>
        </div>
        <div class="content__money">
            − ¥ 30000
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
@import "@/sass/_vars";
@import "@/sass/noticeContent";
</style>