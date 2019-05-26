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
import { mapState } from  'vuex'
import axios from 'axios'
export default {
  name: 'Home',
  data(){
    return {
      swiperList: [],
      lastCity: ''
    }
  },
  computed:{
    ...mapState(['city'])
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend
  },
  methods: {
    getHomeInfo(){
      axios.get('/api/index.json?city='+ this.city).then(this.getHomeInfoSucc)
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
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {  //在 keep-alive 激活的时候触发
	if(this.lastCity !== this.city){ //  当在城市列表页切换城市的时候,也就是当前的 this.city(切换后的城市) 和
	 //this.lastCity(切换前城市)不一致时,再发一次 ajax 请求,将Home页面的城市相关内容切换
		this.lastCity = this.city	//更新 this.lastCity 的数据
		this.getHomeInfo()	//再发一次 ajax 请求
	}
  }
}
</script>

<style>
.home {
  font-size: 30px;
}
</style>
