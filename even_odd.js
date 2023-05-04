// even odd

// we return true and false that's why we can't return check

function evenOddCheck(numbers) {
    const check = numbers % 2;
    if(check == 0){
        return true
    } 
    else{
        return false
    }
   
}
var even = evenOddCheck(12)
console.log(even)
//  ans :- true

var odd = evenOddCheck(11)
console.log(odd)
//  ans :- false

