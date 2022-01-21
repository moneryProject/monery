<template>
    <div>
        <Header/>
        <main></main>
        <GlobalNav/>
    </div>
</template>

<script>
import GlobalNav from '@/components/GlobalNav'
import Header from '@/components/Header'
export default{
        components: {
        Header,
        GlobalNav
    },
}
</script>