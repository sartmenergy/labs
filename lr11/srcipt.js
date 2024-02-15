// let v1 = document.getElementById('v1').value;
// 1. Создайте 2 элемента на странице (кнопки, текста или ссылки), при
// нажатии на которые будут создаваться 2 разных окна со следующими
// свойства-ми:
// 1-ое: ширина 200, высота 200, не отображение панели инструментов, не
// отображение панели меню, отображение строки состояния, не отображение
// адресной строки, не отображение кнопок браузера, отображение полос
// прокрут-ки;
// 2-ое: ширина 400, высота 400, отображение панели инструментов,
// отображение панели меню, отображение строки состояния, не отображение
// адресной строки, отображение кнопок браузера, не отображение полос
// прокрутки
let b1 = document.getElementById('b1');
b1.onclick = function TwoWindows() {
  window.open("", "", "width=200,height=200,toolbar=no,menubar=no,status=yes,location=no,resizable=yes,scrollbars=yes");
}
let b2 = document.getElementById('b2');
b2.onclick = function SecondWindows() {
  window.open("", "", "width=400,height=400,toolbar=yes,menubar=yes,status=yes,location=yes,resizable=yes,scrollbars=no");
}

// 2. Добавьте на HTML-страницу ссылку на другую страницу, кликом
// выполните переход по ссылке. Затем выполните возврат на исходную
// страницу с помощью JavaScript.
function timetogo(url) {
window.location.href = url;  
}
function timetoreturn() {
window.history.back();
}

// 3) 1. На HTML-страницу добавьте кнопку. По нажатию на
// данную кнопку необходимо изменить ширину окна браузера.
// 2. Выведите на страницу название браузера. Выведите
// указанную информацию 3-мя разными способами, причем один
// из способов должен выводить информацию с задержкой в 7
// секунд.

let b10 = document.getElementById('b10');
b10.onclick = function SecondWindows() {
  let w = Math.round(Math.random()*1000);
  let h = Math.round(Math.random()*1000);
  console.log(w);
  window.open("", "", `width=${w},height=${h},toolbar=yes,menubar=yes,status=yes,location=yes,resizable=yes,scrollbars=no`);
}
let vers1 = navigator.appVersion

let b11 = document.getElementById('b11');
let result = document.getElementById('result');
b11.onclick = function firstsposob() {
function res() {
  result.innerHTML = `Вы используете браузер ${vers1} `;
}
setTimeout(res, 7000);
}

let b12 = document.getElementById('b12');
b12.onclick = function secondsposob() {
alert(`Вы используете браузер ${vers1} `); 
}

let b13 = document.getElementById('b13');
b13.onclick = function thirdsposob() {
console.log(`Вы используете браузер ${vers1} `); 
}