let productCost;
let salesPrice;
let salesQuant = 1000;
let taxes = 0.20;

if(salesPrice < 0 && productCost < 0){
    console.log('wrong input values.');
}else{
    let totalCost = (productCost + (productCost * taxes));
    let profitTotal = (salesPrice - totalCost) * salesQuant;
    console.log('Total Profit $' + profitTotal);
}