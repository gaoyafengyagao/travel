/* eslint-disable */
<template>
    <div>
    <home-header></home-header>
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
  },
  mounted (){
    this.getHomeInfo()
  }
}
</script>

<style>
.home {
  font-size: 30px;
}
</style>
