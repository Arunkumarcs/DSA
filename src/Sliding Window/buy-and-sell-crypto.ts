export const buyAndSellCrypto = (prices: number[]) => {
  let maxProfit = 0;
  let buyAt = prices[0];

  for (let index = 1; index < prices.length; index++) {
    let sellAt = prices[index];
    maxProfit = Math.max(maxProfit, sellAt - buyAt);
    buyAt = Math.min(buyAt, sellAt);
  }

  return {
    profit: maxProfit,
    buyAt,
    sellAt: maxProfit + buyAt,
  };
};
