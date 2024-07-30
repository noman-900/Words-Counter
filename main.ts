#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"; 


console.log(chalk.bold.bgCyan("\n \t\t Words-Counter-By-Noman"));
console.log("=".repeat(60));

// prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);

// tirmming the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");

// Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.green(words.length)}`));
console.log("=".repeat(60));



