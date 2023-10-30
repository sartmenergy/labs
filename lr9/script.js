let o1 = document.getElementById('o1');
let o2 = document.getElementById('o2');
let o3 = document.getElementById('o3');
let o4 = document.getElementById('o4');
let o5 = document.getElementById('o5');
person1 = {};
person1.age = 20;
person1.gender = "woman";
person1.nation = "russian";
person1.lang = "bel";
person1.rabota = "no";
console.log(person1);
function person(age, gender, nation, lang, rabota) {
  this.age = age;
  this.gender = gender;
  this.nation = nation;
  this.lang = lang;
  this.rabota = rabota;
 }
 let person2 = new person(18, "man", "belarussian", "rus", "yes");
console.log(person2);
//2
let props1 = '';
for (p in person1) {
    props1 += `${p} `;
}
o1.innerHTML = `Свойства person1: ${props1}`;

let props2 = '';
for (p in person2) {
    props2 += `${person2[p]} `;
}
o2.innerHTML = `Значения свойств person 2: ${props2}`;

//3
let b1 = document.getElementById('b1');
 b1.onclick = function repeat() {
    o3.innerHTML = "hello world";
    let propsthis = '';
    for (prop in person1) {
        propsthis += `${prop}: ${person1[prop]}; `;
    }
    o4.innerHTML = `все о персон 1: ${propsthis}`;
}

//4 всегда в конце документа
document.write(`<p> Четвертое задание персона 2: ${props2}</p>`);

//5 в консоли
function bludo(name, calory, cuisine, cooktime) {
    this.name = name;
    this.calory = calory;
    this.cuisine = cuisine;
    this.cooktime = cooktime;
    this.getName = function() {
        return this.name;}
    this.setName = function(name) {
        this.name = name;}
   }
   let bludo1 = new bludo("Пельмени", "почти диетические", "национальное беларуское", "минут 15-20");
   let bludo2 = new bludo("Пицца", "меньше чем в сельдерее", "национальное беларуское", "проще купить");

   console.log(bludo1);
   console.log(bludo2);

   bludo1.setName("Pelmeshki");
   bludo2.setName("Pizza");

   console.log(bludo1);
   console.log(bludo2);

// 6
 let copy = person1;
 let str = '';
    for (prop in copy) {
        str += `${prop}: ${copy[prop]}; `;
    }
    o5.innerHTML = `вывел копию а это реально копия персон1 ну ничего себе: ${str}`;
