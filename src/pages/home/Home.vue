/* eslint-disable */
<template>
    <div>
    <home-header></home-header>
    <HomeSwiper></HomeSwiper>
    <HomeIcon></HomeIcon>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/swiper.vue'
import HomeIcon from './components/icon.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon
  }
}
</script>

<style>
.home {
  font-size: 30px;
}
</style>
