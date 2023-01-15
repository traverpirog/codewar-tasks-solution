
        function countPositivesSumNegatives(input) {
            if (input === null) {
                return [];
            } else if (input.length < 1) {
                return [];
            } else {
                let res1 = input.filter(item => item > 0).length;
                let res2 = input.reduce((total, item) => item < 0 ? total += item : total += 0, 0);
                return [res1, res2];
            }
        }

        console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), [10, -65])
        console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]), [8, -50])
        console.log(countPositivesSumNegatives([]), [8, -50])
        console.log(countPositivesSumNegatives(), [8, -50])
    