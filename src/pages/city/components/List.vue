<template>
    <div class='list' ref="wrapper">
        <div>
        <div class='area'>
            <div class='title border-topbottom'>当前城市</div>
            <div class='button-list'>
                <div class="button-wrap">
                    <div class="button">北京</div>
                </div>
            </div>
        </div>
        
        <div class='area'>
            <div class='title border-topbottom'>热门城市</div>
            <div class='button-list' >
                <div class="button-wrap" v-for="(item,index) of hot" :key='index'>
                    <div class="button">{{item.name}}</div>
                </div>
                <div class="button-wrap">
                    <div class="button">北京</div>
                </div>
                <div class="button-wrap">
                    <div class="button">北京</div>
                </div>
                <div class="button-wrap">
                    <div class="button">北京</div>
                </div>
            </div>
        </div>

        <div class='area'  v-for="(item,key) of city" :key="key">
            <div class='title border-topbottom'>{{key}}</div>
            <div class='item-list'>
                <div class="item" v-for="inner in item" :key="inner.id">{{inner.name}}</div>   
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name: 'CityList',
    props: {
        city: Object,
        hot: Array,
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper)
    }
}
</script>
<style lang="stylus" scoped>
    .list {
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        .border-topbottom {
            border-color: #cccccc
        }                  
         .title {
            height: 0.54rem;
            line-height: 0.54rem;
            background-color: #eee;
            color: #666;
            padding-left: 0.2rem;
         }
         .button-list {
            overflow: hidden;
            padding: 0.1rem 0.6rem 0.1rem;
            .button-wrap {
                float: left;
                width: 33%;
                .button {
                    text-align: center;
                    margin: 0.1rem;
                    padding: 0.1rem;
                    border: 0.02rem solid #ccc;
                    border-radius: 0.06rem;
                }
            }  
         }
         .item-list {
             .item {
                height: 0.7rem;
                line-height: 0.7rem;
                padding-left: 0.2rem;
                border-bottom: 0.02rem solid #ccc
             }
         }
    }
</style>