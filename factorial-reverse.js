

function factorial (number){
    let sum = 1;
    for(let i=7; i>=number ;i--){
        sum = sum * i;
        console.log(i, sum)
    }

    return sum;
}

const sum  = factorial(1)
console.log(sum)