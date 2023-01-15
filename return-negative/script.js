
        function makeNegative(num) {
            return num > 0 ? +`-${num}` : num;
        }

        console.log(makeNegative(42)) // -42
        console.log(makeNegative(0)) // 0
        console.log(makeNegative(-42)) // -42