<template>
    <div class="total">
        <ul class="recommend-title">
            <li class="recommend">热门推荐</li>
        </ul>
        <ul class='content'>
            <router-link v-for="item in list" :key="item.id" :to="'/detail/'+ item.id" tag='li'>
                <img :src="item.imgUrl" alt="" class ="content-img">
                <div class="content-info">
                <p class="content-info-title">{{item.title}}</p>
                <p class="content-info-describe">{{item.describe}}</p>
                </div>
            </router-link>          
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        list: Array
    },
    data(){
        return {
            
    }
}
}
</script>

<style lang="stylus" scoped>
    .total {
        width: 100%;
        background-color #eee;
        padding-top: 0.05rem;
        .recommend-title {
            .recommend {
                margin-left: 1rem;
                font-size: 0.35rem;
            }
            height: 0.9rem;
            line-height: 0.9rem;
            display: flex;
            justify-content: space-between;
            text-align: center;
            background-color #fff; 
            ul {
                list-style: none;
                width: 100%;
                display: flex;
                justify-content: space-between;
                li {
                    text-align: center;
                    width: 24.9%;
                    font-size: 0.35rem;
                    font-weight: 700;
                }   

            }
        }
        .content {
        
            .content-img {
                    width: 8.28rem;
                    height: 5.5rem; 
                }
            
            .content-info {
                height: 1.5rem;
                .content-info-title {
                    color: #222;
                    font-size: 0.32rem;
                    line-height: 0.44rem;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    margin-right: 0.4rem;
                }
                .content-info-describe {
                    color: #222;
                    font-size: 0.24rem;
                    line-height: 0.4rem;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: wrap;
                    margin-right: 0.4rem;
                }
            }
        }
    }
   
   
</style>