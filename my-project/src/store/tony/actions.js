import {
    ADD_GOOD_IN_CAR,
    REDUCE_GOOD_IN_CAR,
    INIT_CAR
} from './const'

export default {
    initCar ({commit}) {
        setTimeout(() => {
            let car = JSON.parse(localStorage.car?localStorage.car:'[]')
            commit(INIT_CAR, car)
        },500) 
    },
    addGoodInCar ({commit}, goodinfo) {
        //发送ajax请求,将id发送给后端服务器，加入成功通知mutations更改state
        
            //后端操作
        addGoodInCar(goodinfo,() => {
            //添加成功，通知mutation去更新数据
            commit(ADD_GOOD_IN_CAR, goodinfo)
        })
    },
    reduceGoodInCar ({commit},goodinfo) {
        setTimeout(() => {
            commit(REDUCE_GOOD_IN_CAR, goodinfo)
        },500)
    }
}

function addGoodInCar(goodinfo, callback) {
    setTimeout(() => {
        callback()
    },500)
}