function check_Voting_Eligibality(age: number): string {
    if (age >=20) {
        return "You are eligible to vote";
    } else {
    return "Sorry, you are not eligible to vote yet.";
    }
}

//Example usage
var person_Age: number = 20;

//you can replace this with  the actual age input
var eligibility_Message: string = check_Voting_Eligibality(person_Age);
console.log(eligibility_Message);