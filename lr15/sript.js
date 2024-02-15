// 1. Создать веб-документ, содержащий текстовое поле для ввода. При
// вводе очередного символа в тестовое поле реализуйте его вывод на вебстраницу. Вывод должен осуществляться без перезагрузки страницы.
function vivodsymbol() {
let input = document.getElementById("input");
let output = document.getElementById("output");
output.innerText = input.value;
}

// 2. Добавьте на веб-страницу ссылку. Реализуйте для нее отмену
// перехода по ссылке по клику. Добавьте для ссылки 5 обработчиков для разных
// событий таким образом, чтобы при наступлении соответствующего события
// выводилось сообщение с типом события.

let link = document.getElementById("link");
link.addEventListener("click", function(event) {
event.preventDefault();
});

link.addEventListener("click", function() {
console.log("клик на ссылку");
});
link.addEventListener("mouseenter", function() {
console.log("навели прицел");
});
link.addEventListener("mouseleave", function() {
console.log("убрали прицел или дрожат руки");
});
link.addEventListener("mouseover", function() {
console.log("под ссылкой");
});
link.addEventListener("mouseout", function() {
console.log("куда он ушел верни");
});

// 3. Добавьте 5 произвольных HTML-элементов на веб-страницу. Для
// каждого элемента назначьте не менее двух обработчиков (можно как на один,
// так и на разные типы событий). При назначении обработчиков событий
// использовать возможность их выполнения на различных стадиях (всплытия и
// перехват).
// С помощью диалогового окна реализуйте ввод пользователем события,
// которое необходимо сгенерировать, и элемент, для которого это событие
// должно быть вызвано.

let myDiv = document.getElementById('div');
let myButton = document.getElementById('button');
let myLink = document.getElementById('link1');
let myInput = document.getElementById('input_field');
let myParagraph = document.getElementById('paragraph');

myDiv.addEventListener('click', function() {
console.log('нажали на див');
});
myDiv.addEventListener('mouseover', function() {
console.log('мышка привла в див');
}); 

myButton.addEventListener('click', function() {
console.log('ооо нет на кнопку нажали');
});
        
myButton.addEventListener('dblclick', function() {
console.log('нажали на кнопку так еще и два раза жесть');
}); 

myLink.addEventListener('mouseenter', function() {
console.log('ты конечно навелся на ссылку но это же не означает что ты на нее нажмешь?');
});
        
myLink.addEventListener('mouseleave', function() {
console.log('вот и правильно');
});

myInput.addEventListener('focus', function() {
console.log('поле ввода в жестком фокусе');
});
myInput.addEventListener('blur', function() {
console.log('поле ввода потеряло фокус покус');
}); 

myParagraph.addEventListener('mouseover', function() {
console.log('мышь посетила параграф');
});
myParagraph.addEventListener('mouseout', function() {
console.log('мышь не нашла что ей было нужно и ушла');
});