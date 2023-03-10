
        function isPrime(num) {
            let bool = false;
            let positiveNum = num >= 0 ? num : num * -1;
            for (let i = 1; i < positiveNum; i++ ) {
                if (positiveNum % i === 0) {
                    if (positiveNum !== 0 || positiveNum !== 1) {
                        if (i > 1) {
                            bool = false;
                        } else {
                            bool = true
                        }
                    }
                }
            }

            return bool;
        }
        let t0 = performance.now();
        console.log(isPrime(0), false, "0 is not prime");
        let t1 = performance.now();
        console.log(t1 - t0, 'milliseconds');
        t0 = performance.now();
        console.log(isPrime(1), false, "1 is not prime");
        t1 = performance.now();
        console.log(t1 - t0, 'milliseconds');
        t0 = performance.now();
        console.log(isPrime(2), true, "2 is prime");
        t1 = performance.now();
        console.log(t1 - t0, 'milliseconds');
        t0 = performance.now();
        console.log(isPrime(73), true, "73 is prime");
        t1 = performance.now();
        console.log(t1 - t0, 'milliseconds');
        t0 = performance.now();
        console.log(isPrime(75), false, "75 is not prime");
        t1 = performance.now();
        console.log(t1 - t0, 'milliseconds');
        t0 = performance.now();
        console.log(isPrime(-1), false, "-1 is not prime");
        t1 = performance.now();
        console.log(t1 - t0, 'milliseconds');
        t0 = performance.now();
        console.log(isPrime(-5), false, "-5 is not prime");
        t1 = performance.now();
        console.log(t1 - t0, 'milliseconds');
        t0 = performance.now();
        console.log(isPrime(-1243835973), false, "-1243835973 is not prime");
        t1 = performance.now();
        console.log(t1 - t0, 'milliseconds');
    