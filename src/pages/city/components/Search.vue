<template>
<div>
    <div class="search">
       <input v-model="keywords" type="text" placeholder="请输入搜索城市或拼音" class="search-content"> 
    </div>
    <div class='search-input' v-show="this.keywords">
        <ul>
            <li v-for="item in list" :key="item.id" class='search-item' @click='getDefaultCity(item.name)'>{{item.name}}</li>
            <!-- 优化代码: 将html中的逻辑代码移到 JS 中去 --> 
            <li class='search-item' v-show='noDate'>没有找到匹配数据</li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
    name: 'CitySearch',
    props: { //需要获取city
        city: Object
    },
    data(){
        return {
            keywords: '',
            timeId: null,
            list: []
        }
    },
    computed:{
        noDate(){
            return !this.list.length
        }
    },
    watch: {    // 用 watch 对象方法来监听 keywords 的变化
        keywords(){
            if(this.timeId){
                clearTimeout(this.timeId)
            }
            if(!this.keywords){
                this.list = []
                return 
            }
            this.timeId = setTimeout(()=>{ //这里必须使用箭头函数,因为定时器函数会改变 this 的指向
                const result = []
                for(let i in this.city){// 对city对象 进行遍历(遍历的是 对象中键值对中的 键 ),得到其中的每一个 大写首字母(就是键) 包含城市信息的数组
                    this.city[i].forEach(element => { // 对例如键值为 A 的数组进行遍历, element 分别表示的是 A 里面的一个个城市的信息
                        if(element.spell.indexOf(this.keywords) > -1 || element.name.indexOf(this.keywords) > -1){
                            result.push(element)
                        }
                    });
                }
                this.list = result
            },100)
        }
    },
    methods: {
        getDefaultCity(city){
            this.$store.dispatch('changeCity',city) //利用 action中的函数 来将数据传递给 store
            this.$router.push('/')  //  编程式导航
        }
    }
}
</script>
<style lang="stylus" scoped>
    .search{
        height: 0.72rem;
        padding: 0.1rem;
        background-color #eee;
        .search-content {
            box-sizing: border-box;
            height: 0.62rem;
            line-height: 0.62rem;
            text-align: center;
            border-radius: 0.06rem
            width: 100%;
            color: #666;
            padding: 0 0.1rem;
        }
    }
    .search-input {
        z-index: 1;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 1.58rem;
        background-color #eee;
        .search-item {
            line-height: 0.62rem;
            padding-left: 0.2rem;
            background-color #fff;
            border-bottom: 0.02rem solid #eee;
        }
    }
</style>