// 1. Создайте объект-конструктор (класс), который содержит
// информацию о пациентах больницы (ФИО, дата рождения, диагноз, ФИО
//   лечащего врача)

function Patient(name, birthday, diagnosis, doctor) {
  this.name = name;
  this.birthday = birthday;
  this.diagnosis = diagnosis;
  this.doctor = doctor;
}
let patient1 = new Patient("Нелюбин Даниил", "121.0393923.2000 до н.э", "аутизм", "врача не нашли");
let patient2 = new Patient("Тарасовец Егор", "23.35.21222 до н.э", "кровоизлияние в мозг", "зачем врач будет сам себе лоботомию делать");

// 2. Создайте экземпляр объекта, выполнив ввод данные с помощью
// диалогового окна prompt.

let namee = prompt('введите имя и фамилию');
let dataa = prompt('дата нарадження');
let diagnoss = prompt('че болит диагноз');
let doctorr = prompt('какова врача хотити');

let patient3 = new Patient(namee, dataa, diagnoss, doctorr);
console.log(patient3);

// 3. По нажатия на кнопку, преобразуйте созданный объект JavaScript в
// JSON-строку.
// 4. Выведите полученное строковое значение, выполнив встраивание
// текстового содержимого в HTML-элемент.
// 5. Преобразуйте созданную JSON-строку назад в объект JavaScript таким
// образом, чтобы полученный объект содержал только те свойства, для которых
// значение свойств имеет тип string.
let b1 = document.getElementById('b1');
let result = document.getElementById('result')
let result2 = document.getElementById('result2')
b1.onclick = function doJson() {
let jsonchik = JSON.stringify(patient3);
console.log(jsonchik);
result.innerHTML = `${jsonchik}`;
// 5 задание тут же сходу 
let obratno = JSON.parse(jsonchik);
let clearString = {};
for (let key in obratno) {
if (typeof obratno[key] === 'string') {
clearString[key] = obratno[key];
}
}
console.log(clearString)
}

// 6. Создайте строковую переменную, которая содержит данные в виде
// JSON-строки.

let jsonString = '{"name": "Sergei", "age": 18, "city": "Minsk"}';
console.log('строковая переменная в виде json строки');
console.log(jsonString);