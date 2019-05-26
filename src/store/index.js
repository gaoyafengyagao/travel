import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

 
export default new Vuex.Store({
    state: state,
    actions: {
        changeCity(ctx,city){
            ctx.commit('changeStateCity',city)
        }
    },
    mutations: mutations
})