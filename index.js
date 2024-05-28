#! /usr/bin/env node
// Import the packages
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
// Making a neontitle for program
async function start() {
    let neonTitle = chalkanimation.rainbow("\n *Let`s Start the quiz* \n");
    await sleep();
    neonTitle.stop();
}
// calling the function
await start();
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "What is the largest planet in our solar system?",
        choices: [
            "Earth",
            "Mars",
            "Jupiter",
            "Saturn"
        ]
    },
    {
        name: "question_2",
        type: "list",
        message: "Who is known as the father of computer science?",
        choices: [
            "Alan Turing",
            "Albert Einstein",
            "Isaac Newton",
            "Charles Babbage"
        ]
    },
    {
        name: "question_3",
        type: "list",
        message: "Which element has the chemical symbol 'O'?",
        choices: [
            "Gold",
            "Oxygen",
            "Osmium",
            "Oganesson"
        ]
    },
    {
        name: "question_4",
        type: "list",
        message: "What is the hardest natural substance on Earth?",
        choices: [
            "Gold",
            "Iron",
            "Diamond",
            "Quartz"
        ]
    },
    {
        name: "question_5",
        type: "list",
        message: "In which year did the Titanic sink?",
        choices: [
            "1905",
            "1912",
            "1918",
            "1923"
        ]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "Jupiter":
        console.log(chalk.cyan("1. Correct answer!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("1. Incorrect answer"));
        break;
}
switch (quiz.question_2) {
    case "Alan Turing":
        console.log(chalk.cyan("1. Correct answer!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("1. Incorrect answer"));
        break;
}
switch (quiz.question_3) {
    case "Oxygen":
        console.log(chalk.cyan("1. Correct answer!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("1. Incorrect answer"));
        break;
}
switch (quiz.question_4) {
    case "Diamond":
        console.log(chalk.cyan("1. Correct answer!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("1. Incorrect answer"));
        break;
}
switch (quiz.question_5) {
    case "1912":
        console.log(chalk.cyan("1. Correct answer!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("1. Incorrect answer"));
        break;
}
console.log(`Your score is ${score}`);
