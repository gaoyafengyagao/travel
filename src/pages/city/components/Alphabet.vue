<template>
    <div>
       <ul class='item-list'>
           <li class='item' v-for="(item,key) in cities" :key="key">{{key}}</li>
       </ul>
    </div>
</template>
<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    }
}
</script>
<style lang="stylus" scoped>
    .item-list {
        position: absolute;
        right: 0;
        top: 1.58rem;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .item {
            color: skyblue;
        }
    }
</style>