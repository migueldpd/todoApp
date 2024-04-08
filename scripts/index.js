let input = document.getElementById('inputTodo');
let buttonAdd = document.getElementById('btnAdd');
let todoList = document.getElementById('todoList');

buttonAdd.addEventListener('click', () => {
    let lineBreak = document.createElement('br');
    let spanTodo = document.createElement('span');

    spanTodo.textContent = input.value;
    if (input.value === '') {
        alert('Add a viable task');
    } else {
        todoList.appendChild(spanTodo);
        todoList.appendChild(lineBreak);
        input.value = '';
    }
})