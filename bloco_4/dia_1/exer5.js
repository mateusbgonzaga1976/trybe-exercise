let angleA;
let angleB;
let angleC;

let result = angleA + angleB + angleC;

let condition = (angleA > 0 && angleB > 0 && angleC > 0);

if(condition){
    if(result === 180){
        console.log(true);
    }else{
        console.log(false);
    }
}else{
    console.log('Invalid Angle');
}