<template>
    <div>
        <div class='itemList' v-for='(item,index) in List' :key='index' >
            <div class='item-title'>
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class='children-list'>
                <detail-list :List='item.children'></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailList',
    props: {
        List: Array
    }
}
</script>

<style lang="stylus" scoped>
    .item-title
        height: 0.8rem
        line-height: 0.8rem
        fant-size: 0.32rem
        padding: 0 0.2rem
        .item-title-icon
            position: relative
            left: 0.06rem
            top: 0.06rem
            display: inline-block
            padding-right: 0.12rem;
            width: 0.32rem;
            height: 0.32rem;
            background: url(https://s.qunarzz.com/vacation_react/poi/ticket.png) no-repeat 0 0;
            background-size: 0.32rem;
            font-size: 18px;
            color: #00afc7
    .children-list
        padding: 0 0.6rem
</style>