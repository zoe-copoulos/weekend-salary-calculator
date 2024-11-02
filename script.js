//onReady function makes sure js is loaded before running functions
function onReady(){
    console.log('Javascript is working!');
}


//CREATE A newEmployee variable
let newEmployee = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    employeeID: Number(document.getElementById("idNumber").value),
    title: document.getElementById("employeeTitle").value,
    annualSalary: Number(document.getElementById("annualSalary").value)
}

// use form input in an array to create newEmployee

const arrayOfEmployees = []


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


