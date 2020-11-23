const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'title',
            message:'What is your project title?'
        },
        {
            type:'input',
            name:'description',
            message:'Enter a description for your project:'
        },
        {
            type:'input',
            name:'install',
            message:"Enter your project's install instructions:"
        },
        {
            type:'input',
            name:'usage',
            message:"Enter your project's usage information:"
        },
        {
            type:'input',
            name:'contribution',
            message:"Enter your project's contribution guidelines:"
        },
        {
            type:'input',
            name:'test',
            message:"Enter your project's test instructions:"
        },
        {
            type:'input',
            name:'github',
            message:"What is your GitHub username?"
        },
        {
            type:'input',
            name:'email',
            message:"What is your email address?"
        }        
    ])
};

// function to write README file
function writeToFile(fileName, data) {
    var filePath='./files/'+ fileName+'.md';

    fs.writeFile(filePath, data, err => {
        if (err) throw err;
    });
};

// function to initialize program
function init() {
    promptUser()
        .then(readMeData => {
            return generateMarkdown(readMeData);
        })
        .then(markdown => {
            return writeToFile("README",markdown);
        })
}


// function call to initialize program
init();
