const toMoney = (num) => {
    num = num.toFixed(2) // float num to string
    num = parseFloat(num) // string to float
    num = num.toLocaleString(num) //to string Format date/money
    return num
}

export {
    toMoney
}