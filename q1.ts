function calculate_rectangle_area(length: number,widht: number): number {
    const area: number = length * widht;
    return area;
}

//get user input for the lenght and width of the rectangle
var lenght: number = parseFloat(("23"));
var widht: number = parseFloat(("16"));

//calculate the area using the function
var area: number = calculate_rectangle_area(lenght, widht);

//display the result
console.log(`The area of the rectangle with lenght ${lenght} and width ${widht} is: ${area}`);