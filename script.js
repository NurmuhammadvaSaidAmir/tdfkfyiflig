let name = prompt("Enter your name:");
let birthYear = prompt("Enter your year of birth:");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

if (age >= 18) {
    alert(`Welcome ${name}, you are a man.`);
} else {
    alert(`Welcome ${name}, you are a boy.`);
}