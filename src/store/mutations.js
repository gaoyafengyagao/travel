export default {
    changeStateCity(state,city){
        try{
            state.city = city
            localStorage.city = city
        }catch(e){}   
    }
}