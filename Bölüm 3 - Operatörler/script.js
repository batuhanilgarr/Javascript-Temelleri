/* 1 - Matematiksel Operatörler  */

var x = 10;
var y = 20;
var z = 10;

console.log(x + y); // 30
console.log(x - y); // -10
console.log(y / x); // 2
console.log(x * y); // 200
console.log(x * y + z); // 210
console.log(x * (y + z)); // 300

/* 
x++; // x = x + 1
console.log(x); // 11

y--; // y = y - 1
console.log(y); // 19
*/




/* 2 - Karşılaştırma Operatörleri */

var sonuc = x>y;;
console.log(sonuc); // false

console.log(x < y); // true
console.log(x >= z); // true
console.log(x == z); // true
console.log(x == "10"); // true
console.log(x === "10"); // false




/* 3 - Mantıksal Operatörler */


/* && (AND) Operatörü */
/* Koşullardan biri false olursa false yazdırır */
console.log((20>10) && (30>20)); // true

/* || (Or) Operatörü */
/* Koşullardan biri true olması true yazdırır */
console.log((20>10) || (30>20)); // true


/* ! (NOT) Operatörü */
/* X > Z Değildir = true mantığı */
console.log(!(x>z)); // false

