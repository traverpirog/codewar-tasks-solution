
        function palindrome(str) {
            let formattedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
            console.log(formattedStr);
            return formattedStr === formattedStr.split('').reverse().join('');
        }

        //console.log(palindrome("eye"), true);
        //console.log(palindrome("race car"), true)
        console.log(palindrome("_eye"), true)
        console.log(palindrome("A man, a plan, a canal. Panama"), true)
        console.log(palindrome("My age is 0, 0 si ega ym."), true)
        console.log(palindrome("0_0 (: /-\ :) 0-0"), true)
        console.log(palindrome("1 eye for of 1 eye."), false);
    