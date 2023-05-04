// sum of all Odd numbers in array (interconnected with previous function)

function OddSum(array2) {
    let Oddsum = [];
    for (let i = 0; i < array2.length; i++) {

        const element = array2[i];
        if (element % 2 !== 0) {
          Oddsum.push(element)
        
        }
    }
    return Oddsum
}
var numbers = [10, 12, 5, 7, 13, 19, 50]

const result = OddSum(numbers) ;


var result2 = allSum(result)
console.log(result2)

/* ans :-
5
12
25
44
*/ 
// ans :- 44


