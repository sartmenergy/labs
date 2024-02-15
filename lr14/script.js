
// 1. Создать веб-документ, содержащий произвольный контент.
// Предусмотреть наличие двух пустых блоков div1 и div2. В первый блок
// вывести все дочерние узлы элемента body. Во второй блок вывести все
// элементы документа.

let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');
let bodyChildren = document.body.childNodes;
let allElements = document.querySelectorAll('*');
bodyChildren.forEach(child => {
div3.innerHTML += child.nodeName + '<br>';
});
allElements.forEach(element => {
div4.innerHTML += element.nodeName + '<br>';
});

// 2. Добавить на страницу кнопку, по нажатию на которую можно создать
// список (упорядоченный, неупорядоченный), кнопки для добавления
// очередного элемента списка в начало и конец, кнопку, по нажатию на которую
// будет изменен цвет контента в нечетных элементах списка.

let list = document.getElementById('list');

function createOrderedList() {
list.innerHTML = 'ord';
list = document.createElement('ol');
document.body.appendChild(list);
}

function createUnorderedList() {
list.innerHTML = 'unord';
list = document.createElement('ul');
document.body.appendChild(list);
}

function addElement(position) {
let newItem = document.createElement('li');
newItem.textContent = 'New item';
if (position === 'first') {
list.insertBefore(newItem, list.firstChild);
} 
else {
list.appendChild(newItem);
}
}

function changeColor() {
let listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++) {
if (i % 2 !== 0) {
listItems[i].style.color = 'red';
}
}
}

// 3. Получить доступ к одному и тому же элементу тремя разными
// способами, в том числе с использованием методов, использующих
// иерархическую структуру DOM. Значения, которые возвращает каждый из
// использованных методов сохранить в переменные. Выполнить проверку:
// равны ли переменные (ссылаются ли они на один и тот же узел).

let res3 = document.getElementById("res3");
let element1 = document.getElementById('div32');

let element2 = document.querySelector('#div32');

let parentElement = document.getElementById('div31');
let element3 = parentElement.querySelector('#div32');

if (element1 === element2 && element2 === element3) {
    res3.innerHTML += ' Переменные ссылаются на один и тот же узел.';
} else {
    res3.innerHTML += ' Переменные не ссылаются на один и тот же узел.';
}

// 4. Добавить на веб-страницу элемент <figure>, содержащий название
// картинки. В папку pictures сохранить 5 различных изображений. Реализовать
// смену изображений (по очереди из имеющихся пяти) и соответствующих
// названий по клику на картинку.

let pics = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
let captions = ['1', '2', '3', '4', '5'];

let currentIndex4 = 0;
let pic4 = document.getElementById('pic4');
let caption = document.querySelector('figcaption');

function changeImage() {
currentIndex4 = (currentIndex4 + 1) % pics.length;
pic4.src = pics[currentIndex4];
caption.textContent = captions[currentIndex4];
}
pic4.addEventListener('click', changeImage);


// 5. Создайте слайдер минимум из 5 изображений. Реализуйте плавную
// смену изображений.

const slides = document.querySelector('.slides');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let slideIndex = 0;

function showSlide(index) {
slides.style.transform = `translateX(-${index * 95}%)`;
}

prevBtn.addEventListener('click', () => {
slideIndex = (slideIndex - 1 + 5) % 5;
showSlide(slideIndex);
});

nextBtn.addEventListener('click', () => {
slideIndex = (slideIndex + 1) % 5;
showSlide(slideIndex);
});

// 6. Добавьте на страницу ссылку и 3 кнопки с названием веб-адресов
// (например, hostname). Каждая их кнопок должна иметь свой адрес, который
// необходимо будет установить в качестве значения атрибута src указанной
// ссылки по нажатию на соответствующую кнопку. Обращение к объекту,
// указывающему на ссылку для каждой из кнопок реализовать с использованием
// различных методов.

const link = document.getElementById('link6');
const res6 = document.getElementById('res6');
const but61 = document.getElementById('button61');
but61.addEventListener('click', function() {
link.href = 'https://vk.com/id453930958';
res6.innerHTML = 'https://vk.com/id453930958';
});
const but62 = document.getElementById('button62');
but62.onclick = function() {
link.setAttribute('href', 'https://t.me/sartmenergy');
res6.innerHTML = 'https://t.me/sartmenergy';
};

function changeLink() {
link.href = 'https://www.instagram.com/sartmenergy/';
res6.innerHTML = 'https://www.instagram.com/sartmenergy/';
}
const but63 = document.getElementById('button63');
but63.addEventListener('click', changeLink);


// 7. Средствами JavaScript добавьте на веб-страницу таблицу в
// соответствии с вариантом, таблица 16.1
result101 = document.getElementById('result101')
let table = '<table>';
let count = 1;
for (let i = 0; i < 3; i++) {
table += '<tr>';
for (let j = 0; j < 3; j++) {
if (count === 5) {
table += '<td class="light-red">' + count + '</td>';
} 
else if (count % 2 === 0) {
table += '<td class="light-green">' + count + '</td>';
} 
else {
table += '<td class="light-blue">' + count + '</td>';
}
count++;
}
table += '</tr>';
}
table += '</table>';
result101.innerHTML = table;

