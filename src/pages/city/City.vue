<template>
    <div>
       <city-header></city-header>
       <city-search></city-search>
       <city-list></city-list>
       <city-alphabet></city-alphabet> 
    </div>
</template>
<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
import axios from 'axios'
export default {
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return {
            
        }
    },
    mounted(){
        
    },
    methods: {
        
    }
}
</script>
<style lang="stylus" scoped>
    
</style>