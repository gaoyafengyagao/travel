<template>
    <div>
       <banner-detail></banner-detail>
       <detail-header></detail-header>
       <div class='content'></div>
    </div>
</template>

<script>
import BannerDetail from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
export default {
    name: 'Detail',
    components: {
        BannerDetail,
        DetailHeader
    }
}
</script>

<style lang="stylus" scoped>
.content
    height: 20rem
</style>
