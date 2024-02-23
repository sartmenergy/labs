// 15 методичка 1. Создать веб-страницу на тему Вашего хобби. По нажатию на кнопку
// изменить стилевое оформление веб-страницы (необходимо реализовать
// переключение между двумя таблицами стилей, каждая из которых содержит
// свое цветовое оформление).
const toggleButton = document.getElementById('toggleButton');
const styleSheet = document.getElementById('styleSheet');
let currentStyle = 1;
toggleButton.addEventListener('click', () => {
event.preventDefault();
if (currentStyle === 1) {
styleSheet.href = 'style2.css';
currentStyle = 2;
} 
else {
styleSheet.href = 'style.css';
currentStyle = 1;
}
});
// 2. Добавить на страницу список. По нажатию на кнопку реализовать
// динамическое изменение прозрачности контента в элементах списка: с
// каждым нажатием прозрачность должна уменьшаться на 10%. Как только
// будет достигнуто 100%, значение свойства должно возвращаться в 0%
let prozrachnost = document.getElementById('prozrachnost');
let listItems = document.querySelectorAll('#list li');
prozrachnost.addEventListener('click', () => {
listItems.forEach(item => {
let currentproz = parseFloat(item.style.opacity) || 1;
let newproz = currentproz - 0.1;
if (newproz <= 0) {
item.style.opacity = 1;
} 
else {
item.style.opacity = newproz;
}
});
});

// 3. Создайте анимацию мигания разделителя (13:27, : - разделитель)
//электронных часов  

let razdelitel = document.querySelector('#clock span:nth-child(2)');
setInterval(() => {
  razdelitel.classList.toggle('separator');
}, 1000);