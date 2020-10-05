const fs = require('fs');
//const writeToFile = require('./utils/generateMarkdown.js');
//const generatePage = require('./src/page-template');

const inquirer = require('inquirer');
// array of questions for user
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username? (Required)',
        validate: usernameInput => {
          if (usernameInput) {
            return true;
          } else {
            console.log('Please enter your Github username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your e-mail address!');
            return false;
          }
        }
      },
        {
          type: 'input',
          name: 'title',
          message: "What is your project's name (Required)",
          validate: projectInput => {
            if (projectInput) {
              return true;
            } else {
              console.log("Please enter your project's name!");
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Please write a short description of your project:',
        },
        {
          type: 'checkbox',
          name: 'license',
          message: 'What kind of license should your project have?',
          choices: ['MIT', 'APACHE', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
          type: 'input',
          name: 'installation',
          message: 'What command should be run to install dependencies?',
          default: "npm i"
        },
        {
          type: 'input',
          name: 'tests',
          message: 'What command should be run to perform tests?',
          default: "npm test",
        },
        {
          type: 'input',
          name: 'usage',
          message: 'What does the user need to know about running the repo?',
        },
        {
          type: 'input',
          name: 'contributing',
          message: 'What does the user need to know about contributing to the repo?',
        }
  ])
};

// function to write README file
// const writeToFile = ('./dist/README.md', data) => {
//     return new Promise((resolve, reject) => {
//       fs.writeFile('fileName', fileContent, err => {
//         // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
//         if (err) {
//           reject(err);
//           // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
//           return;
//         }
  
//         // if everything went well, resolve the Promise and send the successful data to the `.then()` method
//         resolve({
//           ok: true,
//           message: 'File created!'
//         });
//       });
//     });
// };
// };

//function writeToFile(fileName, data) {

//}

// function to initialize program
questions()
  .then(answers => console.log(answers));
 // .then(pageHTML => {
  //  return writeToFile(pageHTML);
  //});