// factorial
// a factorial is a function that multiples a number by every numbers bellow it till 1.

function factorial(number) {
    let res = 1;
    for(var i = 1; i <= number; i++){
     res = res * i;
     console.log(i,res)
/* ans :- 
1 1
2 2
3 6
4 24
5 120
6 720
7 5040
8 40320
9 362880
10 3628800
*/ 

    }
    return res
}
let num = 10;
let totalFactorial = factorial(num);
console.log('factorial of',num,'is',totalFactorial)
//  ans :- factorial of 10 is 3628800


function factorialReverse(number2) {
    let res2 = 1;
    for(var i = number2; i >= 1; i--){
     res2 = res2 * i;
     console.log(i,res2)
/* ans :- 
8 8
7 56
6 336
5 1680
4 6720
3 20160
2 40320
1 40320
*/ 

    }
    return res2
}
let num2 = 6;
let reverseFactorial = factorialReverse(num2);
console.log('reverse factorial of',num2,'is',reverseFactorial)
//  ans :- reverse factorial of 8 is 720
