
        function reverseWords(str) {
            let wordsArr = str.split(' ');
            let newArr = [];
            for (let i = 0; i < wordsArr.length; i++) {
                newArr.push(wordsArr[i].split('').reverse().join(''))
            }
            return newArr.join(' ');
        }

        console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
        console.log(reverseWords('The quick brown fox jumps over the lazy dog.') === 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    