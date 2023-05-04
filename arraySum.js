// sum of all numbers in array


// 
function allSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {

        const element = array[i];
        sum = sum + element;
        console.log(sum)
/* ans :-
10
22
27
34
47
66
116
*/ 

    }
    return sum
}
var numbers = [10, 12, 5, 7, 13, 19, 50]
var all = allSum(numbers)
console.log(all)
// ans :- 116



