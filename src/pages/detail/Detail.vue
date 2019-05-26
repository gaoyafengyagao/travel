<template>
    <div>
       <banner-detail :sightName='sightName' :bannerImg='bannerImg'></banner-detail>
       <detail-header></detail-header>
       <detail-list :List='list'></detail-list>
       <div class='content'></div>
    </div>
</template>

<script>
import BannerDetail from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
export default {
    name: 'Detail',
    data(){
        return {
            sightName: '',
            bannerImg: '',
            list: [],
        }
    },
    components: {
        BannerDetail,
        DetailHeader,
        DetailList
    },
    methods: {
        getDetailInfo(){
            axios.get('/api/detail.json').then(res=>{
                res = res.data 
                if( res.ret && res.data){   
                    const data = res.data
                    this.sightName = data.sightName
                    this.bannerImg = data.bannerImg
                    this.list = data.categoryList
                    
                }
            })
        }
    },
    mounted(){
        this.getDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>
.content
    height: 20rem
</style>
