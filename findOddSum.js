
// function getSumOfArray(numbers){
// 
    // let sum = 0;
    // for(let i=0; i< numbers.length; i++){
        // const index = i;
        // const element = numbers[index];
        // sum = sum + element;
        // console.log(index, element, sum);
    // }
    // return sum;
// }
// 
// const myNumbers = [12, 56, 37, 12, 55, 23]
// getSumOfArray(myNumbers)

function getSumOfArray(numbers){

    let sum = 0;
    for( i = 0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(sum);
    }
    return sum;
}


const mynumbers = [243, 34, 43, 95, 84, 30, 39];
getSumOfArray(mynumbers);