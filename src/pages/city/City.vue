<template>
    <div>
       <city-header></city-header>
       <city-search></city-search>
       <city-list :city="cities" :hot="hotCitise"></city-list>
       <city-alphabet :cities="cities"></city-alphabet> 
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
            cities: {},
            hotCitise: [],
            letter: []
        }
    },
    mounted(){
        this.getCityInfo()
        
    },
    methods: {
        getCityInfo(){
            axios.get('/api/city.json').then(res=>{
                 res = res.data
                if(res.ret && res.data){
                    const data = res.data
                    const aaa = data.hotCitise
                    this.cities = data.cities
                    console.log(data)
                    console.log(aaa)
                    console.log(this.cities)
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
    
</style>