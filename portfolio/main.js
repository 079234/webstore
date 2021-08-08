/*var num1 = prompt("enter some value");

console.log(parseInt(num1) + 9);*/
/*weight = parseFloat(prompt("whats ur fcuking weight niggah"));
if (weight > 50) {
    console.log("be serious hahaha");
} else {
    console.log("avoid uncesseray fing on the streets and mentain");
}*/
/*var subjects = new Array("maths", "physics", "chemistry");
marks = new Array();
for (var i = 0; i < subjects.length; i++) {
    num = prompt("enter your marks in:" + subjects[i] + "subjects");
    marks[i] = parseInt(num);

}
msg = "";
for (var i = 0; i < subjects.length; + i++)
    msg += subjects[i] + "marks:=" + marks[i] + "/n";
alert(msg);*/
/*
const x = 10;
const y = 58;
if (x == 10) {
    console.log("x is 10");

} else if (x > 10) {
    console.log('x is greater than 10');
} else { console.log('x is less than 10')
};
const x = 10;
const color = x>10?"red":"blue";
console.log(color);

const x = 11;
const color = x > 10 ? "red" : "blue";

switch (color) {
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log('color is NOT red or blue');

}
*
function addNums(num1, num2) {
    console.log(num1 + num2);

}
addNums(5, 4);
*/
//object orientated programming

//constructor Function
function person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return '${this.firstName}${this.lastName}';
    }
}
const person1 = new person("john", "doe", "4-3-1980");
const person2 = new person("ocs", "cliff", "4-3-1990");
console.log(person1);