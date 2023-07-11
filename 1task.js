// Получение ссылок на элементы
const button = document.getElementById("myButton");
const resultDiv = document.getElementById("result");

// Добавление обработчика события "click" для кнопки
button.addEventListener("click", updateText);

// Функция для обновления текста и стиля элемента <div>
function updateText() {
  resultDiv.textContent = "Новый текст";
  resultDiv.style.backgroundColor = "red";
}
