import {
    ADD_GOOD_IN_CAR,
    REDUCE_GOOD_IN_CAR,
    INIT_CAR
} from './const'

export default {
    [INIT_CAR] (state, car) {
        state.car = car
    },
    [ADD_GOOD_IN_CAR] (state, goodinfo) {
        //mutation更新数据即可，没有后端所以actions无法改数据，只能在mutation更改
        let isHas = state.car.some(good => {
            if( good.id === goodinfo.id ) {
                good.num ++;
                return true
            }
            return false
        })
        if ( !isHas ) {
            goodinfo.num = 1
            state.car.push(goodinfo)
        }
        state.car = state.car.slice()

        localStorage.car = JSON.stringify(state.car)
    },
    [REDUCE_GOOD_IN_CAR] (state, goodinfo) {
        state.car = state.car.filter(good => {
            if ( good.id === goodinfo.id ) {
                good.num--
                if( good.num <= 0 ) {
                    return false
                }
                return true
            }
            return true
        })
        localStorage.car = JSON.stringify(state.car)
    }
}