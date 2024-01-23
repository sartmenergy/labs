let s = 0; while(s*17 % 624 != 1) {s++;} console.log(s)
// 1. Напишите сценарий, который бы в зависимости от поры года выводил
// сообщение о месяцах, которые относятся к данной поре. Пора года должна
// определяться относительно текущей даты.
let date = new Date();
alert( date.getMonth() );
let d = date.getMonth();
if (d = 0||1||11) 
{
alert ("Зима. Зимние месяцы это дикапрь янфарь и фефрал");
}
else if (d = 2||3||4) 
{
alert ("Весна. Висние месяцы это март япрел и май");
}
else if (d = 5||6||7) 
{
alert ("Лето. Летнее месяцы это июн июл и офгуст");
}
else if (d = 8||9||10) 
{
alert ("Осен. Осенные месяцы это синтяпрь октяпрь и наяпрь");
}
// 2. Напишите сценарий, который по введенной дате рождения определяет
// возраст человека.
let b1 = document.getElementById('b1');
let resultat = document.getElementById('resultat');
b1.onclick = function datt() {
let v1 = document.getElementById('v1').value;
let date2 = new Date(v1);
let res = date.getFullYear() - date2.getFullYear();
let ras = date2.getMonth() - date.getMonth(); 
if (ras > 0 ) 
{   
  resultat.innerHTML = `Ваш возраст:  ${res-1}`;
}
else {
  resultat.innerHTML = `Ваш возраст:  ${res}`;
}

}

// 3. Добавьте на страницу 2 кнопки: start и end. Напишите сценарий,
// который выводит информацию о промежутке времени, который прошел
// между нажатиями кнопок.
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let dat2;
let dat3;
let resultat2 = document.getElementById('resultat2');
b2.onclick = function GASFFAS2() { 
  dat2 = +Date.now();
}
b3.onclick = function FSAFASAFSFS() {
  dat3 = +Date.now();
  resultat2.innerHTML = +(dat3 - dat2);
}

// 4) 1.Дополните объект Math методом, который возвращает
// количество элементов в массиве.
// 2.Напишите сценарий, который запрашивает у пользователя
// число в соответствующем диапазоне и возвращает символ
// строки с указанным индексом.

let array1 = [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
let resultat3 = document.getElementById('resultat3');
let resultat4 = document.getElementById('resultat4');
let Math = array1.length;
let b4 = document.getElementById('b4');
b4.onclick = function ahalaymahalay() {
let v3 = document.getElementById('v3').value;
console.log(v3);
let elemento = array1[v3];
resultat4.innerHTML = `Количество элементов в массиве ${Math} элементов`;
resultat3.innerHTML = elemento;
}

// 5 Расширьте встроенный объект Number методом isOdd который возвращает True если четное
let resultat5 = document.getElementById('resultat5');
let b5 = document.getElementById('b5');
b5.onclick = function isOdd1() {
let v4 = document.getElementById('v4').value;
if (v4 % 2 == 0) {
  resultat5.innerHTML = "True";
}
else {
  resultat5.innerHTML ="False";
}
}

// 6. Напишите функцию, которая получает в качестве параметра
// переменную содержащую строку и с помощью регулярного выражения
// проверяет, начинается ли содержимое этой переменной с цифры или нет.
let regexp = /[0-9]/;
let resultat6 = document.getElementById('resultat6');
let b6 = document.getElementById('b6');
b6.onclick = function regexpic() {
let v5 = document.getElementById('v5').value;
if (v5.match(regexp))
{
  resultat6.innerHTML ="Начинается с цифры";
}
else {
  resultat6.innerHTML ="Не начинается с цифры";
}
}
// 7.* Напишите функцию, которая получает в качестве параметра
// переменную содержащую строку и с помощью регулярного выражения
// проверяет, начинается ли содержимое этой переменной с указанного
// пользователем символа.

let resultat7 = document.getElementById('resultat7');
let b7 = document.getElementById('b7');
b7.onclick = function bykvaVstroke() {
let v6 = document.getElementById('v6').value;
let v7 = document.getElementById('v7').value;
let re = new RegExp(String(v7));
if (v6.match(re))
{
  resultat7.innerHTML ="есть";
}
else {
  resultat7.innerHTML ="нет";
}
}

// 8.* Дана строка; нужно написать функцию, которая позволяет вернуть
// значение true, если строка абсолютно одинаково читается как в привычном
// направлении, так и в обратном, и false – если нет. При этом нужно учитывать
// пробелы и знаки препинания.

let resultat8 = document.getElementById('resultat8');
let b8 = document.getElementById('b8');
b8.onclick = function perevertish() {
let v8 = document.getElementById('v8').value;
let stroka = v8.split('');
let reverseStroka = stroka.reverse();
let opyatVmassiv = reverseStroka.join('');
if (opyatVmassiv == v8)
{
  resultat8.innerHTML ="строка реверсается";
}
else {
  resultat8.innerHTML ="нет";
}
}
