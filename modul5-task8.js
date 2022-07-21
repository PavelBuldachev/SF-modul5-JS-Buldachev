/* Задание 8 */
let myMap = new Map();
myMap.set("Россия", "Рубль");
myMap.set("США", "Доллар");
myMap.set("Япония",  "Йена");
for (let name of myMap.keys()) {
  console.log(`x - ${name} , y - ${myMap.get(name)}`); 
}