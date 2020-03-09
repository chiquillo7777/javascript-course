/*function SmithPerson (firstName, yearOfBirth, lastName, nationality){

    lastName === undefined ? lastName = 'smith': lastName = lastName;
    nationality === undefined ? nationality = 'american': nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
*/



var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

//ES6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }

    static greeting(){
        console.log('Hey there!!');
    }
}

const john6 = new Person6('John', 1990, 'Teacher');

Person6.greeting();