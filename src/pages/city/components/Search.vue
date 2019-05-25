<template>
    <div class="search">
       <input type="text" placeholder="请输入搜索城市或拼音" class="search-content"> 
    </div>
</template>
<script>
export default {
    name: 'CitySearch'
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
</style>