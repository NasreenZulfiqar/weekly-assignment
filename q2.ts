function calculate_cube_volume(length: number,widht: number): number {
    const area: number = length * widht;
    return area;
}

//get user input for the volume of cube
var lenght: number = parseFloat(("4"));
var widht: number = parseFloat(("4 "));

//calculate the area using the function
var area: number = calculate_cube_volume(lenght, widht);

//display the result
console.log(`the volume of cube with lenght ${lenght} and width ${widht} is: ${area}`);