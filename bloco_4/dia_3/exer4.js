let n = 5;
let symbol = '*';
let inputLine = '';

let midMatrix = (n + 1)/2;
let controlLeft = midMatrix;
let controlRight = midMatrix;

for(let line = 0; line <= midMatrix; line += 1){
    for(let column = 0; column <= n; column += 1){
        if(column > controlLeft && column < controlRight){
            inputLine += symbol;
        }else{
            inputLine += ' ';
        }
    }
    console.log(inputLine);
    inputLine = '';
    controlRight += 1;
    controlLeft -= 1;
}