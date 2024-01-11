// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        name: "title",
        message: "Please name your project",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the functionality of this project",
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions",
    },
    {
        type: "input",
        name: "usage",
        message: "List languages used for this project",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please input contribution guidelines",
    },
    {
        type: "input",
        name: "tests",
        message: "Please input test instructions",
    },
    {
        type: "list",
        name: "license",
        message: "Choose the appropriate license for your project",
        choices: ["MIT", "Apache", "ISC", "None"],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
    {return fs.writeFileSync(
    fileName,
    generateMarkdown(data)
    );}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile("README.md", answers)
    })
}

// Function call to initialize app
init();
