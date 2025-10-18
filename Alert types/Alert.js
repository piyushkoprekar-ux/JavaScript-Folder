//Alert
alert("this is an alert message!");

//Promt 
let name = prompt("What is your name?");
alert("Hello" + name + "!");

let city = prompt("Enter your city:","Nagpur");
alert("You live in" + city);

//Confirm
let result = confirm("Do you want to continue?");
if (result) {
    alert("You clicked OK!");
} else {
    alert("You clicked Cancel!");
}