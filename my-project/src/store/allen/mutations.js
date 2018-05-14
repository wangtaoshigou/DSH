import{
    ADD_GOOD_ADD,
    ADD_GOOD_REDUCE
} from "./const"

export default{
    Init_Car(state,car){
        state.car = car
    },
    [ADD_GOOD_ADD](state,goodinfo){
        let isHas = state.car.some( good => {
            if( good.id === goodinfo.id ){
                good.num++;
                return true;
            }
                return false;
        })
        if( !isHas ){
            goodinfo.num = 1;
            state.car.push(goodinfo)
        }
        // good.car = good.car.slice()

        localStorage.car = JSON.stringify(state.car)
    },
    [ADD_GOOD_REDUCE](state,goodinfo){
        state.car = state.car.filter( good => {
            if( good.id === goodinfo.id ){
                good.num--;
                if( good.num < 0 ){
                    return false;
                }
                return true;
            }
            return false;
        })
        localStorage.car = JSON.stringify(state.car)
    }
}