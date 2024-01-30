import inquirer from "inquirer";
import chalk from "chalk";

const mySentance = await inquirer.prompt([
    {
        type: 'input',
        name:'sentance',
        message: chalk.bgBlue(`Please enter a sentence: \n`)
    }
])

const  words=mySentance.sentance.split(" ")
let countWords=words.length;
 console.log( chalk.yellow(`Total Words in  Sentance = ${countWords}`));
