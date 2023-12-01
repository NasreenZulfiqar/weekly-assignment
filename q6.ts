function calculateExpression() {
    //((10 + 5).*.3.-2) / (4 % 3) -7
    var result = ((10 + 5) * 3 -2) / (4 % 3) -7;
    return result;
}

//calculate and print the result
var expressionResult = calculateExpression();
console.log("Result to the expression is:",expressionResult);