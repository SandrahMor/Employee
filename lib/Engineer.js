// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// declare dependencies from employee
const Employee = require("./employee")

// Defining the engineering class
class Engineer extends Employee {
    constructor(name, email, id, github){
        // pull in Empl class again
        super(name, email, id);
        // add github 
        this.github = github;
    };
    getGithub(){
         return this.github       
    };
    getRole(){
        return "Engineer"
    };
};