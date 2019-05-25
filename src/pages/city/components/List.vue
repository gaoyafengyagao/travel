<template>
    <div class='list' ref="wrapper">
        <div>
        <div class='area'>
            <div class='title border-topbottom'>当前城市</div>
            <div class='button-list'>
                <div class="button-wrap">
                    <div class="button">{{this.$store.state.city}}</div>
                </div>
            </div>
        </div>
        
        <div class='area'>
            <div class='title border-topbottom'>热门城市</div>
            <div class='button-list' >
                <div class="button-wrap" v-for="item of hotcitylist" :key='item.id' @click='getDefaultCity(item.name)'>
                    <div class="button">{{item.name}}</div>
                </div>
            </div>
        </div>

        <div class='area'  v-for="(item,key) of city" :key="key"  :ref='key'>
            <div class='title border-topbottom'>{{key}}</div>
            <div class='item-list'>
                <div class="item" v-for="inner in item" :key="inner.id" @click='getDefaultCity(inner.name)'>{{inner.name}}</div>   
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
        letter: String
    },
    data(){
        return{
            hotcitylist: [
            {
			"id": 1,
			"spell": "beijing",
			"name": "北京"
		}, {
			"id": 3,
			"spell": "shanghai",
			"name": "上海"
		}, {
			"id": 47,
			"spell": "xian",
			"name": "西安"
		}, {
			"id": 239,
			"spell": "sanya",
			"name": "三亚"
		}, {
			"id": 188,
			"spell": "lijiang",
			"name": "丽江"
		}, {
			"id": 125,
			"spell": "guilin",
			"name": "桂林"
		}
            ]
        }
    },
    watch: {
        letter(){
            const element = this.$refs[this.letter][0]
            this.scroll.scrollToElement(element)
        }
    },
    methods: {
        getDefaultCity(city){
            this.$store.dispatch('changeCity',city) //利用 action中的函数 来将数据传递给 store
            this.$router.push('/')  //编程式导航
        }
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