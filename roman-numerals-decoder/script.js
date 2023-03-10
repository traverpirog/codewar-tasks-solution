
        function solution(roman) {
            // complete the solution by transforming the 
            // string roman numeral into an integer
            let decoder = {
                I: 1,
                V: 5,
                X: 10,
                L: 50,
                C: 100,
                D: 500,
                M: 1000
            }

            const codedString = roman.split('');
            let newDecoded = [];

            for (let j = 0; j < codedString.length; j++) {
                for (let key in decoder) {
                    if (key === codedString[j]) {
                        newDecoded.push(decoder[key])
                    }
                }
            }
            let result = newDecoded.reduce((total, item, index) => {
                if (item < newDecoded[index + 1] && newDecoded[index + 1] !== undefined) {
                    total = total + (newDecoded[index + 1] - item) - newDecoded[index + 1];
                } else {
                    total += item
                }
                return total;
            }, 0)

            return result;
        }

        console.log(solution('XXI'), 21);
        console.log(solution('I'), 1);
        console.log(solution('IV'), 4);
        console.log(solution('MMVIII'), 2008);
        console.log(solution('MDCLXVI'), 1666);
        console.log(solution('MMMDCXCIII'), 3693);
    