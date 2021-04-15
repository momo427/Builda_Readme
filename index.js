// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const { title } = require('process');

// TODO: Create an array of questions for user input
inquirer
.prompt([
    {type: 'input',
    message: 'What is the title of your project?',
    name:'title'},
    
    {type: 'input',
    message: 'Give a brief description of your project',
    name: 'description'},

    {type: 'input',
    message: 'How to install?',
    name: 'installation'},

    {type: 'input',
    message: 'Table of Contents',
    name:'Table of contents'},
    
    {type: 'input',
    message: 'How do you install?',
    name: 'Installation'},
     
    {type: 'input',
    message: 'How do you use?',
    name: 'Usage'},
     
    {type: 'input',
    message: 'Who contributed?',
    name: 'Contributors'},
     
    {type: 'input',
    message: 'How to test?',
    name: 'Test Instructions'},
     
    {type: 'input',
    message: 'Whats you Github username?',
    name: 'Github username'},
     
    {type: 'input',
    message: 'What is your email?',
    name: 'Email'},
     
    {type: 'input',
    message: 'How can someone ask you questions?',
    name: 'Questions'},

    {type: 'checkbox',
    message: 'Choose a license',
    name: 'license',
    choices: ['MIT','GPL v3','AGPL']}

])
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();