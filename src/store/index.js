import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city: '武汉'
    },
    actions: {
        changeCity(ctx,city){
            ctx.commit('changeStateCity',city)
        }
    },
    mutations: {
        changeStateCity(state,city){
            state.city = city
        }
    }
})