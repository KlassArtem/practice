// Получаем ссылки на элементы DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Обработчик события для кнопки "Добавить"
addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTaskToList(taskText);
    taskInput.value = '';
  }
  if (taskText === '') { 
    alert('WHERE YOUR TASK?!?!??!??!??!?!??!'); 
  } 
});

// Обработчик события для нажатия Enter в поле ввода
taskInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addButton.click();
  }
});

// Функция для добавления новой задачи в список
function addTaskToList(taskText) {
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const label = document.createElement('label');
  label.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Удалить';

  
  
  // Обработчик события для кнопки "Удалить"
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskContainer);
  });

  taskContainer.appendChild(checkbox);
  taskContainer.appendChild(label);
  taskContainer.appendChild(deleteButton);

  taskList.appendChild(taskContainer);
}
