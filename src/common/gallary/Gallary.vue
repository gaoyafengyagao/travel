<template>
    <div class="container" @click='handleGallaryClick'>
      <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in images" :key="index">
              <!-- src前面必须加冒号,进行绑定 -->
                <img class="gallary-img"
                 :src=item >
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>

export default {
    name: 'CommonGallary',
    props: {
        images: Array,
        defaolt(){
            return []
        }
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observer:true,
                observeParents:true,
            }   
        }
    },
    methods: {
        //点击container,触发函数子组件Gallary中的 handleGallaryClose 函数,这个函数将 子组件的一个方法传给了父组件 
        handleGallaryClick () {
            this.$emit('Close')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow: inherit
    .container 
        display: flex
        flex-direction: column
        justify-content: center
        position: fixed
        left: 0
        right: 0
        top: 0
        bottom: 0
        z-index: 99
        background-color: #000
        .wrapper
            background-color #fff
            .gallary-img
                width: 100%
            .swiper-pagination
                color: #fff
                bottom: -1rem

</style>