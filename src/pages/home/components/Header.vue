<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont icon-back">&#xe606;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe615;</span>
            输入城市/景点/游玩主题</div>
            <router-link to="/city">
                <div class="header-right">{{this.city}}
                    <span class="iconfont icon-jiantou">&#xe64a;</span>
                </div>
            </router-link>
        
    </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: {
      city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
   .header {
       display: flex;
       height: 0.86rem;
       line-height: 0.86rem;
       background: $bgColor;
       color: #fff;
       .header-left {
           width: 0.64rem;
           float: left;
           .icon-back{
               font-size: 0.4rem;
               text-align: center;
           }
       }
       .header-input {
           flex: 1;
           margin-top: 0.12rem;
           margin-left: 0.4rem;
           padding-left: 0.2rem;
           background: #fff;
           border-radius: 0.1rem;
           height: 0.62rem;
           line-height: 0.62rem;
           color: #ccc;

       }
       .header-right {
           width: 1.24rem;
           float: right;
           text-align: center;
           .icon-jiantou {
               font-size: 0.24rem;
               margin-left: -0.04rem;
           }
       }
   }
</style>
