let input = document.getElementById('inputTodo');
let buttonAdd = document.getElementById('btnAdd');
let todoList = document.getElementById('todoList');

//presets buttons
let presetsContainer = document.getElementById('presets');
let buttons = presetsContainer.querySelectorAll('button');
buttons.forEach(butt => {
    butt.addEventListener('click', () => {
        let span = document.createElement('span');
        let btn = document.createElement('button');
        let lb = document.createElement('br');
        span.textContent = butt.textContent;
        btn.textContent = 'X';
        span.setAttribute('id', 'todoSpan');
        btn.setAttribute('id', 'btnRemove');
        todoList.appendChild(span);
        todoList.appendChild(btn);
        todoList.appendChild(lb);

        btn.addEventListener('click', () => {
            todoList.removeChild(span);
            todoList.removeChild(btn);
            todoList.removeChild(lb);
        })
    })
})
//preset buttons ends here

buttonAdd.addEventListener('click', () => {
    let lineBreak = document.createElement('br');
    let spanTodo = document.createElement('span');
    let btnRemove = document.createElement('button');
    spanTodo.setAttribute('id', 'todoSpan');
    btnRemove.setAttribute('id', 'btnRemove');
    btnRemove.textContent = 'X';

    spanTodo.textContent = input.value;
    if (input.value === '') {
        alert('Add a viable task');
    } else {
        todoList.appendChild(spanTodo);
        todoList.appendChild(btnRemove);
        todoList.appendChild(lineBreak);
        input.value = '';
    }

    btnRemove.addEventListener('click', () => {
        todoList.removeChild(spanTodo);
        todoList.removeChild(btnRemove);
        todoList.removeChild(lineBreak);
    })

})



