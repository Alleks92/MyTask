const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96 , 57];
const tips = [];
const totals = [];
const calculateTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15;

for(let i = 0; i < bills.length; i++) {
   tips.push(calculateTips(bills[i]));
   totals.push(bills[i] + tips[i]);
}

console.log(bills, tips , totals);


const calculateAverage = function(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
   }
   return sum / arr.length;
}

console.log(calculateAverage(totals));


   