let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let isOdd;
let count = 0;

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 !== 0){
        count += 1;
    }
}

if(count === 0){
    console.log('No number is odd.')
}else{
    console.log('Total of odd numbers = ', count);
}