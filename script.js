//onReady function makes sure js is loaded before running functions
function onReady(){
    console.log('Javascript is working!');
}


// function to add new employee to the table

// EXAMPLE FROM GROUP ASSIGNMENT FOR REFERENCE, NOT TOTALLY RELEVANT
//function addEmployee(){
//     const emojiHome = document.querySelector("#emojiHome")
//     console.log('emojiHome is: ', emojiHome)
//      emojiHome.innerHTML += `<span>🔥</span>`
//   }

function addEmployee(event){
    const emojiHome = document.querySelector("#emojiHome")
    console.log('emojiHome is: ', emojiHome)
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


