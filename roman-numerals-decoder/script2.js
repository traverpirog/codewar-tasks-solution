
        function convertToRoman(num) {
            // complete the solution by transforming the 
            // string num numeral into an integer
            let decoder = {
                I: 1,
                V: 5,
                X: 10,
                L: 50,
                C: 100,
                D: 500,
                M: 1000
            };

            let romanString = '';
            let arrNum = num.toString().split('').reverse().map((item, index) => Math.pow(10, index) * item);
            
            for (const key in decoder) {
                for (let i = 0; i < arrNum.length; i++) {
                    if (arrNum[i] / +String(arrNum[i])[0] === decoder[key]) {
                        romanString += key.repeat(+String(arrNum[i])[0]);
                    }
                }
            }

            return romanString.split('').reverse().join('');
        }

        console.log(convertToRoman(36), 'XXXVI');
        console.log(convertToRoman(2), 'II');
        console.log(convertToRoman(3999), 'MMMCMXCIX');
    