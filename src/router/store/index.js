import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city: '上海'
    },
    mulations: {
        changeCity (state,city){
            state.city = city
        }
    }
})