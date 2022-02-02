<template>
    <div class="exchange">
        <div class="exchange__content">
            <NoticeHotel/>
            <NoticeMeal/>
            <NoticeGift/>
        </div>
    </div>
</template>

<script>
import NoticeHotel from '@/components/NoticeHotel'
import NoticeMeal from '@/components/NoticeMeal'
import NoticeGift from '@/components/NoticeGift'
export default {
    components:{
        NoticeHotel,
        NoticeMeal,
        NoticeGift,
    },   
}
</script>

<style lang="scss" scoped>
.exchange{
    margin: 0 16px;
}
</style>