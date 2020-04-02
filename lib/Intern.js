// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, email, id, school){
        // pull in Empl class again
        super(name, email, id);
        // add school 
        this.school = school;
    };
    getSchool(){
         return this.school       
    };
    getRole(){
        return "Intern"
    };
};