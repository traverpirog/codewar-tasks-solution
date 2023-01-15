
        function expandedForm(num) {
            return num
                .toString()
                .split('')
                .reverse()
                .map((item, index) => Math.pow(10, index) * item)
                .filter(item => item !== 0)
                .reverse()
                .join(' + ');
        }

        console.log(expandedForm(12), '10 + 2');
        console.log(expandedForm(42), '40 + 2');
        console.log(expandedForm(70304), '70000 + 300 + 4');
    