
        /*function getSum(a, b) {
            if (a === b) return a;
            let arrNumbers = [];
            if ((b < 0 && a >= 0) || (b >= 0 && a >= 0) || (b <= 0 && a <= 0)) {
                for(let i = b; i <= a; i++) {
                    arrNumbers.push(i);
                }
            }
            if ((b >= 0 && a <= 0) || (b >= 0 && a >= 0) || (b <= 0 && a <= 0)) {
                for(let i = a; i <= b; i++) {
                    arrNumbers.push(i);
                }
            }
            
            return arrNumbers.reduce((total, num) => total+=num, 0);
        }*/

        function getSum(a, b) {
            let min = Math.min(a, b),
                max = Math.max(a, b);

            return (max - min + 1) * (min + max) / 2;
        }

        console.log(getSum(0, -1), -1);
        console.log(getSum(0, 1), 1);
        console.log(getSum(2, 2), 2);
        console.log(getSum(-2, 2), 0);
        console.log(getSum(505, 4), 127759);
        console.log(getSum(-5, -1), -15);
        console.log(getSum(-1, -5), -15);
        console.log(getSum(400, 580), 88690);
    