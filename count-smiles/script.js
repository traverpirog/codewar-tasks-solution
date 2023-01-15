
        //return the total number of smiling faces in the array
        function countSmileys(arr) {
            let validSmileys = [')', 'D'];
            let validNoses = ['-', '~'];
            let validEyes = [':', ';'];
            return arr.reduce((total, item, index) => {
                if (item.length > 2 && validNoses.includes(item[1]) && validSmileys.includes(item[item.length - 1]) && validEyes.includes(item[0]) && item.length <= 3) {
                    total += 1;
                }
                if (item.length < 3 && validEyes.includes(item[0]) && validSmileys.includes(item[item.length - 1])) {
                    total += 1;
                }
                return total;
            }, 0)
        }

        console.log(countSmileys([]), 0);
        console.log(countSmileys([':D', ':~)', ';~D', ':)']), 4);
        console.log(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
        console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
        console.log(countSmileys([":-)" , ";~D" , ":-D" , ":_D"]), 3);
        console.log(countSmileys([":---)" , "))" , ";~~D" , ";D"]), 1);