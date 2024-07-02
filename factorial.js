
// let sum = 0;
// for ( let i = 0; i<=7; i++){
    // sum = sum + i;
    // console.log(i, sum)
// }

function sumOfNumbers(number){
    let sum = 1;
    for ( let i = 1; i<=number; i++){
       sum = sum * i;
       console.log(i, sum)
    }
    return sum;
}

const sum  = sumOfNumbers(7)
console.log(sum)
