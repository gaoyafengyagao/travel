<template>
    <div>
       <router-link tag='div' to='/' class='header-abs' v-show='showHeader'>
           <div class="iconfont header-back-icon">&#xe606;</div>
       </router-link>
       <div class='header-fixed' v-show='!showHeader' :style="showStyle">
        景点详情
            <router-link to="/">
                <div class="iconfont header-back">&#xe606;</div>
            </router-link> 
       </div>
    </div>
</template>

<script>

export default {
    name: 'DetailHeader',
    data(){
        return {
            showHeader: true,
            showStyle: {    //  为了设置渐隐渐现的效果,要使用透明度
                opacity: 0
            }
        }
    },
    methods: {
        handleHeaderShow(){
            const top = document.documentElement.scrollTop
            // console.log(top)
            if(top>60){
                let newopacity = top / 140
                newopacity = newopacity > 1 ? 1 : newopacity
                this.showStyle.opacity = newopacity

                this.showHeader = false;
            }else{
                this.showHeader = true;
            }
        }
    },
    activated(){
       window.addEventListener('scroll',this.handleHeaderShow)
    },
    deactivated () {
        window.removeEventListener('scroll',this.handleHeaderShow)
    }

}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header-abs
        position: absolute 
        top: 0.2rem
        left: 0.2rem
        width: 0.8rem
        height: 0.8rem 
        line-height: 0.8rem
        text-align: center
        border-radius: 0.4rem
        background-color: rgba(0 ,0 ,0 , .6)
        .header-back-icon
            color: #ffffff
            font-size: 0.4rem
    .header-fixed {
        position: fixed
        top: 0
        left: 0
        right: 0
        height: 0.86rem;
        line-height: .86rem;
        text-align: center;
        color: #fff;
        background-color: $bgColor; 
        font-size: .32rem;
        .header-back {
            position: absolute;
            left 0;
            top: 0;
            width: 0.64rem;
            font-size: 0.4rem;
            text-align: center;
            color: #fff;
        }
    }
</style>