<template>
    <div>
      <div class="swiper">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for='item in swiperList' :key='item.id'>
              <!-- src前面必须加冒号,进行绑定 -->
              <img class="swiper-img" :src="item.imgUrl" alt="">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <!-- 下面是左右的两个按钮 -->
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div> -->
          <!-- 这个是滚动条 -->
          <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
          </swiper>
      </div>
    </div>
</template>
<script>
export default {
    data (){
        return{
           swiperOption: {
            pagination: '.swiper-pagination'
           },
           swiperList: [
               {
                   id: 0,
                   imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
               },
               {
                   id: 1,
                   imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
               }
           ]
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