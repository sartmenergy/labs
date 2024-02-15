// 1. Создать веб-документ, содержащий форму. На форме должны
// присутствовать текстовое поле для ввода, зависимый и независимые
// переключатели, выпадающий список, кнопки <button>, <input type=’submit’>,
// <input type=’reset’> и многострочное текстовое поле.

// 2. Напишите сценарий, который при первом нажатии на кнопку
// <button>, добавит в текстовое поле текст «текстовое поле». При последующих
// нажатиях на указанную кнопку реализуйте переключение цвета текста между
// двумя произвольными цветами (второй клик установит цвет, а последующие
// – будут переключать).

let b1 = document.getElementById('b1');
let buttonClickCount = 0;
b1.onclick = function displayText() {
let textField = document.getElementById("textField");
if (buttonClickCount === 0) {
textField.value = "текстовое поле";
}
else {
if (textField.classList.contains("red")) {
textField.classList.remove("red");
textField.classList.add("green");
} 
else {
textField.classList.remove("green");
textField.classList.add("red");
}
}
buttonClickCount++;
}

// 3. Напишите сценарий, который, при нажатии на кнопку <input type=’reset’> будет получать текст из многострочного текстового поля, запрашивать у
// пользователя искомую строку, сравнивать содержимое поля со значением,
// введенным пользователем и выдавать соответствующий результат.

let res1 = document.getElementById('res1')
res1.onclick = function checkText() {
let textField = document.getElementById('textarea');
let text = textField.value;
let searchStr = prompt('Введите искомую строку:');
if (text.includes(searchStr)) {
alert('Строка найдена!');
} 
else 
{
alert('Строка не найдена!');
}
}

// 4. Напишите сценарий, который по двойному клику на кнопке <input
// type=’submit’> выведет на веб-страницу контент вида: переключатель:
// выбранный элемент radio, флажки: список отмеченных флажков, выпадающий
// список: выбранный элемет/элементы списка. При этом, если хоть один из
// элементов не выбран (radio, checkbox, select), необходимо вывести сообщение,
// содержащее элементы, которые необходимо заполнить. Выполнить
// стилистическое оформление выводимого результата.

let result = document.getElementById('result');
let b2 = document.getElementById('b2');
b2.onclick = function showSelection() {
let radio = document.getElementsByName("radio");
let checkboxes = document.getElementsByName("checkbox");
let dropdown = document.getElementsByName("dropdown")[0];
let selectedRadio = "";
let selectedCheckboxes = [];
let selectedDropdown = "";
for (let i = 0; i < radio.length; i++) {
if (radio[i].checked) {
selectedRadio = radio[i].value;
}
}
for (let j = 0; j < checkboxes.length; j++) {
if (checkboxes[j].checked) {
selectedCheckboxes.push(checkboxes[j].value);
}
}
if (dropdown.selectedIndex !== -1) {
selectedDropdown = dropdown.options[dropdown.selectedIndex].value;
}
if (selectedRadio === "" || selectedCheckboxes.length === 0 || selectedDropdown === "") {
result.innerHTML = "Необходимо выбрать следующие элементы:<br>";
if (selectedRadio === "") {
result.innerHTML += "- Radio кнопка<br>";
}
if (selectedCheckboxes.length === 0) {
result.innerHTML += "- Флажки<br>";
}
if (selectedDropdown === "") {
result.innerHTML += "- Выпадающий список<br>";
}
} 
else 
{
result.innerHTML = "Выбранные элементы:<br>";
result.innerHTML += "- Radio: " + selectedRadio + "<br>";
result.innerHTML += "- Флажки: " + selectedCheckboxes.join(", ") + "<br>";
result.innerHTML += "- Выпадающий список: " + selectedDropdown + "<br>";
}
}

// 5. Напишите сценарий, который по нажатию на кнопку <button> будет
// создавать и вызывать событие для элемента <input type=’submit’> ‘click’.

document.getElementById("b3").addEventListener("click", function() {
let submitButton = document.getElementById("submitb");
let clickEvent = new MouseEvent("click", {
bubbles: true,
cancelable: true,
view: window
});
submitButton.dispatchEvent(clickEvent);
});
