const list = document.getElementById("Task-list");
const input = document.getElementById("task-input");

function AdicionarTarefa(){
    const tasktext = input.value.trim();
    if(tasktext !== ""){
        const li = document.createElement("li");
        li.innerHTML = `<span>${tasktext}</span>
        <button class = "editar" onclick ="editar(this)"> Editar </button>
        <button class = "excluir" onclick ="excluir(this)"> Excluir </button>`
        list.appendChild(li);
        input.value="";
    }
}

function editar(button){
    const li = button.parentElement;
    const span = li.querySelector("span");
    const newText = prompt("Editar tarefa:", span.textContent);
    if(newText !== null && newText.trim() !== ""){
        span.textContent = newText.trim();
    }
}

function excluir(button){
    const li = button.parentElement;
    list.removeChild(li);
}