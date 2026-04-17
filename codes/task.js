//DUE DATE FUNCTION
let due = new Date("2026-04-19");

function timeDue() {
  const present = new Date();
  const remaining = due - present;

  return Math.max(0, Math.floor(remaining / (1000 * 60 * 60 * 24)));
}

let left = document.getElementById("time-left");
let duetime = timeDue();

function displayTime(){ 
  left.textContent = "Ends in " + duetime + " days";
}
displayTime();


//CHECKBOX FUNCTION
const checkbox = document.getElementById("check");
const pend = document.getElementById("pend");
const task = document.querySelector(".task");

checkbox.addEventListener("click", () => {
  task.classList.toggle("active");
  if (task.classList.contains("active")) {
    pend.textContent = "Done";
    left.textContent = "completed"
    left.style.color = "#fff"
  } else {
    pend.textContent = "Pending";
    left.textContent = "Ends in " + duetime + " days";
  }
});

//EDIT AND DELETE BTN
const card = document.querySelector('.card')
const edit = document.querySelector(".edit-btn");
const del = document.querySelector(".del-btn");
const editForm = document.querySelector(".edit-form");
const saveBtn = document.querySelector(".save-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const editInput = document.querySelector(".edit-input");
const editText = document.querySelector(".edit-text");
const title = document.querySelector(".title");
const piority = document.querySelector(".piority");
const select = document.querySelector(".select");
let editDate = document.querySelector(".edit-date");
const initialDate = document.querySelector(".initial-date");
const state = document.getElementById('state');

edit.addEventListener("click", () => {
  editForm.style.display = "block";
  card.style.display = "none";
});

del.addEventListener("click", () => {
  alert("This task was deleted");
});


function piorityfunc() {
  piority.textContent = select.value;

  switch (select.value) {
    case 'HIGH':
      piority.style.backgroundColor = "red"
      break;
    case 'MEDIUM':
      piority.style.backgroundColor = "rgba(135, 26, 236, 0.945)"
      break;
      case 'LOW':
        piority.style.backgroundColor = "green"
    default:
      break;
  }
}


function statusfunc() {
  pend.textContent = state.value;
  
  switch (state.value) {
  case 'Pending':
     task.classList.remove('active');
    checkbox.checked = false
    left.textContent = "Ends in " + duetime + " days";
    break;
  case 'Done':
   
     task.classList.toggle('active');
    checkbox.checked = true
    left.textContent = "completed"
    left.style.color = "#fff"
    break;
    case 'In Progress':
    task.classList.remove('active');
    checkbox.checked = false
    left.textContent = "Ends in " + duetime + " days";
    break;
  default:
    break;
  }
 
}
saveBtn.addEventListener("click", () => {
  if (editText.value === "" && editInput.value !== "") {
    title.textContent = editInput.value;
    editInput.value = title.textContent;
    editText.value = task.textContent;
    task.textContent = editText.value;
    editForm.style.display = "none";
    editInput.value = "";
    editText.value = "";
    card.style.display = "block";
   

  } else if (editText.value === "" && editInput.value === "") {
    editInput.value = title.textContent;
    editText.value = task.textContent;
    editForm.style.display = "none";
    editInput.value = "";
    editText.value = "";
    card.style.display = "block";

  } else {
    title.textContent = editInput.value;
    task.textContent = editText.value;
    editForm.style.display = "none";
    editInput.value = "";
    editText.value = "";
    card.style.display = "block";
  }
});


editDate.addEventListener('change', () => {
  initialDate.textContent = 'Due ' + editDate.value
 
  due = new Date(editDate.value)
 
  function timeDue() {
  const present = new Date();
  const remaining = due - present;

  return Math.max(0, Math.floor(remaining / (1000 * 60 * 60 * 24)));
}


let left = document.getElementById("time-left");
let duetime = timeDue();
function displayTime(){ 
  left.textContent = "Ends in " + duetime + " days";
  if (duetime <= 0) {
    left.textContent = "Overdue"
    left.style.color = "red"
  }
  else{
    left.style.color = "#fff"
  }
}
displayTime();

})



cancelBtn.addEventListener("click", () => {
  editForm.style.display = "none";
  card.style.display = "block"

});
