function checknumberstatus(number: number): string {
    if (number > 0) {
        return "positive";
    }else if (number < 0) {
        return "negative";
    } else {
        return "zero";
    }
}

// Example usage
const inputnumber: number = 8; // you can replace this with the actual number to check
const result: string = checknumberstatus(inputnumber);
console.log(`the number ${inputnumber} is ${result}.`);