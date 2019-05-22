/* eslint-disable */
<template>
    <div>
    <home-header></home-header>
    <HomeSwiper></HomeSwiper>
    <HomeIcon></HomeIcon>
    <home-recommend></home-recommend>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/swiper.vue'
import HomeIcon from './components/icon.vue'
import HomeRecommend from './components/recommend.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend
  }
}
</script>

<style>
.home {
  font-size: 30px;
}
</style>
