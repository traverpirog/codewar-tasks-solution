
        function validatePIN(pin) {
            if (pin.length === 6) return new RegExp('\\d{6}').test(pin);
            if (pin.length === 4) return new RegExp('\\d{4}').test(pin);
            return false
        }

        /*

        function validatePIN(pin) {
            return /^(\d{4}|\d{6})$/.test(pin)
        }
        
        */

        console.log(validatePIN("1"));
        console.log(validatePIN("12"));
        console.log(validatePIN("123"));
        console.log(validatePIN("12345"));
        console.log(validatePIN("1234567"));
        console.log(validatePIN("-1234"));
        console.log(validatePIN("1.234"));
        console.log(validatePIN("-1.234"));
        console.log(validatePIN("00000000"));

        console.log(validatePIN("a234"));
        console.log(validatePIN(".234"));

        console.log(validatePIN("1234"));
        console.log(validatePIN("0000"));
        console.log(validatePIN("1111"));
        console.log(validatePIN("123456"));
        console.log(validatePIN("098765"));
        console.log(validatePIN("000000"));
        console.log(validatePIN("123456"));
        console.log(validatePIN("090909"));
    