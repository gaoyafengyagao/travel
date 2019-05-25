/* eslint-disable */
<template>
    <div>
    <home-header :city='citys'></home-header>
    <HomeSwiper :list='swiperList'></HomeSwiper>
    <HomeIcon></HomeIcon>
    <home-recommend></home-recommend>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/swiper.vue'
import HomeIcon from './components/icon.vue'
import HomeRecommend from './components/recommend.vue'
import axios from 'axios'
export default {
  name: 'Home',
  data(){
    return {
      citys: [],
      swiperList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend
  },
  methods: {
    getHomeInfo(){
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data;
      if(res.ret && res.data){
        const data = res.data;
        this.swiperList = data.swiperList;
      }
    },
    getCitys(){
            axios.get('/api/city.json').then(function(result){
                if(result.ret && result.data){
                    const data = result.data;
                    this.citys = data.hotCities;
                    console.log(this.citys)
                }
            })
        }
  },
  mounted (){
    this.getHomeInfo(),
    this.getCitys()
  }
}
</script>

<style>
.home {
  font-size: 30px;
}
</style>
