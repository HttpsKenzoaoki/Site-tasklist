const taskForm = document.querySelector('.task-form');
const openTasks = document.getElementById('openTasks');
const completedTasks = document.getElementById('completedTasks');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('taskTitle').value;
  const description = document.getElementById('taskDescription').value;
  const date = document.getElementById('taskDate').value;

  if (title && date) {
    addTask(title, description, date);
    taskForm.reset();
  }
});

function addTask(title, description, date, completed = false) {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');
  if (completed) taskDiv.classList.add('completed');

  const taskDetails = document.createElement('div');
  taskDetails.classList.add('task-details');
  taskDetails.innerHTML = `<strong>${title}</strong> <br> ${description} <br> <small>Data: ${date}</small>`;

  const taskActions = document.createElement('div');
  taskActions.classList.add('task-actions');

  const completeBtn = document.createElement('button');
  completeBtn.textContent = completed ? 'Reabrir' : 'Concluir';
  completeBtn.addEventListener('click', () => toggleComplete(taskDiv, title, description, date));

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Editar';
  editBtn.addEventListener('click', () => editTask(taskDiv, title, description, date));

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Excluir';
  deleteBtn.addEventListener('click', () => taskDiv.remove());

  taskActions.appendChild(completeBtn);
  taskActions.appendChild(editBtn);
  taskActions.appendChild(deleteBtn);

  taskDiv.appendChild(taskDetails);
  taskDiv.appendChild(taskActions);

  if (completed) {
    completedTasks.appendChild(taskDiv);
  } else {
    openTasks.appendChild(taskDiv);
  }
}

function toggleComplete(taskDiv, title, description, date) {
  taskDiv.remove();
  const isCompleted = taskDiv.classList.contains('completed');
  addTask(title, description, date, !isCompleted);
}

function editTask(taskDiv, title, description, date) {
  taskDiv.remove();
  document.getElementById('taskTitle').value = title;
  document.getElementById('taskDescription').value = description;
  document.getElementById('taskDate').value = date;
}

const btnExp = document.querySelector('#btn-exp');
const menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function () {
  menuSide.classList.toggle('expandir');
});

// Alternar tema claro/escuro
const themeCheckbox = document.getElementById('chk');

themeCheckbox.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme'); // Aplica o tema apenas ao body
});
