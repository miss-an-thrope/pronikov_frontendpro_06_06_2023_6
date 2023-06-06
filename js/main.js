// Homework №6

let numOrStr = prompt('input number or string');
console.log(numOrStr);

/* Task:
Переписати код нижче із використанням конструкції switch…case

let numOrStr = prompt('input number or string');
console.log(numOrStr);

if(numOrStr === null) {
    console.log('ви відмінили')
} else if( numOrStr.trim() === '' ) {
    console.log('Empty String');
} else if( isNaN( +numOrStr ) ) {
    console.log(' number is Ba_NaN')
} else {
    console.log('OK!')
}
*/

switch (true) {
   case numOrStr === null:
      console.log('ви відмінили');
   break;
   case numOrStr === '':
      console.log('Empty String');
   break;
   case Number.isNaN(Number(numOrStr)): //Використано Number.isNaN() з джерел MDN.
      console.log(' number is Ba_NaN');
   break;
   default:
      console.log('OK!');
}