const buttonAdd = document.getElementById("add");
let ulListTasks = document.querySelector(".list-tasks");
let task;

buttonAdd.addEventListener("click",getTask)

function getTask(){
    task = {
        name:document.getElementById("input-tasks").value,
        id: generateId()
    }  
    addCodeLi(task);
    document.getElementById("input-tasks").value=""
}

function addCodeLi(task){
        let liTask = createCodeLi(task);
        ulListTasks.appendChild(liTask);
}

function createCodeLi(task){
    let li = document.createElement("li");
    li.classList.add("main-task");
    li.id = task.id;

    let span = document.createElement("span");
    span.innerHTML = task.name;
    span.id= `span${task.id}`;
    span.classList.add("task-text");

    let div = document.createElement("div");
    div.classList.add("wrapper-buttons");

    let btnEdit = document.createElement("button");
    btnEdit.classList.add("button-action");
    btnEdit.innerHTML = '<i class="fa fa-pencil"></i>';
    btnEdit.setAttribute('onclick', `Edit(${task.id})`);

    let btnDel = document.createElement("button");
    btnDel.classList.add("button-action");
    btnDel.innerHTML = '<i class="fa fa-trash"></i>';
    btnDel.setAttribute('onclick', `Del(${task.id})`);

    div.appendChild(btnEdit);
    div.appendChild(btnDel);

    li.appendChild(span);
    li.appendChild(div);

    return li;
}

function Edit(id){
    let newTaskName = prompt("Digite a alteração:");
    let newTask = {
        name: newTaskName,
        id:id
    }
    let currentLi = document.getElementById(id);
    if(currentLi){
        let newLi = createCodeLi(newTask);
        ulListTasks.replaceChild(newLi,currentLi);
    }
}

function Del(id){
    let confirm = window.confirm("Tem certeza que deseja excluir essa tarefa?");
    if(confirm){
        let li = document.getElementById(id);
        if(li){
            ulListTasks.removeChild(li);
        }        
    }
}

function generateId(){
    return Math.floor(Math.random() * 3000);
}