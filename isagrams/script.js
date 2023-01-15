function isIsogram(str){
let strObj = str.toLowerCase().split('').reduce((acc, n) => (acc[n] = (acc[n] || 0) + 1, acc), {});
let checker = true;
if (str === '') {
return true
}
for (const key in strObj) {
if (strObj[key] > 1) {
checker = false;
}
}
return checker
}

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("isogram")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
console.log(isIsogram("isIsogram")); // false
console.log(isIsogram("")); // true