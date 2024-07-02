
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

function getOddSumOfArray(numbers){
    const oddNumbers = [];
    for( let i = 0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !==0){
            console.log(index);
            oddNumbers.push(element);
        }

    }
    return oddNumbers;
}


const mynumbers = [243, 34, 43, 95, 84, 30, 39];
const oddNumbers = getOddSumOfArray(mynumbers);
console.log(oddNumbers)
