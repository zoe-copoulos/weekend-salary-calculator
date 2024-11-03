//onReady function makes sure js is loaded before running functions
function onReady(){
    console.log('Javascript is working!');
}

//defauly monthly cost is 0 to start
let totalMonthlyCost = 0
// an employee's monthly cost (salary) will be assigned to
const monthlySalary = salaryInput / 12

// monthly cost will be updated with, just don't know where to put it
// totalMonthlyCost += monthlySalary

if (totalMonthlyCost > 20000) {

}

//CREATE A newEmployee variable
// let newEmployee = {
//     firstName: document.getElementById("firstName").value,
//     lastName: document.getElementById("lastName").value,
//     employeeID: Number(document.getElementById("idNumber").value),
//     title: document.getElementById("employeeTitle").value,
//     annualSalary: Number(document.getElementById("annualSalary").value)
// }

// Trying the using variables for eah form input route but keeping the above
//just in case 

let firstNameInput = document.getElementById("firstNameInput").value
let lastNameInput = document.getElementById("lastNameInput").value
let idInput = document.getElementById("idInput").value
let titleInput = document.getElementById("titleInput").value
let salaryInput = document.getElementById("salaryInput").value

// use form input in an array to create newEmployee
// still not over the idea of using an array in this way, but commenting out
//to try something new


// const arrayOfEmployees = []

// creating new list items in a table from form input 
// from friday group assignment

// const table = document.getElementById("affTable");

// // table.insertRow will push new values to the bottom of the table
// const row = table.insertRow(-1);
// // pushes value to the 0th position in table
// const cell1 = row.insertCell(0);
// // noticing that row.insertCell(0), and row.insertCell(1) works - why is this?
// const cell2 = row.insertCell(1);
// // 
// const cell3 = row.insertCell(2);

// // Add text input/author input to appropriate cells
// cell1.innerHTML += document.getElementById("textInput").value;
// cell2.innerHTML += document.getElementById("authorInput").value;


// creating new rows when form is submitted, based on above
const table = document.getElementById("salaryTable");
const newRow = table.insertRow();
const cell1 = newRow.insertCell(0);
const cell2 = newRow.insertCell(1);
const cell3 = newRow.insertCell(2);
const cell4 = newRow.insertCell(3);
const cell5 = newRow.insertCell(4);
const cell6 = newRow.insertCell(5);

// populate rows with info from the form and input variables
cell1.innerHTML += document.getElementById("firstNameInput").value;
cell2.innerHTML += document.getElementById("lastNameInput").value;
cell3.innerHTML += document.getElementById("idInput").value;
cell4.innerHTML += document.getElementById("titleInput").value;
cell5.innerHTML += document.getElementById("salaryInput").value;


// function to add new employee to the table

// EXAMPLE FROM GROUP ASSIGNMENT FOR REFERENCE, NOT TOTALLY RELEVANT
//function addEmployee(){
//     const emojiHome = document.querySelector("#emojiHome")
//     console.log('emojiHome is: ', emojiHome)
//      emojiHome.innerHTML += `<span>🔥</span>`
//   }

function addEmployee(event){
    const emojiHome = document.querySelector("#emojiHome")
    console.log('newEmployee is: ', newEmployee)
     emojiHome.innerHTML += `<span>🔥</span>`
  }


// function to clear form 

function submitEmployee(event){
event.preventDefault()
console.log("submitEmployee called with event:", event.target)
}

// function to update total cost

function totalCost(){

}

// function to see if over budget

function checkBudget(){

}

// function to remove an employee from table

function removeEmployee(){
    
}


