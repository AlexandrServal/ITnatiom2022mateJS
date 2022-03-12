let summa = 0;
for (let i = 3; i <=7; i++) {
    console.log(i);
    summa += i;
}
console.log(summa);

function printNumbersBackwards(N) {
    // write code here
    for (let i = N; i >= 1; i--) {
      console.log(i)
    }
  }

function getDrinks(numberOfGuests) {
    // write code here
    let summa = 0;
    for (let i = 1; i <= numberOfGuests; i++) {
      summa += i;
    }
  return summa
}


function getDrinksWithStep(numberOfGuests, step) {
    // write code here
    let summa = 0;
      for (let i = 1; i <= numberOfGuests; i = i + step) {
        summa += i;
      }
    return summa
  }
  


  function calculateProfit(amount, percent, period) {
    // write code here
    let a = 0;
    for (let i = 1; i <= period; i++) {
      a += (amount / 100 * percent);
      amount = amount + (amount / 100 * percent); 
    }
    return a
  }
  