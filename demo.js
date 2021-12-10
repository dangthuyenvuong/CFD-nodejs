const product = () => {
    let price = 1000
    return (percent) => () => {
        price -= percent * price
        return price
    }
}

let discount = product()

const dis10 = discount(10 / 100)
const dis20 = discount(20 / 100)
console.log(dis10()) // - 10% = 900
console.log(dis20()) // -20% = 720