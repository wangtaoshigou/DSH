export default {
    //接收到的state也是本模块的state
    total (state) {//计算总数和总价钱
       let total = { money: 0, num: 0 }
       state.car.forEach(good => {
        total.money += good.price * good.num
        total.num += good.num
       });
       return total
    }
}