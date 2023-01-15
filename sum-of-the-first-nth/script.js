
        function SeriesSum(n) {
            let arr = [];
            let res = 0;
            for (let i = 1; i <= n; i++) {
                arr.push(i)
            }
            for (let i = 0; i < arr.length; i++) {
                if (i === 0) res += arr[i];
                if (i > 0) {
                    arr[i] = arr[i - 1] + 3;
                    res += 1 / arr[i]
                }
            }

            return res.toFixed(2)
        }

        //console.log(SeriesSum(1), "1.00");
        //console.log(SeriesSum(2), "1.25");
        //console.log(SeriesSum(3), "1.39");
        console.log(SeriesSum(4), "1.49");
    