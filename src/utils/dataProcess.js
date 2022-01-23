const toMoney = (num) => {
  const newNum = num.toLocaleString(parseFloat(num.toFixed(2))) // to string Format date/money
  return newNum
}

export {
  toMoney
}
