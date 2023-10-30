// степень
let b1 = document.getElementById('b1');
let resultat = document.getElementById('resultat');
b1.onclick = function exp() {
let v1 = document.getElementById('v1').value;
let v2 = document.getElementById('v2').value;
let res = Math.pow(v1,v2);
resultat.innerHTML = res;
}
// месяцы
let b2 = document.getElementById('b2');
let month = document.getElementById('month');
let months = ["что это за месяц 0","январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
b2.onclick = function mon() {
let m = document.getElementById('m').value;
if (m>0 && m<13) {
let monn = months[m];
month.innerHTML= monn;
}
else {
  month.innerHTML = "такого месяца не существует";
}
}
//третье задание
let b3 = document.getElementById('b3');
let minimal = document.getElementById('minimal');
let arr = document.getElementById('arr');
let prom = document.getElementById('prom');
let numbers = [];
b3.onclick = function num() {
for (let i=0; i<20;i++){
  numbers[i] = Math.round( Math.random()*1000);  
  }
  arr.innerHTML = numbers;
  let max = Math.max(...numbers);
  minimal.innerHTML = max;
  range(max);
}
function range(max) {
  if (max<10) {
prom.innerHTML = "Число находится в диапозоне от 0 до 9";
  }
  if (max>9 && max<100) {
prom.innerHTML = "Число находится в диапозоне от 10 до 99";
  }
  if (max>99 && max<1000) {
prom.innerHTML = "Число находится в диапозоне от 100 до 999";
  }
}

// четвертое

let b4 = document.getElementById('b4');
let otvet = document.getElementById('otvet');
let new_str = '';
b4.onclick = function repeat() {
  let str = document.getElementById('str').value;
  let kol = document.getElementById('kol').value;
if (kol>1) {
  for (kol; kol>0; kol--)
  {
  new_str += str + " ";
  }
otvet.innerHTML = new_str;
}
else {
 for (let it=2; it>0; it--)
 {
  new_str += str + " ";
 }
 otvet.innerHTML = new_str;
}
new_str = '';
}
// Первое на второе и делить на третье
let b5 = document.getElementById('b5');
let otvetik = document.getElementById('otvetik');
b5.onclick = function multy() {
let h1 = document.getElementById('h1').value;
let h2 = document.getElementById('h2').value;
let h3 = document.getElementById('h3').value;
let res = (h1*h2)/h3
otvetik.innerHTML = res;
}
