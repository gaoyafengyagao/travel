/* eslint-disable */
<template>
    <div>
    <home-header></home-header>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style>
.home {
  font-size: 30px;
}
</style>
