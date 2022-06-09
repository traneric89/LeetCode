var maxProfit = function (prices) {
  let profit = 0;
  let buyPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyPrice) buyPrice = prices[i];
    profit = Math.max(profit, prices[i] - buyPrice);
  }
  return profit;
};
