<template>
    <div>
      <div class="swiper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for='item in list' :key='item.id'>
              <!-- src前面必须加冒号,进行绑定 -->
            <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>
<script>
export default {
    props: {
                list: Array
            },
    data (){
        return{
           swiperOption: {
            pagination: '.swiper-pagination'
           }        
        }
    },
    computed:{
        showSwiper(){
            return this.list.length
        }
    }
}
</script>
<style lang="stylus" scoped>
    .swiper >>> .swiper-pagination-bullet-active {
        background: #fff;
    }
    .swiper {
        width: 100%;
        height: 0;
        padding-bottom: 25.6%;
        overflow: hidden;
        background-color: #ccc;  
        .swiper-img {
            width: 100%;
        }   
    }
</style>