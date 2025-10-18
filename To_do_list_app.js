const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// This is where tasks are kept
let todos = [];

// When the form is submitted, add a new task
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const text = input.value.trim();
  if (text.length > 0) {
    todos.push(text);
    input.value = "";
    render();
  }
});

// When a task is clicked, remove it
list.addEventListener('click', function(event) 
{
  if (event.target.tagName === 'LI') {
    const index = Array.from(list.children).indexOf(event.target);
    todos.splice(index, 1);
    render();
  }
});

// Show the tasks
function render() 
{
  list.innerHTML = '';
  todos.forEach(function(todo) {
    const li = document.createElement('li');
    li.textContent = todo;
    list.appendChild(li);
  });
}