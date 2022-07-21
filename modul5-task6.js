/* Задание 6 */
let arr = [1, 1, 1, "1", 2,];
let result = true;
for (let i=0; i < arr.length; i++) {
  if(i>0) {
    if(arr[i] != arr[i-1]) {result = false}
  }
}
console.log(result);