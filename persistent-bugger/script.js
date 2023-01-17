

function persistence(num) {
    if (num < 10) return 0;
    let numbers = num.toString().split('').map(number => +number);

    function multiplicate(num2) {
        let result = 1;
        for (let i = 0; i < num2.length; i++) {
            result *= num2[i];
        }
        return result;
    }

    let i = 0;
    let result2 = multiplicate(numbers);
    console.log(multiplicate(numbers));
   /*  while(result2 > 10) {
        result2 = multiplicate(numbers);
        i++;
    } */

    return i;
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);