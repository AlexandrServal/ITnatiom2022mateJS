function canBuyBeer(age) {
    if (age >= 18) {
      return 'You can buy beer'
    }
    return 'You can not buy beer'
  }

  function getTipsRating(amount) {
    // write your code here
    if (amount === 0) {
      return 'terrible';
    }
  
    if (amount <= 10) {
      return 'poor';
    }
  
    if (amount <= 20) {
      return 'good'
    }
  
    if (amount <= 50) {
      return 'great'
    }
  
    if (amount > 50) {
      return 'excellent'
    }
  }

  function calculateTaxes(income) {
    // write your code here
    if (income <= 1000) {
      let a = income  * 0.02;
      return a
    }
  
    if (income <= 10000) {
      let a = income  * 0.03;
      return a
    }
  
    if (income > 10000) {
      let a = income  * 0.05;
      return a
    }
  }  