const inquirer = require('inquirer');

const prompt = () => {
    return inquirer.prompt
}


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
            name:'install-instructions',
            message:"Enter your project's install instructions:"
        },
        {
            type:'input',
            name:'usage-information',
            message:"Enter your project's usage information:"
        },
        {
            type:'input',
            name:'contribution',
            message:"Enter your project's contribution guidelines:"
        },
        {
            type:'input',
            name:'test-instructions',
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
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    promptUser();
}

// function call to initialize program
init();
