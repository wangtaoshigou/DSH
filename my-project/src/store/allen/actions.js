import{
    ADD_GOOD_INIT,
    ADD_GOOD_ADD,
    ADD_GOOD_REDUCE
} from "./const"

export default {
    initCar ({commit}) {
        setTimeout(() => {
            let car = JSON.parse(localStorage.car?localStorage.car:'[]')
            commit(ADD_GOOD_INIT,car)
        },500);
    },
    addGoodInCar ({commit}, goodinfo) {
        addHandler(goodinfo,() => {
            commit(ADD_GOOD_ADD, goodinfo)
        })
    },
    reducerGoodInCar ({commit}, goodinfo) {
        setTimeout(() => {
            commit(ADD_GOOD_REDUCE, goodinfo)
        },500)
    }
}

function addHandler(goodinfo,callback){
    setTimeout( () => {
        callback()
    },500)
}