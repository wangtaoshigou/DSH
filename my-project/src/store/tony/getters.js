export default{
    total (state) {
        let total = { money: 0, num: 0 }
        state.car.forEach(good => {
            total.money += good.price*good.num
            total.num += good.num
        })
        return total
    }
}