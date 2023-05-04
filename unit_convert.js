// unit convert

function inchToFeet(inches){
    var totalFeet = inches / 12;
    return totalFeet
}

const dadarFeet = inchToFeet(144);
console.log(dadarFeet)
// ans :- 12
const dadiFeet = inchToFeet(60);
console.log(dadiFeet)
// ans :- 5


// Mile to kilometers

function mileToKilometers(miles) {
   var totalKilometers = 1.60934 * miles;

   return totalKilometers;
}

const bazar = mileToKilometers(3);
console.log(bazar)
//  ans :- 4.82802

const school = mileToKilometers(10);
console.log(school)
//  ans :- 16.0934

const collage = mileToKilometers(5);
console.log(collage)
//  ans :- 8.0467
