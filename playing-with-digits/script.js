
        function digPow(n, p) {
            const arrNumbers = String(n).split('').map((item, index) => Math.pow(item, p + index));
            let result = 0;
            let k = -1;
            for (let i = 0; i < arrNumbers.length; i++) {
                result += arrNumbers[i];
            }

            if (result % n === 0) {
                k = result / n;
            } else {
                k = -1;
            }

            return k;
        }

        console.log(digPow(89, 1), 1)
        console.log(digPow(92, 1), -1)
        console.log(digPow(46288, 3), 51)
    