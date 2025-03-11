function brootforce(prices) {
   let profit = 0;

   for (let i = 0; i < prices.length; i++) {
     let buyAt = prices[i];

     for (let j = i + 1; j < prices.length; j++) {
       profit = Math.max(profit, prices[j] - buyAt);
     }
   }

   return profit;
 }

 function twoPointer(prices) {
   let profit = 0,
     l = 0,
     r = 1;

   while (r < prices.length) {
     if (prices[l] < prices[r]) {
       profit = Math.max(profit, prices[r] - prices[l]);
     } else {
       l = r;
     }
     r++;
   }
   return profit;
 }

 function dynamicPrograming(prices) {
   let profit = 0;
   let buy = prices[0];

   for (let sell of prices) {
     profit = Math.max(profit, sell - buy);
     buy = Math.min(buy, sell);
   }
   return profit;
 }

 function maxProfit(prices) {
   console.log("brootforce", prices, brootforce(prices));
   console.log("twoPointer", prices, twoPointer(prices));
   console.log("dynamicPrograming", prices, dynamicPrograming(prices));
 }

 console.profile("d");
 maxProfit([10, 1, 5, 6, 7, 1]);
 maxProfit([10, 8, 7, 5, 2]);
 console.profileEnd("d");
