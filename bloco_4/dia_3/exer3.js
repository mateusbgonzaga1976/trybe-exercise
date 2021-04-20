let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for(let line = 0; line < n; line += 1){
    for(let column = 0; column <= n; column += 1){
        if(column < inputPosition){
            inputLine += ' ';
        }else{
            inputLine += symbol;
        }
    }
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
}