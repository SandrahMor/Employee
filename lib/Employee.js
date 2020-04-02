// TODO: Write code to define and export the Employee class

// TODO: Employee class
class Employee {
    constructor(name, email, id){
        this.name = name;
        this.email = email;
        this.id = id;
    }
    
    // define methods 
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
}

// var sara = new Employee( "Sara", "email", "2345")
// console.log(sara.getName())
// module to export class
module.exports = Employee

