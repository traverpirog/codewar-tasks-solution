
        // Sum Numbers
        function sum(numbers) {
            "use strict";
            return numbers.reduce((total, num) => total += num, 0)
        };

        console.log(sum([]), 0);
        console.log(sum([1, 5.2, 4, 0, -1]), 9.2);
    