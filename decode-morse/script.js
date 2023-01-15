
        let MORSE_CODE; // Готовая функция с codewars

        decodeMorse = function(morseCode){
            let strArr = morseCode.split(' '); // ['....','.','-.--'];
            return strArr.map(newStr => newStr === '' ? newStr = ' ' : MORSE_CODE[newStr]).join('').replace(/\s{2,}/g, ' ').trim()
        }

        console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))
        console.log(decodeMorse('.... . -.--   .--- ..- -.. .') === 'HEY JUDE')
    