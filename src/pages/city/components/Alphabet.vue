<template>
    <div>
       <ul class='item-list'>
           <li class='item' v-for="(item,key) in cities" :key="key" @click="getKey">{{key}}</li>
       </ul>
    </div>
</template>
<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    methods: {
        getKey(e){
            this.$emit('change',e.target.innerText)
            //console.log(e.target.innerText)
        }
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
            padding:0.05rem 0.02rem;
            font-size: 0.35rem;
        }
    }
</style>