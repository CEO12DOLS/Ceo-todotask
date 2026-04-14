//DUE DATE FUNCTION
const due = new Date("April 17 2026 18:00");

function timeDue() {
  const present = new Date();
  const remaining = due - present;


  return Math.max(0, Math.floor(remaining / (1000 * 60 * 60 *24)))

}

function displayTime() {
  const left = document.getElementById('time-left');
  const duetime = timeDue()
   left.textContent = "Ends in " + duetime + " days"

}
displayTime();
setInterval(displayTime, 60000)


//CHECKBOX FUNCTION
const checkbox = document.getElementById('check');
const pend = document.getElementById('pend');
const task = document.querySelector('.task');

checkbox.addEventListener ('click', () => {
  task.classList.toggle('active')
  if (task.classList.contains('active')) {
    pend.textContent = 'Done';
  } else {
    pend.textContent = 'Pending';
  }
})



//EDIT AND DELETE BTN

const edit = document.querySelector('.edit-btn');
const del = document.querySelector('.del-btn');


edit.addEventListener ('click', () => {
    alert('you edited the task');
})
del.addEventListener ('click', () => {
    alert('you deleted the task');
})
