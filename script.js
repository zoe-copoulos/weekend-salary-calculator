//removed onReady

//defauly monthly cost is 0 to start
let totalMonthlyCost = 0


//function to submit an employee to the table
function submitEmployee(event){
    event.preventDefault()
    console.log("submitEmployee called with event:", event.target)

//right, I was missing getting actual information from the form into the table
// had these in a separate function
// They also had some parenthese typos
console.log("First name ", document.getElementById("firstName").value)
console.log("Last name ", document.getElementById("lastName").value)
console.log("ID # ", document.getElementById("idNumber").value)
console.log("Job title ", document.getElementById("employeeTitle").value)
console.log("Annual salary ", document.getElementById("annualSalary").value)


// creating new rows when form is submitted, based on friday's group project
const table = document.getElementById("employeeTable");
const newRow = table.insertRow();
const cell1 = newRow.insertCell(0);
const cell2 = newRow.insertCell(1);
const cell3 = newRow.insertCell(2);
const cell4 = newRow.insertCell(3);
const cell5 = newRow.insertCell(4);
const cell6 = newRow.insertCell(5);


// populate rows with info from the form and input variables
cell1.innerHTML += document.getElementById("firstName").value;
cell2.innerHTML += document.getElementById("lastName").value;
cell3.innerHTML += document.getElementById("idNumber").value;
cell4.innerHTML += document.getElementById("employeeTitle").value;
cell5.innerHTML += document.getElementById("annualSalary").value;

let firstNameInput = document.getElementById("firstNameInput").value
let lastNameInput = document.getElementById("lastNameInput").value
let idInput = document.getElementById("idInput").value
let titleInput = document.getElementById("titleInput").value
let salaryInput = document.getElementById("salaryInput").value
}

//Duh, I need to call the function.  wow.
console.log("salaryTable from Dom:", document.getElementById("employeeTable"))


// an employee's monthly cost (salary) will be assigned to
const monthlyCost = salaryInput / 12

// monthly cost will be updated with, just don't know where to put it
totalMonthlyCost += monthlyCost

//fixed some variables assigned incorrectly



// function to update total cost

function totalCost(){

}

// function to see if over budget

if (totalMonthlySalary > 20000) {
    footer.classList.add("over-budget");}
else {
    footer.classList.remove("over-budget");
}

// function checkBudget(totalMonthlyCost){
//     let footer = document.getElementById("foot")
//     if(monthlyCost > 20000 && !footer.classList.contains("over-budget")){
//         footer.classList.add("over-budget")
//     }
//     else if(monthlyCost <= 20000 && footer.classList.contains("over-budget")){
//         footer.classList.remove("over-budget")
//     }
// }


// improved this function with the help of Phind

function checkBudget(totalMonthlyCost) {
    const footer = document.getElementById("foot");
    
    if (!footer) {
        console.error("Footer element not found");
        return;
    }
    
    if (monthlyCost > 20000 && !footer.classList.contains("over-budget")) {
        footer.classList.add("over-budget");
    } else if (monthlyCost <= 20000 && footer.classList.contains("over-budget")) {
        footer.classList.remove("over-budget");
    }
}
// function to remove an employee from table

function removeEmployee(event){

}