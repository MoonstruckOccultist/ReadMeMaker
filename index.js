// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMark = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        // title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is your project titled?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Give a short introductory description to how your project functions?',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Give a detailed description on how to install and run your project?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Describe the purpose of your project and go over example use cases?',
            },
            // {
            //     type: 'input',
            //     name: 'screenshot',
            //     message: 'if you have any example screenshots, put them in the Output folder and input the name of the file and type of file like the following: screenshotName.jpg',
            // },
            // couldn't get screenshots to fing work
            {
                type: 'input',
                name: 'contributers',
                message: 'enter the github usernames of any contibuters separated by a comma and no spaces',
            },
            {
                type: 'input',
                name: 'Qs',
                message: "If you have a place you'd like to have questions submitted input link here otherwise leave blank",
            },
        ])
        .then((data) => {
            
            console.log(data);
            console.log(data.contributers);
            console.log(data.contributers.split(','));
            console.log(genMark.generateMarkdown(data))
            fs.writeFile(`./Output/${data.title}ReadMe.md`, genMark.generateMarkdown(data), (err) => 
                err ? console.log(err) : console.log('Hey it actually worked!')
            );
        })
}

// Function call to initialize app
init();


// {
//     type: '',
//     name: '',
//     message: '?',
// },
