let s1 = 2;

while((s1+20)**2 % 893 != 9) {
s1++;
}
console.log(s1)

//   14 лаба 1. Создайте веб-документ, содержащий не менее 5 элементов (заголовки,
//   абзацы, элементы форм и т.д.). Выведите всех потомков тега body. Для первых
//   двух элементов выведите тип узла.

let body1 = document.body;
let childNodes = body1.childNodes;
for (let i = 0; i < childNodes.length; i++) {
let node = childNodes[i];
console.log(node);
if (i < 2) {
console.log("Тип узла: " + node.nodeType);
}
}
//   2. Добавьте на веб-страницу нумерованный список, содержащий
//   названия месяцев. Реализуйте сценарий, который после списка добавит
//   таблицу, состоящую из двух столбцов: №, название месяца. Заполните таблицу
//   данными из списка.

let spisok = document.getElementById('111');
let table1 = document.createElement('table');
let tbody = document.createElement('tbody');
let length = spisok.children.length;
for (let k = 0; k < length; k++ ) {
let sp = spisok.children;
let r9d = document.createElement('tr');
let column1 = document.createElement('td');
let column2 = document.createElement('td');
column1.textContent = k + 1;
column2.textContent = sp[k].textContent;
r9d.appendChild(column1);
r9d.appendChild(column2);
tbody.appendChild(r9d);
}
table1.appendChild(tbody);
spisok.after(table1);

//   3. Напишите сценарий, который добавит в указанный список 13-ый
//   пункт со следующим содержанием «13-го месяца не бывает».

let newPunct = document.createElement('li');
newPunct.textContent = '13-го месяца не бывает';
spisok.appendChild(newPunct);

//   4. С помощью JavaScript добавьте в 13-й пункт списка маркированный
//   список, содержащий дни недели.

let week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]

let ull = document.createElement('ul');
for (let l=0; l<week.length; l++) {
let podpunct = document.createElement('li');
podpunct.textContent = week[l];
ull.appendChild(podpunct);
}
newPunct.appendChild(ull);
//   5. Напишите сценарий, который по нажатию на кнопку выводит
//   содержимое всех заголовков в пределах элемента main.

let but = document.getElementById('but1');
but.onclick = function zagolovki() {
  let zag = document.querySelectorAll('main h1, main h2, main h3, main h4, main h5, main h6');
  for (let j=0; j<zag.length; j++) {
    alert(zag[j].textContent);
  }
}
//   6. Добавьте на страницу зависимый переключатель (radio), содержащий
//   варианты ответа да/нет. Реализуйте переключатель, в активном состоянии
//   текст которого отображается красным, в неактивном – синем.

let radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(button => {
  button.addEventListener('change', function() {
    radioButtons.forEach(btn => {
      if (btn !== button) {
        btn.nextSibling.style.color = btn.checked ? 'red' : 'blue';
      }
    });
  });
});

//   7. Добавьте на веб-страницу блок, содержащий тест, в соответствии с
//   вариантом. Тест должен иметь заголовок. Необходимо предусмотреть
//   различные варианты ответов: единственный верный из предложенных,
//   несколько верных из предложенных, ответ, введенный пользователем. После
//   ответа на все вопросы, по нажатию кнопки «Результат», необходимо вывести
//   результат теста с указанием вопросов, на которые даны неверные ответы. 

// ТЕМА Язык гипертекстовой разметки HTML
document.getElementById('buttonresult').addEventListener('click', function() {
  let results = document.getElementById('results');
  results.innerHTML = '';

  let q1Answer = document.querySelector('input[name="q1"]:checked').value;
  let q2Answers = Array.from(document.querySelectorAll('input[name="q2"]:checked')).map(input => input.value);
  let q3Answer = document.getElementById('q3').value;

  let incorrectAnswers = [];

  if (q1Answer !== 'a1') {
    incorrectAnswers.push('Ответ на вопрос 1 неверный');
  }

  if (!q2Answers.includes('a1') || !q2Answers.includes('a3')) {
    incorrectAnswers.push('Ответ на вопрос 2 неверный');
  }

  if (q3Answer.toLowerCase() !== 'а') {
    incorrectAnswers.push('Ответ на вопрос 3 неверный');
  }

  if (incorrectAnswers.length === 0) {
    results.innerHTML = 'Вы превосходно знаете HTML!';
  } else {
    results.innerHTML = 'К сожалению, вы ответили неверно на следующие вопросы:<br>' + incorrectAnswers.join('<br>');
  }
});

