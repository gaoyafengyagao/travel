<template>
    <div class="total">
        <ul class="recommend-title">
            <li class="recommend">热门推荐</li>
        </ul>
        <ul class='content'>
            <li v-for="item in list" :key="item.id">
                    <img :src="item.imgUrl" alt="" class ="content-img">
                <div class="content-info">
                    <p class="content-info-title">{{item.title}}</p>
                    <p class="content-info-describe">{{item.describe}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list: [
                {
                    id: 0,
                    imgUrl: 'https://m.tuniucdn.com/fb2/t1/G5/M00/49/8A/Cii-slsrIQ6ID5peAARa3uIGJgwAAI5LQAi6wkABFr2402_w800_h0_c0_t0.jpg',
                    title: "日本东京-富士山-大阪6或7日游",
                    describe: '途牛自营/和爱系列 途牛领队服务 高档型酒店加1晚温泉 螃蟹鳗鱼料理 双点进出 东京连住享自由 CDG线东阪双自由'
                },
                {
                    id: 1,
                    imgUrl: 'https://m.tuniucdn.com/fb2/t1/G5/M00/FE/D2/Cii-sluMyu-IMgZdABQRF0giPNMAANG0wDW4gcAFBEv431_w800_h0_c0_t0.jpg',
                    title: "[端午]泰国曼谷-芭堤雅-沙美岛6或7日游",
                    describe: '热卖3年,销量过万/1购物店1天自由/曼谷市区5星,芭提雅海边连住/万豪海鲜自助餐/双网红夜市/直飞含领队含行李'
                },
                {
                    id: 2,
                    imgUrl: 'https://m.tuniucdn.com/fb2/t1/G5/M00/49/8A/Cii-slsrIQ6ID5peAARa3uIGJgwAAI5LQAi6wkABFr2402_w800_h0_c0_t0.jpg',
                    title: "日本东京-富士山-大阪6或7日游",
                    describe: '途牛自营/和爱系列 途牛领队服务 高档型酒店加1晚温泉 螃蟹鳗鱼料理 双点进出 东京连住享自由 CDG线东阪双自由'
                },
                {
                    id: 3,
                    imgUrl: 'https://m.tuniucdn.com/fb2/t1/G5/M00/FE/D2/Cii-sluMyu-IMgZdABQRF0giPNMAANG0wDW4gcAFBEv431_w800_h0_c0_t0.jpg',
                    title: "[端午]泰国曼谷-芭堤雅-沙美岛6或7日游",
                    describe: '热卖3年,销量过万/1购物店1天自由/曼谷市区5星,芭提雅海边连住/万豪海鲜自助餐/双网红夜市/直飞含领队含行李'
                }
            ]
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