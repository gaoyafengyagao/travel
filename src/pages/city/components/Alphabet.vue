<template>
    <div>
       <ul class='item-list'>
           <li class='item'>A</li>
           <li class='item'>B</li>
           <li class='item'>C</li>
           <li class='item'>D</li>
           <li class='item'>E</li>
       </ul>
    </div>
</template>
<script>
export default {
    name: 'CityAlphabet'
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