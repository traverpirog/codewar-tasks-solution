function solution(input, markers) {
    let inputArr = input.split('\n');

    for (let i = 0; i < markers.length; i++) {
        inputArr = inputArr.map(item => {
            let index = item.indexOf(markers[i]);
            if (index !== -1) return item.substring(0, index)
            else return item.replace(/\s*$/, '');
        })
    }

    return inputArr.join('\n').trim();
};

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]), "apples, plums\npears\noranges");
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]), "Q\nu\ne");