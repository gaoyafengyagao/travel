<template>
    <div>
       <banner-detail></banner-detail>
       <detail-header></detail-header>
       <detail-list :List='list'></detail-list>
       <div class='content'></div>
    </div>
</template>

<script>
import BannerDetail from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
export default {
    name: 'Detail',
    data(){
        return {
            list: [
                {title: '成人票',
                children:[
                    { title: '成人三联票'},
                    { title: '成人五联票'}
                ]},
                {title: '学生票'},
                {title: '儿童票'},
                {title: '团体票'}
            ]
        }
    },
    components: {
        BannerDetail,
        DetailHeader,
        DetailList
    }
}
</script>

<style lang="stylus" scoped>
.content
    height: 20rem
</style>
