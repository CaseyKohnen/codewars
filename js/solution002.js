function squareSum(numbers){
    return numbers.reduce(function(sum, x) {
       return (x * x) + sum;
     }, 0)
   }