<template>
    <div class="all">
        <div class="all__content">
            <NoticeHotel/>
            <NoticeMeal/>
            <NoticeGift/>
            <NoticeOpe/>
            <NoticeOpe/>
            <NoticeHotel/>
        </div>
    </div>
</template>

<script>
import NoticeHotel from '@/components/NoticeHotel'
import NoticeMeal from '@/components/NoticeMeal'
import NoticeGift from '@/components/NoticeGift'
import NoticeOpe from '@/components/NoticeOpe'
export default {
    components:{
        NoticeHotel,
        NoticeMeal,
        NoticeGift,
        NoticeOpe,
    },   
}
</script>

<style lang="scss" scoped>
.all{
    margin: 0 16px;
}
</style>