const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
console.log("hi")

// Inquirer with prompts to enter new employees
    // needs to be modified to ask specific propmpts for each type of user
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Employee Name?"
          },
          {
            type: "input",
            name: "email",
            message: "Employee email?"
          },
          {
            type: "input",
            name: "id",
            message: "Employee ID?"
          },
          {
            type: "input",
            name: "phone",
            message: "What is your office phone number?"
          },
          {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username"
          },
          {
            type: "input",
            name: "school",
            message: "What school do you attend?"
          }  
    ]);
}

promptUser()
    .then(render)
// call the render function to add employees on the page