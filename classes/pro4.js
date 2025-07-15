/**1. Using the Person class from Practice exercise 7.1, add a method called 
fullname, which returns the concatenated value of firstname and lastname 
when invoked.
 2. Create values for person1 and person2 using two friends' first and last names.
 3. Using the fullname method within the class, return the full name of one or 
both people */

class person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;

    }
     fullname(){
        return `hlw guys i am ${this.firstname} ${this.lastname}`
     }
}
const person1=new person("ashutosh","shandilya");
console.log(person1.fullname())