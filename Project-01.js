/*import inquirer from "inquirer";

type anstype = {
    guessnumber : number;
}
const systemGeneratedNo = Math.floor(Math.random() * 10);

const answer: anstype = await inquirer.prompt([
    {
        type: "number",
        name: "guessnumber",
        message: "write your guess between 01 to 10: "
    }
])

const{guessnumber} = answer;

if(guessnumber === systemGeneratedNo){
    console.log(guessnumber, "User Guess", systemGeneratedNo, "Sys");
    console.log("Great! Your answer is correct \n You Win!");
} else{
    console.log("Oops! Please try again");
}*/
import inquirer from "inquirer";
async function playGame() {
    const turnsAnswer = await inquirer.prompt([
        {
            type: "number",
            name: "turns",
            message: "How many turns do you want to take?",
            validate: (input) => {
                return input > 0 ? true : "Please enter a valid number of turns.";
            },
        },
    ]);
    const numberOfTurns = turnsAnswer.turns;
    let lastGeneratedNo = 0; // Variable to keep track of the last generated number
    for (let i = 0; i < numberOfTurns; i++) {
        const systemGeneratedNo = Math.floor(Math.random() * 10) + 1; // Generates a number between 1 and 10
        lastGeneratedNo = systemGeneratedNo; // Update last generated number
        const answer = await inquirer.prompt([
            {
                type: "number",
                name: "guessNumber",
                message: `Turn ${i + 1}: Write your guess between 1 to 10`,
                validate: (input) => {
                    return input >= 1 && input <= 10 ? true : "Please enter a number between 1 and 10: ";
                },
            },
        ]);
        const { guessNumber } = answer;
        if (guessNumber === systemGeneratedNo) {
            console.log(`User Guess: ${guessNumber}, System Generated: ${systemGeneratedNo}`);
            console.log("Great! Your answer is correct. You Win!");
            return; // Exit the function since the user has won
        }
        else {
            console.log(`User Guess: ${guessNumber}, System Generated: ${systemGeneratedNo}`);
            console.log("Oops! Please try again");
        }
    }
    console.log("Sorry, you've reached the maximum number of turns. The correct number was", lastGeneratedNo);
}
playGame();
