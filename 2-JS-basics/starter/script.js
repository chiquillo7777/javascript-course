/*function calculateAge(birthYear){
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1993);
console.log(ageJohn);

var x =  y -> {
    return y;
}
console.log(x);

var names = ['John', 'Mark', 'Jane'];

var years = new Array(1990, 1969, 1948);

console.log(names);

*/



var mark = {
    name : 'mark',
    mass : 60,
    height : 1.73,
    calculateBmi : function() {
        
        this.bmi = this.mass / (this.height * this.height);
               return this.bmi;
        }
};

mark.calculateBmi();

console.log(mark);