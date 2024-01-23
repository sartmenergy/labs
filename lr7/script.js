// сделать массивы и объединить
let massiv1 = [1, 2, 3, "табуретка"];
alert(massiv1.length);
let massiv2 = new Array(1, 2, 3, 4, "слово");
alert(massiv2.length);
let massiv3 = Array.of(1, 2, 3, "гусь");
alert(massiv3.length);
let massiv4 = [...massiv1, ...massiv2,...massiv3];
alert(`Длина массива с массивами ${massiv4.length}`);


let a = document.getElementById('a');
for (let i = 0; i < massiv4.length; i ++) {
  a.innerHTML += i + ' - ' + massiv4[i] + '<br>';
}


let copymassiv4 = [...massiv4];
// console.log(copymassiv4);

let deleted = copymassiv4.pop(); // удаленный в конце элемент можно куда-нибудь записать
copymassiv4.shift(); //удаление с начала
copymassiv4.splice(0,3, "911", "228", "336");  //заменить первые три
copymassiv4.push("пуш1","пуш2");  //добавить в конец
copymassiv4.unshift("аншифт1", "аншифт2"); // добавить в начало
delete copymassiv4[8];
delete copymassiv4[5];
delete copymassiv4[6];

// вывести все кроме undef
let b = document.getElementById('b');
copymassiv4 = copymassiv4.filter((elem) => {return elem});

for (let k = 0; k < copymassiv4.length; k ++) {
b.innerHTML += k + ' - ' + copymassiv4[k] + '<br>';
}
// все способы отчищают массив
copymassiv4 = [];
copymassiv4.length = 0;
copymassiv4.splice(0, copymassiv4.length);
console.log(copymassiv4);

// массив 100 чисел
let arr = [];
for (let i1 =0; i1<100; i1++){
  arr[i1] = i1;
}
// вывести сток сколько вписано
let number = prompt("Количество элементов массива для последнего задания");
for (let u = 0; u < number; u ++) {
  c.innerHTML += u + ' - ' + arr[u] + '<br>';
}
// массив со строками вывести их длинну
let per = "";
let arr1 = ["дом", "кот", "дверь", "собака", "зеркало"];
let arr2 =[];
for (i=0; i<arr1.length; i++) {
  per = arr1[i];
  arr2[i]= per.length;
}

let d = document.getElementById('d');
for (let i = 0; i < arr2.length; i ++) {
  d.innerHTML += i + ' - ' + arr2[i] + '<br>';
}

// Напишите код, с помощью которого возвращается
// фрагмент массива, содержащий первые Х элементов
// массива. Число Х вводить с клавиатуры.
// 2. Создайте массив, содержащий строки. Выведите массив,
// содержащий длину каждого элемента исходного массива.