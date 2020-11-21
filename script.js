var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");


var todos = JSON.parse(localStorage.getItem('todos')) || []

console.log(todos)




function renderTodos(){
    //clear existing todos
    todoList.innerHTML = ''
    //re-render todos
    
    
  for (var i = 0; i < todos.length; i++) {
        // creaye li element
    var li = document.createElement('li')
        // add todo text to li
        li.innerText = todos[i]
        // append li to todoLis
        li.setAttribute('data-index', i)
        //add data-index attribute
        var button = document.createElement('button')
        button.innerText = "Complete"
        li.appendChild(button)
        //create button
      todoList.appendChild(li)
    }
}

function addTodo(event){
event.preventDefault()

//get todoInput value
var newTodo = todoInput.value
//makes sure empty answers will not submit
  if (newTodo !== '') {

    //push text into todos
    todos.push(newTodo)
    todoInput.value = null
    localStorage.setItem('todos', JSON.stringify(todos))
    //call renderTodos()
    renderTodos()
  }
}

function removeTodo(event){
  var target = event.target
  if (target.matches('button')){
    //find index from LI
    var index = parseInt(target.parentNode.getAttribute('data-index'))
    //remove the todo from todos array
    todos.splice(index, 1)
    //re-render todos
    renderTodos()
    localStorage.setItem('todos', JSON.stringify(todos))

  }
}


todoForm.addEventListener('submit', addTodo)

todoList.addEventListener('click', removeTodo)


renderTodos()