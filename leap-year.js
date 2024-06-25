
// 4 diye vag korle leap year 

function leapYearCheck (year){
    const reminder = year%4

    if(reminder === 0){
        // console.log('this is a leap year')
        return true;
    }
    else{
        // console.log('this is not a leap year')
        return false;
    }
}

const input = leapYearCheck(1044)
console.log(input)

