let json = '[{"name": "Создал переменную в формате JSON"}, {"name": "Сделал объект"}, {"name": "Вывел на страницу"}]';

// 2. Выполните преобразование данных, хранящихся в созданной
// переменной в объект JavaScript.

let data = JSON.parse(json);

// 3. Используя DOM, выполните добавление списка на страницу. В
// элементы списка внесите информацию из свойств объекта.

let res = document.getElementById("res");
data.forEach((el) => {
  let li = document.createElement("li");
  li.textContent = el.name;
  res.appendChild(li);
});

// 4. С использованием библиотеки JQuery выведите в консоль все
// элементы, являющиеся дочерними по отношению к <body>.

$(document).ready(function () {
  let body = $("body > *");
  console.log(body);
});

// 5. Используя методы библиотеки JQuery, добавьте на страницу таблицу,
// как показано на рисунке 20.1.

$(document).ready(function () {
  let table = $("<table>");

// 6. Стилевое оформление таблицы необходимо выполнить добавлением
// (с помощью библиотеки JQuery) элементам таблиц атрибута class.

  table.addClass("table");
  let thead = $("<thead>");
  let headerRow = $("<tr>");

  let headers = [" ", "NAstoyashee", "Proshedshee", "Budushee"];
  headers.forEach(function (headerText) {
    let headerCell = $("<th>");
    headerCell.text(headerText);
    headerRow.append(headerCell);
  });

  thead.append(headerRow);
  table.append(thead);
  let tbody = $("<tbody>");
  let rows = [
    ["+", "I dance", "I danced", "I will dance"],
    ["-", "I don't dance", "I didn't dance", "I'll not dance"],
    ["?", "Do i dance?", "Did i dance?", "Will i dance?"],
  ];

  rows.forEach(function (rowData) {
    let row = $("<tr>");

    rowData.forEach(function (cellData) {
      let cell = $("<td>");
      cell.text(cellData);
      row.append(cell);
    });

    tbody.append(row);
  });
  table.append(tbody);
  $("body").append(table);


// 7. Используя библиотеку JQuery добавить события к заголовкам
// таблицы: при наведении на заголовок должна выводиться информацоя с
// описанием времени, указанного в заголовке.

  $("th").hover(function () {
    let time = $(this).text();
    alert("Время: " + time);
  });
});

// 8. Создайте HTML-форму и организуйте проверку заполненности всех
// полей по нажатию на кнопку. Если останутся незаполненные поля,
// необходимо вывести предупреждение.

$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();

    if (name === "" || email === "" || message === "") {
      alert("Пожалуйста, заполните все поля");
    } else {
     alert("Форма отправлена");
    }
  });
});

// 9. Создайте для кнопки эффект «переключателя», как показано на
// рисунке 20.2 с использованием библиотеки JQuery.

$(document).ready(function(){ 
  var switchStatus = false;   
  $("#switch").on('change', function() {     
  if ($(this).is(':checked')) {         
  switchStatus = $(this).is(':checked'); 
  $(this).val(switchStatus); 
  $('.status').css('text-align','left'); 
  $('.status').html('ON');     
  }     
  else {        
  switchStatus = $(this).is(':checked');    
  $(this).val(switchStatus);    
  $('.status').css('text-align','right');    
  $('.status').html('OFF');       
  } 
  }); 
  });