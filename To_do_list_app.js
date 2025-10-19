const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

let todos = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const text = input.value.trim();
  if (text.length > 0) 
    {
    todos.push(text);
    input.value = "";
    render();
  }
});

list.addEventListener('click', function(event) 
{
  if (event.target.tagName === 'LI') 
  {
    const index = Array.from(list.children).indexOf(event.target);
    todos.splice(index, 1);
    render();
  }
});

function render() 
{
  list.innerHTML = '';
  todos.forEach(function(todo) 
  {
    const li = document.createElement('li');
    li.textContent = todo;
    list.appendChild(li);
  });
}