// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, email, id, officeNumber){
        // pull in Empl class again
        super(name, email, id);
        // add github 
        this.officeNumber = officeNumber;
    };
    getofficeNumber(){
         return this.officeNumber       
    };
    getRole(){
        return "Manager"
    };
};