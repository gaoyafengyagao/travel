/* eslint-disable */
<template>
    <div>
    <home-header></home-header>
    <HomeSwiper :list='swiperList'></HomeSwiper>
    <HomeIcon></HomeIcon>
    <home-recommend :list='list'></home-recommend>
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
      lastCity: '',
      list: [
                {
                    id: '0001',
                    imgUrl: 'https://m.tuniucdn.com/fb2/t1/G5/M00/49/8A/Cii-slsrIQ6ID5peAARa3uIGJgwAAI5LQAi6wkABFr2402_w800_h0_c0_t0.jpg',
                    title: "日本东京-富士山-大阪6或7日游",
                    describe: '途牛自营/和爱系列 途牛领队服务 高档型酒店加1晚温泉 螃蟹鳗鱼料理 双点进出 东京连住享自由 CDG线东阪双自由'
                },
                {
                    id: '0002',
                    imgUrl: 'https://m.tuniucdn.com/fb2/t1/G5/M00/FE/D2/Cii-sluMyu-IMgZdABQRF0giPNMAANG0wDW4gcAFBEv431_w800_h0_c0_t0.jpg',
                    title: "[端午]泰国曼谷-芭堤雅-沙美岛6或7日游",
                    describe: '热卖3年,销量过万/1购物店1天自由/曼谷市区5星,芭提雅海边连住/万豪海鲜自助餐/双网红夜市/直飞含领队含行李'
                },
                {
                    id: '0003',
                    imgUrl: 'https://m.tuniucdn.com/fb2/t1/G5/M00/49/8A/Cii-slsrIQ6ID5peAARa3uIGJgwAAI5LQAi6wkABFr2402_w800_h0_c0_t0.jpg',
                    title: "日本东京-富士山-大阪6或7日游",
                    describe: '途牛自营/和爱系列 途牛领队服务 高档型酒店加1晚温泉 螃蟹鳗鱼料理 双点进出 东京连住享自由 CDG线东阪双自由'
                },
                {
                    id: '0004',
                    imgUrl: 'https://m.tuniucdn.com/fb2/t1/G5/M00/FE/D2/Cii-sluMyu-IMgZdABQRF0giPNMAANG0wDW4gcAFBEv431_w800_h0_c0_t0.jpg',
                    title: "[端午]泰国曼谷-芭堤雅-沙美岛6或7日游",
                    describe: '热卖3年,销量过万/1购物店1天自由/曼谷市区5星,芭提雅海边连住/万豪海鲜自助餐/双网红夜市/直飞含领队含行李'
                }
            ]
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
