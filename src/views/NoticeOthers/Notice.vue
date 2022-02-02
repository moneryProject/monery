<template>
    <div class="notice">
        <header class="header">
            <router-link to="/" class="header__link">
                <img src="../../assets/back-icon.svg" alt="戻るボタンアイコン">
            </router-link>
            <h1 class="header__heading">通知</h1>
        </header> 
        <div class="notice__wrap">
            <div class="notice__wrap__currentbox">
                <div class="notice__wrap__currentbox__current" @click="all();" v-bind:class="border01">すべて</div>
                <div class="notice__wrap__currentbox__current" @click="exchange();" v-bind:class="border02">お金のやりとり</div>
            </div>
            <component :is="currentView" class="notice__wrap__view"></component>
        </div>
    </div>
</template>

<script>
import NoticeAll from '@/components/NoticeAll'
import NoticeExchange from '@/components/NoticeExchange'
export default {
    components:{
        NoticeAll,
        NoticeExchange,
    },
    data(){
        return{
            currentView: 'NoticeAll',
            border01: 'notice-border',
            border02: '',
        }
    },
    methods:{
        all(){
            this.currentView = "NoticeAll";
            this.border02 = "";
            this.border01 = "notice-border";
        },
        exchange(){
            this.currentView = "NoticeExchange";
            this.border01 = "";
            this.border02 = "notice-border";
        },
    }
}
</script>

<style lang="scss" scoped>
@import "@/sass/_vars";
@import "@/sass/header";
.notice__wrap{
    margin-top: 150px;
    &__currentbox{
        display: flex;
        justify-content: space-around;
        margin-bottom: 32px;
        &__current{
            width: 170px;
            color: $mainTextColor;
            font-size: 1.2rem;
            font-weight: 700;
            text-align: center;
            letter-spacing: 0.8px;
            padding-bottom: 4px;
        }
    }
}
.notice-border{
    border-bottom: solid 2px #EB734B;
}
</style>