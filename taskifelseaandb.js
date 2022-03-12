// write code below this line
function getLargestExpressionResult(a, b) {
    let c = a + b;
    let d = a - b;
    let e = a * b;
    let f = a / b;
    if (c > d && c > e && c > f){
      return c
    }
  
    if (d > c && d > e && d > f){
      return d
    }
  
    if (e > c && e > d && e > f){
      return e
    }
  
    if (f > c && f > e && f > d){
      return f
    }
    if (e === f){
      return e
    }
  }