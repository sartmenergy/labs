let sum = 0;
let buts = []

for(let i = 1; i < 6; i++) {
    buts[i] = document.getElementById(`b${i}`);
    buts[i].onclick = function() {sum += +this.textContent};
}
buts[6] = document.getElementById(`b6`);
buts[6].onclick = function() {alert(`И у нас получилось ${sum}, норм калькулятор")`); sum = 0;}



let myName = window.prompt("Кто к нам пришел");
 if(!myName) {
  alert("Мы таких не знаем");
}
if(myName) {
  alert(`Дарова ${myName}`);
}
