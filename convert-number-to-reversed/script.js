
        function digitize(n) {
            return String(n).split('').map(item => +item).reverse()
        }

        console.log(digitize(35231), [1, 3, 2, 5, 3]);
        console.log(digitize(0), [0]);
    