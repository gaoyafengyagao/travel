<template>
    <div class='header'>
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe606;</div>
        </router-link> 
        
    </div>
</template>
<script>
export default {
    name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header {
        height: 0.86rem;
        line-height: .86rem;
        text-align: center;
        color: #fff;
        background-color: $bgColor; 
        font-size: .32rem;
        position: relative;
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