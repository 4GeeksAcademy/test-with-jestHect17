const sum = (a, b) => {
    return a + b;
};

console.log(sum(7, 3));


const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
};

const fromEuroYen = function(valueInEuro) {
    let valueInYen = valueInEuro * 156.5; 
    return valueInYen;
};

const fromEuroToGBP = function(valueInEuro) {
    let valueInGBP = valueInEuro * 0.87;
    return valueInGBP;
};

module.exports = { sum, fromEuroToDollar, fromEuroYen, fromEuroToGBP };