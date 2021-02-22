// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type: 'list',
        message: 'What license do you have?',
        name: 'license',
        choices: ["MIT",
            "BSD",
            "Apache",
            "No License"]
    },
    {
        type: 'input',
        message: 'Please enter the description for your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter the installation instructions for your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please enter the usage information for your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please enter the contribution guidelines for your project?',
        name: 'guidelines',
    },
    {
        type: 'input',
        message: 'Please enter the test instructions for your project?',
        name: 'test',
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("ReadeMe file has been created")
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const data = generateMarkdown(answers);
        console.log(answers);
        writeToFile("README.md", data);
    })
};

// Function call to initialize app
init();

