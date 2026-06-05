const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');
const todoList1 = document.getElementById('todoList1');
const todoList2 = document.getElementById('todoList2');

let todos1 = [];
let todos2 = [];

// Добавление
function addTodo() {
    const text1 = inp1.value.trim();
    const text2 = inp2.value.trim();

    if (text1) {
        todos1.push({
            text: text1,
            date: Date.now()
        });
        inp1.value = '';
    }

    if (text2) {
        todos2.push({
            text: text2,
            date: Date.now()
        });
        inp2.value = '';
    }

    renderTodos();
}

// Рендер
function renderTodos() {
    todoList1.innerHTML = '';
    todoList2.innerHTML = '';

    // список 1
    todos1.forEach(todo => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card p-2 mb-2">
            <b>${todo.text}</b>
        </div>
        `;
        todoList1.appendChild(div);
    });

    // список 2
    todos2.forEach(todo => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card p-2 mb-2">
            <b>${todo.text}</b>
        </div>
        `;
        todoList2.appendChild(div);
    });
}

// Кнопка
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addTodo);

// старт
renderTodos();


let rotateX = 0, rotateY = 0;


let direction = 1;

let directionY = 1;
let directionX = 1;

$("#rotateY").click(function () {

    rotateY += 360 * directionY;
    directionY *= -1;


    if (Math.random() > 0.5) {
        rotateX += 360 * directionX;
        directionX *= -1;
    }

    $(".cube").css("transform", `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
});