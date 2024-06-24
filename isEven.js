
function isEven (number){   
    const reminder = number % 2;
   
    if(reminder === 0){
        // console.log('number is even')
        return true;
    }
    else{
        // console.log('number is odd')
        return false;
    }
}

// isEven(45)
const myNumber = isEven(303)
console.log(myNumber)