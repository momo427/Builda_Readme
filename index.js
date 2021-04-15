// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./generatemarkdown');
// const Choices = require('inquirer/lib/objects/choices');
// const process = require('process');

const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input

const promptUser = () => {
return inquirer.prompt([
    {type: 'input',
    message: 'What is the title of your project?',
    name:'title'},
    
    {type: 'input',
    message: 'Give a brief description of your project',
    name: 'description'},

    {type: 'input',
    message: 'Table of Contents',
    name:'contents'},
    
    {type: 'input',
    message: 'How do you install?',
    name: 'Install'},
     
    {type: 'input',
    message: 'How do you use?',
    name: 'usage'},
     
    {type: 'input',
    message: 'Who contributed?',
    name: 'credits'},
     
    {type: 'input',
    message: 'How to test?',
    name: 'Test'},
     
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
};


// // TODO: Create a function to write README file
// function writeToFile(fileName, answers) {}


// // TODO: Create a function to initialize app
function init () {
    promptUser()
      .then((answers) => writeFileAsync('Generated-README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to README'))
      .catch((err) => console.error(err));
  };
  

// Function call to initialize app
init();

