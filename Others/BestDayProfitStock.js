const stocks = (arr) => {
  let lowestBuy = arr[0];

  let profit = 0;
  let buyDay;
  let sellDay;

  for (let i = 1; i < arr.length; i++) {
    lowestBuy = Math.min(lowestBuy, arr[i - 1]);
    if (arr[i] - lowestBuy > profit) {
      profit = arr[i] - lowestBuy;
      buyDay = arr.indexOf(lowestBuy);
      sellDay = i;
    }
  }
  return [buyDay, sellDay];
};

console.log(stocks([5, 10, 4, 10, 11, 3]));
