<template>
<div>
    <div class='banner' @click='handleGallary'>
        <img class='banner-img'
        src="https://m.tuniucdn.com/fb2/t1/G2/M00/80/9C/Cii-T1fo1mOIJt7IADD_CmMUvbMAACxswCA9a0AMP8i668_w640_h320_c1_t0.jpg" alt="">
        <div class='banner-info'>
            <div class='banner-title'>{{this.sightName}}}</div>
            <div class='banner-number'>
                <span class="iconfont icon-jiantou">&#xe643;</span> &nbsp;23
            </div>
        </div>
    </div>
    <common-gallary :images='image' v-show="showGallary" @Close='handleGallaryClose'></common-gallary>
</div>    
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'
export default {
    name: 'BannerDetail',
    props: {
        sightName: String,
        bannerImg: String
    },
    data(){
        return {
            image: ['https://img1.qunarzz.com/vs_ceph_vs_tts/adbf3ff8-0176-4394-a841-12098440a4cb.jpg_r_1280x840x90_338c57e7.jpg',
            "https://img1.qunarzz.com/vs_ceph_vs_tts/19d390e3-1c27-461c-9d3a-baee468859bd.jpg_r_1280x840x90_2fdd4cf6.jpg"],
            showGallary: false
        }
    },
    components: {
        CommonGallary
    },
    methods: {
        handleGallary(){
            this.showGallary = true
        },
        handleGallaryClose(){
            this.showGallary = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 50%
        .banner-img
            width: 100%
        .banner-info {
            display: flex;
            position: absolute ;
            left: 0;
            bottom: 0;
            right: 0;
            height: 0.6rem;
            color: #fff;
            background-image:linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
            .banner-title {
                flex: 1;
                font-size: 0.32rem;
                padding: 0 0.2rem;
            }    
            .banner-number {
                height: 0.32rem;
                line-height: 0.32rem;
                padding: 0  0.4rem;
                margin-top: .14rem;
                border-radius: .2rem
                background: rgba(0, 0, 0, .8)
                font-size: .24rem   
            }       
        }
            
            



</style>