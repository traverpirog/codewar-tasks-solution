function sumOfDivided(lst) {
    let arrFactors = lst.map(item => {
        let factors = [];
        for (let i = 0; i < item; i++) {
            if (item % i === 0) {
                factors.push(i)
            }
        }
        return factors;
    }).join(',').split(',');

    let filteredFactors = arrFactors
        .reduce((total, item) => {
            return total.includes(item) ? total : [...total, item];
        }, [])
        .map(item => Number(item))
        .sort((a, b) => a - b);

    let resultArr = [];
    for (i = 0; i < filteredFactors.length; i++) {
        for (let j = 0; j < lst.length; j++) {
            if (lst[j] % filteredFactors[i] === 0) {
                resultArr.push([i + 1, lst[j]])
            }
        }
    }

    return resultArr
}
console.log(sumOfDivided([12, 15]), [[2, 12], [3, 27], [5, 15]]);
console.log(sumOfDivided([15, 21, 24, 30, 45]), [[2, 54], [3, 135], [5, 90], [7, 21]]);