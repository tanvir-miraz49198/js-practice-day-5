// leap year

function isLeapYear(year){
    var checkYear = year % 4 == 0;
   if(checkYear == true){
   console.log(year,'is  leap year')
   }
   else{
       console.log(year,"is not leap year")

   }
}
isLeapYear(2024); // ans :- 2024 is  leap year

isLeapYear(2027); // ans :- 2027 is not leap year


function isLeapYear2(year2){
   var checkYear = year2 % 4;
  if(checkYear == 0){
   return true;
  }
  else{
      return false;
  }
}

const takeYear = isLeapYear2(2032)
console.log(takeYear) // ans :- true

const giveYear = isLeapYear2(2030);
console.log(giveYear) // ans :- false


