
        function solution(str, ending) {
            return str.slice(str.length - ending.length) === ending;
        }

        console.log(solution('abcde', 'cde'), true)
        console.log(solution('abcde', 'abc'), false)
    